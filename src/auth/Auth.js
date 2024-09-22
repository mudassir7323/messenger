import axios from "axios";
import { api_URL } from "../redux/features/variables";


const API_URL = api_URL;

console.log(API_URL);


export async function signUp({ username, email, password }) {
  try {
    const response = await axios.post(`${API_URL}/users/signup`, {
      username,
      email,
      password,
    });

    return { data: response.data, success: true };
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || "Sign-up failed",
    };
  }
}

export const signIn = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/users/signin`, credentials);
    console.log(response.data);

    localStorage.setItem("loginToken", response.data.access_token);
    return { success: true, token: response.data.access_token };
  } catch (error) {
    console.error("Sign-in error:", error.response?.data || error.message);

    return {
      success: false,
      message: error.response?.data?.message || "Sign-in failed",
    };
  }
};

export const signOut = async () => {
  try {
    const token = localStorage.getItem("loginToken");
    if (!token) {
      throw new Error("No authentication token found.");
    }

    const response = await axios.post(
      `${API_URL}/users/logout`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
          accept: 'application/json',
        },
      }
    );

    console.log("Sign-out successful:", response.data);
    localStorage.removeItem("loginToken");

    return { success: true };
  } catch (error) {
    console.error("Sign-out error:", error.response || error);
    return { success: false, message: error.message };
  }
};
