import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedGroup } from "../redux/features/chatSlice";

function GroupList() {
  const dispatch = useDispatch(); 
  const list = useSelector((state) => state.chat.filteredGroups); 

  const manageSelect = (group) => {
    dispatch(setSelectedGroup(group)); 
  };

  return (
    <div className="flex flex-col p-4 h-full bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300">
      <div className="flex flex-col h-full overflow-y-scroll">
        {list.map((item, index) => (
          <div
            key={index}
            className="flex items-center p-3 mb-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 cursor-pointer"
            onClick={() => manageSelect(item)} 
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-12 h-12 rounded-full object-cover mr-3"
            />
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
    </div>
  );
}

export default GroupList;
