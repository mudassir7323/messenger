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
        <div>
            <button
                onClick={handleSignOut}
                className="bg-red-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-700 transition duration-300 ease-in-out"
            >
                Logout
            </button>
        </div>
    );
}

export default Signout;
