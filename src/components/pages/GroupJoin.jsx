import React, { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function GroupJoin() {
  const [groupName, setGroupName] = useState("");
  const [groupCode, setGroupCode] = useState("");
  const [loading, setLoading] = useState(false); // Added loading state
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!groupName || !groupCode) {
      // Add validation if necessary
      return;
    }

    setLoading(true); // Set loading to true

    axios
      .post(
        `https://awful-rhinoceros-ayaani12-95861aee.koyeb.app/groups/join/${groupCode}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("loginToken")}`,
            accept: "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        // Handle successful response
        navigate("/home");
      })
      .catch((error) => {
        console.error(error);
        // Handle error response
      })
      .finally(() => {
        setLoading(false); // Set loading to false
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <IoMdArrowRoundBack
        className="absolute top-3 left-3 size-8 text-gray-700 dark:text-gray-300 cursor-pointer"
        onClick={() => {
          navigate("/home");
        }}
      />
      <div className="w-full max-w-lg p-8 m-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-200 mb-6">
          Join a Group
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="mb-4">
            <label
              htmlFor="groupName"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Group Name
            </label>
            <input
              type="text"
              id="groupName"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:text-gray-200"
              placeholder="Enter group name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="groupCode"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Group Code
            </label>
            <input
              type="text"
              id="groupCode"
              value={groupCode}
              onChange={(e) => setGroupCode(e.target.value)}
              className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:text-gray-200"
              placeholder="Enter group Code"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading} // Disable button while loading
            className={`w-full py-3 px-4 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 transition duration-300 ${
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
              "Join Group"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default GroupJoin;