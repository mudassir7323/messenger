import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./info.css"

function Info({ onClose }) {
  const [groupInfo, setGroupInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const selectedGroup = useSelector((state) => state.chat.selectedGroup);

  const groupId = selectedGroup?.id;

  useEffect(() => {
    const fetchGroupInfo = async () => {
      if (!groupId) return;

      try {
        const token = localStorage.getItem("loginToken");
        const response = await fetch(`https://messenger-api.duckdns.org/groups/info/${groupId}`, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setGroupInfo(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGroupInfo();
  }, [groupId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-gray-700 dark:text-gray-300">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 flex items-start justify-start lg:justify-center bg-black bg-opacity-80 z-50">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-full lg:w-1/2 h-full lg:h-auto max-h-[90vh] overflow-auto z-60">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          &times; {/* Close button (X) */}
        </button>

        {/* Displaying the selected group's icon, name, and group code from the API */}
        {selectedGroup.icon && (
          <img
            src={`data:image/jpeg;base64,${selectedGroup.icon}`}
            alt={selectedGroup.name}
            className="w-12 h-12 rounded-full mb-2"
          />
        )}
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
          {selectedGroup.name}
        </h2>
        
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">Group Code:</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {groupInfo.code || "No code available."}
        </p>
      </div>
    </div>
  );
}

export default Info;
