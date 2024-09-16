import React from "react";
import "./scroller.css";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserPlus, FaUsers } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedGroup } from "../redux/features/chatslice";
import { setFilteredGroups } from "../redux/features/chatslice";

function GroupList() {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.chat.filteredGroups);
  const Navigate = useNavigate();

  const manageSelect = (group) => {
    dispatch(setSelectedGroup(group));
  };

  const handleCreateGroup = () => {
    Navigate("/formgroup");
  };

  const handleJoinGroup = () => {
    Navigate("/joingroup");
  };

  useEffect(() => {
    axios
      .get("https://awful-rhinoceros-ayaani12-95861aee.koyeb.app/groups/", {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("loginToken")}`,
        },
      })
      .then((response) => {
        console.log(response.data);

        dispatch(setFilteredGroups(response.data));
      })
      .catch((error) => {
        console.error("There was an error making the GET request:", error);
      });
  }, []);

  return (
    <div className="flex flex-col h-full p-2 bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300">
      <div className="flex flex-col m-2 h-full overflow-y-scroll custom-scrollbar">
        {list.map((item, index) => (
          <div
            key={index}
            className="flex items-center p-3 mb-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 cursor-pointer"
            onClick={() => manageSelect(item)}
          >
            {item.image ? (
              <img
                src={`data:image/jpeg;base64,${item.image}`}
                alt={item.name}
                className="w-12 h-12 rounded-full object-cover mr-3"
              />
            ) : (
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 mr-3">
                <CgProfile
                  className="text-gray-500 dark:text-gray-400"
                  size={48}
                />
              </div>
            )}
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-gray-900 dark:text-gray-200">
                {item.name}
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Last message...
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between p-4 bg-gray-100 dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700">
        <button
          onClick={handleCreateGroup}
          className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
        >
          <FaUserPlus className="text-2xl mr-2" />
          Create Group
        </button>
        <button
          onClick={handleJoinGroup}
          className="flex items-center text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300"
        >
          <FaUsers className="text-2xl mr-2" />
          Join Group
        </button>
      </div>
    </div>
  );
}

export default GroupList;
