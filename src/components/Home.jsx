import React, { useState } from "react";
import GroupList from "./GroupsList";
import Nav from "./Nav";
import Chatbox from "./Chatbox";
import { FaBars, FaTimes } from "react-icons/fa";

function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleGroupSelect = (group) => {
    setSelectedGroup(group);
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Nav */}
      <Nav />

      <div className="flex-1 flex overflow-hidden">
        {/* Mobile Menu Button */}
        <button
          className="lg:hidden absolute top-4 left-4 z-20 p-2 bg-gray-800 text-white rounded focus:outline-none"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Sidebar */}
        <aside
          className={`${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 fixed inset-y-0 lg:relative lg:top-15 custom-scrollbar z-30 w-full lg:w-1/4 bg-white dark:bg-gray-800 p-6 shadow-lg overflow-y-auto transition-transform duration-300 ease-in-out mt-16 lg:mt-0`} // Adjust lg:top-16 and lg:mt-0 as needed
        >
          <GroupList/>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-gray-200 dark:bg-gray-700 p-6 overflow-y-auto">
          <Chatbox />
        </main>
      </div>
    </div>
  );
}

export default Home;
