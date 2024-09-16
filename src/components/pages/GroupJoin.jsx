import React, { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function GroupJoin() {
  const [groupName, setGroupName] = useState("");
  const [groupCode, setGroupCode] = useState("");
  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Group Name:", groupName);
    console.log("Group Description:", groupCode);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <IoMdArrowRoundBack
        className="absolute top-3 left-3 size-8 text-gray-700 dark:text-gray-300 cursor-pointer"
        onClick={() => {
            Navigate("/home")
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
            className="w-full py-3 px-4 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 transition duration-300"
          >
            Join Group
          </button>
        </form>
      </div>
    </div>
  );
}

export default GroupJoin;
