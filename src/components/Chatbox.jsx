import React, { useEffect, useRef, useState } from "react";
import { IoSendSharp } from "react-icons/io5";
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

  return (
    <div className="flex-1 bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col h-[calc(100vh-160px)]">
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
