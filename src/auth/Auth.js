import axios from "axios";

const API_URL = "150.230.233.10:8000";

export async function signUp({ username, email, password }) {
  try {
    const response = await fetch(`${API_URL}/users/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      return { data, success: true };
    } else {
      return { success: false, message: data.message || "Sign-up failed" };
    }
  } catch (error) {
    return { success: false, message: "An error occurred. Please try again." };
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
    return { success: false, message: errorMessage };
  }
};

