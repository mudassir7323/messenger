import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

function GroupForm() {
  const [groupName, setGroupName] = useState("");
  const [groupImageBinary, setGroupImageBinary] = useState(null);
  const [loading, setLoading] = useState(false); // Added loading state
  const navigate = useNavigate();

  const resizeImage = (file, maxWidth, maxHeight, callback) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = (e) => {
      const img = new Image();
      img.src = e.target.result;

      img.onload = () => {
        const canvas = document.createElement("canvas");
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > maxWidth) {
            height = (height * maxWidth) / width;
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width = (width * maxHeight) / height;
            height = maxHeight;
          }
        }

        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);

        canvas.toBlob((blob) => {
          callback(blob);
        }, "image/jpeg", 0.7);
      };
    };

    reader.onerror = (error) => {
      console.error("Error resizing image:", error);
    };
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("File size exceeds 5 MB. Please upload a smaller image.");
        return;
      }

      resizeImage(file, 800, 800, (resizedBlob) => {
        const reader = new FileReader();
        reader.readAsArrayBuffer(resizedBlob);

        reader.onload = () => {
          const arrayBuffer = reader.result;
          setGroupImageBinary(arrayBuffer);
          console.log("Resized image binary data:", arrayBuffer);
        };

        reader.onerror = (error) => {
          console.error("Error reading resized image:", error);
        };
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true); // Set loading to true

    const formData = {
      name: groupName,
      icon: groupImageBinary ? btoa(String.fromCharCode(...new Uint8Array(groupImageBinary))) : "",
    };

    fetch("150.230.233.10:8000", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("loginToken")}`,
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        navigate("/home");
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        setLoading(false); // Set loading to false
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <IoMdArrowRoundBack
        className="absolute top-3 left-3 size-8 text-gray-700 dark:text-gray-300 cursor-pointer"
        onClick={() => {
          navigate("/home");
        }}
      />
      <div className="w-full max-w-lg m-2 p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-200 mb-6">
          Create a Group
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="mb-4">
            <label
              htmlFor="groupName"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Group Name
            </label>
            <input
              type="text"
              id="groupName"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:text-gray-200"
              placeholder="Enter group name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="groupImage"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Group Image
            </label>
            <input
              type="file"
              id="groupImage"
              onChange={handleImageUpload}
              className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:text-gray-200"
              accept="image/*"
            />
          </div>
          <button
            type="submit"
            disabled={loading} // Disable button while loading
            className={`w-full py-3 px-4 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 transition duration-300 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? (
              <svg
                className="animate-spin h-5 w-5 text-white mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                ></path>
              </svg>
            ) : (
              "Create Group"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default GroupForm;
