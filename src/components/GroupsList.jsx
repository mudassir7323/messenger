import React from "react";

const list = [
    { name: "John Doe", image: "https://i.pravatar.cc/150?img=1" },
    { name: "Jane Smith", image: "https://i.pravatar.cc/150?img=2" },
    { name: "Alice Johnson", image: "https://i.pravatar.cc/150?img=3" },
    { name: "Bob Brown", image: "https://i.pravatar.cc/150?img=4" },
    { name: "Charlie Davis", image: "https://i.pravatar.cc/150?img=5" },
    { name: "Diana Evans", image: "https://i.pravatar.cc/150?img=6" },
    { name: "Eva Green", image: "https://i.pravatar.cc/150?img=7" },
    { name: "Frank Harris", image: "https://i.pravatar.cc/150?img=8" },
    { name: "Grace Ives", image: "https://i.pravatar.cc/150?img=9" },
    { name: "Henry James", image: "https://i.pravatar.cc/150?img=10" },
    { name: "Charlie Davis", image: "https://i.pravatar.cc/150?img=5" },
    { name: "Diana Evans", image: "https://i.pravatar.cc/150?img=6" },
    { name: "Eva Green", image: "https://i.pravatar.cc/150?img=7" },
    { name: "Frank Harris", image: "https://i.pravatar.cc/150?img=8" },
    { name: "Grace Ives", image: "https://i.pravatar.cc/150?img=9" },
    { name: "Henry James", image: "https://i.pravatar.cc/150?img=10" },
    { name: "John Doe", image: "https://i.pravatar.cc/150?img=1" },
    { name: "Jane Smith", image: "https://i.pravatar.cc/150?img=2" },
    { name: "Alice Johnson", image: "https://i.pravatar.cc/150?img=3" },
    { name: "Bob Brown", image: "https://i.pravatar.cc/150?img=4" },
    { name: "Charlie Davis", image: "https://i.pravatar.cc/150?img=5" },
    { name: "Diana Evans", image: "https://i.pravatar.cc/150?img=6" },
    { name: "Eva Green", image: "https://i.pravatar.cc/150?img=7" },
    { name: "Frank Harris", image: "https://i.pravatar.cc/150?img=8" },
    { name: "Grace Ives", image: "https://i.pravatar.cc/150?img=9" },
    { name: "Henry James", image: "https://i.pravatar.cc/150?img=10" },
    { name: "Charlie Davis", image: "https://i.pravatar.cc/150?img=5" },
    { name: "Diana Evans", image: "https://i.pravatar.cc/150?img=6" },
    { name: "Eva Green", image: "https://i.pravatar.cc/150?img=7" },
    { name: "Frank Harris", image: "https://i.pravatar.cc/150?img=8" },
    { name: "Grace Ives", image: "https://i.pravatar.cc/150?img=9" },
    { name: "Henry James", image: "https://i.pravatar.cc/150?img=10" }
];

function GroupList({ onGroupSelect }) {
    return (
        <div className="flex flex-col p-4 h-full  bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300">
            <div className="flex flex-col  h-full overflow-y-scroll">
                {list.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center p-3 mb-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 cursor-pointer"
                        onClick={() => onGroupSelect(item)}
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
