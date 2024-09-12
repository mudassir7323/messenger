import React from "react";

function Chatbox({ selectedGroup }) {
    if (!selectedGroup) {
        return (
            <div className="flex-1 bg-gray-800 p-4 rounded-lg shadow-lg text-center text-gray-300">
                Select a group to start chatting
            </div>
        );
    }

    return (
        <div className="flex-1 bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col h-[calc(100vh-180px)] sm:h-[calc(100vh-120px)]"> {/* Responsive height */}
            <div className="flex items-center mb-4">
                <img
                    src={selectedGroup.image}
                    alt={selectedGroup.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <h2 className="text-white text-2xl font-semibold">{selectedGroup.name}</h2>
            </div>
            <div className="flex-1 bg-gray-700 rounded-lg p-4 text-white overflow-y-auto max-h-[60vh] sm:max-h-[50vh] lg:max-h-[65vh]"> {/* Scrollable and adjusted for various screen sizes */}
                {/* Chat content would go here */}
                Chat content for {selectedGroup.name}
            </div>
        </div>
    );
    
}

export default Chatbox;
