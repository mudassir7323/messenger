import React, { useEffect, useRef, useState } from "react";
import { IoSendSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { useSelector } from "react-redux";

function Chatbox() {
  const selectedGroup = useSelector((state) => state.chat.selectedGroup);
  const messages = useSelector((state) => state.chat.messages);
  const chatContentRef = useRef(null);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (chatContentRef.current) {
      chatContentRef.current.scrollTop = chatContentRef.current.scrollHeight;
    }
  }, [messages]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendClick = (e) => {
    e.preventDefault();
    sendMessage();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const sendMessage = () => {
    if (input.trim()) {
      console.log("Message sent:", input);
      setInput(""); // Clear input field after sending
    }
  };

  // If no group is selected, render a message
  if (!selectedGroup) {
    return (
      <div className="flex-1 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 p-6 rounded-lg shadow-lg text-center text-white flex items-center justify-center">
        <h2 className="text-2xl font-bold">No group selected</h2>
        <br />
        <p className="text-lg">Please select a group to start chatting</p>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col h-[calc(100vh-160px)]">
      {/* Group Header */}
      <div className="flex items-center mb-4 bg-gray-800 p-3 rounded-lg">
        
        {selectedGroup.icon ? (
              <img
                src={`data:image/jpeg;base64,${selectedGroup.icon}`}
                alt={selectedGroup.name}
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
        <h2 className="text-white text-2xl font-bold">{selectedGroup.name}</h2>
      </div>

      {/* Chat Content */}
      <div
        className="flex-1 bg-gray-800 p-4 rounded-lg text-white overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-500"
        ref={chatContentRef}
      >
        {messages.length > 0 ? (
          messages.map((msg, index) => (
            <div key={index} className="mb-4">
              <div className="text-sm font-semibold mb-1">User {index + 1}</div>
              <p className="bg-indigo-600 p-3 rounded-lg shadow-md max-w-max">
                {msg.text}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-400 text-center">No messages yet</p>
        )}
      </div>

      {/* Input Field (Inside Chatbox) */}
      <div className="mt-4">
        <div className="flex items-center p-3 bg-gray-700 rounded-lg">
          <textarea
            ref={chatContentRef}
            className="flex-1 p-3 text-sm bg-gray-900 text-white border border-gray-600 rounded-lg resize-none max-h-40 focus:outline-none placeholder-gray-400"
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
            rows={1}
          />
          <button
            type="submit"
            onClick={handleSendClick}
            className="ml-4 p-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-300"
          >
            <IoSendSharp className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chatbox;
