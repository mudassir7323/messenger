import React from "react";
import GroupList from "./GroupsList";
import Chatbox from "./Chatbox";
import Signout from "./Signout";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedGroup } from "../redux/features/chatslice";
import { IoMdArrowRoundBack } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

function Home() {
  const selectedGroup = useSelector((state) => state.chat.selectedGroup);
  const dispatch = useDispatch();

  const back = () => {
    dispatch(setSelectedGroup(null));
  };

  return (
    <div className="h-screen flex flex-col lg:flex-row">
      {/* Sidebar (GroupList) */}
      <aside className="lg:w-1/4 bg-white dark:bg-gray-800 shadow-lg z-30 flex flex-col">
        {/* Headbar (Logout Section) */}
        <div className="bg-gray-800 static text-white p-4">
          <Signout />
        </div>

        {/* Group List */}
        <div className={`flex-1 overflow-y-auto ${selectedGroup ? "hidden lg:block" : "block"}`}>
          <GroupList />
        </div>
      </aside>

      {/* Main Content */}
      <main className={`flex-1 bg-gray-200 dark:bg-gray-700 p-4 transition-all duration-300 flex flex-col ${selectedGroup ? "" : "items-center justify-center"}`}>
        {selectedGroup ? (
          <div className="flex flex-col h-full">
            <div className="bg-gray-800 p-3 rounded-lg sticky top-0 z-10">
              <div className="flex items-center">
                <button onClick={back} className="text-blue-500 hover:text-blue-700 focus:outline-none mr-3">
                  <IoMdArrowRoundBack className="text-2xl" />
                </button>

                {selectedGroup.icon ? (
                  <img
                    src={`data:image/jpeg;base64,${selectedGroup.icon}`}
                    alt={selectedGroup.name}
                    className="w-12 h-12 rounded-full object-cover mr-3"
                  />
                ) : (
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 mr-3">
                    <CgProfile className="text-gray-500 dark:text-gray-400" size={48} />
                  </div>
                )}

                <h2 className="text-white text-2xl font-bold">{selectedGroup.name}</h2>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto mt-4">
              <Chatbox />
            </div>
          </div>
        ) : (
          <p className="text-gray-500">Select a group to start chatting</p>
        )}
      </main>
    </div>
  );
}

export default Home;
