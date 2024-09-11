import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../auth/Auth";

function SignUp() {
  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !email || !password || !confirmPassword) {
      setError("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await signUp({ username, email, password });

      if (response.success) {
        navigate("/login");
      } else {
        setError(response.message || "Sign-up failed. Please try again.");
      }
    } catch (error) {
      setError("Sign-up failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "username":
        setusername(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <form
        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-md"
        onSubmit={handleSubmit}
      >
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">
          Sign Up
        </h2>

        <div className="mb-4">
          <input
            type="text"
            value={username}
            name="username"
            placeholder="User Name"
            onChange={handleOnChange}
            disabled={loading}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-200"
          />
        </div>

        <div className="mb-4">
          <input
            type="email"
            value={email}
            name="email"
            placeholder="Email"
            onChange={handleOnChange}
            disabled={loading}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-200"
          />
        </div>

        <div className="mb-4">
          <input
            type="password"
            value={password}
            name="password"
            placeholder="Password"
            onChange={handleOnChange}
            disabled={loading}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-200"
          />
        </div>

        <div className="mb-4">
          <input
            type="password"
            value={confirmPassword}
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleOnChange}
            disabled={loading}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-200"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? (
            <svg
              className="animate-spin h-5 w-5 text-white mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              ></path>
            </svg>
          ) : (
            "Sign Up"
          )}
        </button>

        <div className="text-center mt-4">
          <p className="text-gray-700 dark:text-gray-300">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-500 hover:text-blue-600 underline"
            >
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
