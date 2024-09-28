import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "../auth/Auth"; 

function Signout() {
    const navigate = useNavigate();

    const handleSignOut = async () => {
        try {
            await signOut();
            navigate("/login");  // Redirect to the login page on successful logout
        } catch (error) {
            console.error("Sign-out failed:", error);
        }
    };

    return (
        <div className="flex justify-center">
            <button
                onClick={handleSignOut}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
                Logout
            </button>
        </div>
    );
}

export default Signout;
