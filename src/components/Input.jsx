import React, { useState, useRef, useEffect } from "react";
import { IoSendSharp } from "react-icons/io5";

function Input() {
    const [input, setInput] = useState("");
    const textareaRef = useRef(null);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto'; // Reset height
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set height to scrollHeight
        }
    }, [input]);

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleClick = (e) => {
        e.preventDefault();
        sendMessage();
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            if (e.shiftKey) {
                // Shift + Enter: Insert a newline
                e.preventDefault();
                const { selectionStart, selectionEnd } = textareaRef.current;
                setInput(
                    input.substring(0, selectionStart) + '\n' + input.substring(selectionEnd)
                );
                textareaRef.current.selectionStart = textareaRef.current.selectionEnd = selectionStart + 1;
            } else {
                // Enter: Send message
                e.preventDefault();
                sendMessage();
            }
        }
    };

    const sendMessage = () => {
        // Implement your send logic here
        console.log("Message sent:", input);
        setInput(""); // Clear the input field after sending
    };

    return (
        <div className="fixed bottom-0 left-0 w-full lg:w-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 bg-gray-800 dark:bg-gray-900 p-4 border-t border-gray-700 dark:border-gray-700 lg:rounded-lg shadow-lg">
            <div className="flex items-center">
                <textarea
                    ref={textareaRef}
                    className="flex-1 p-3 text-sm border border-gray-600 dark:border-gray-700 rounded-l-lg resize-none overflow-y-auto max-h-32 focus:outline-none dark:bg-gray-800 dark:text-gray-200"
                    value={input}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Type your message..."
                    rows={1} // Start with 1 row
                    style={{ maxHeight: '6rem' }} // Set maximum height to 4 lines
                />
                <button
                    type="submit"
                    onClick={handleClick}
                    className="bg-blue-600 dark:bg-blue-700 text-white rounded-r-lg px-4 py-2 ml-2 hover:bg-blue-700 dark:hover:bg-blue-800 transition duration-300 flex items-center justify-center"
                >
                    <IoSendSharp className="text-xl" />
                </button>
            </div>
        </div>
    );
}

export default Input;
