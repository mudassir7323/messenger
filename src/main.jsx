import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import App from "./App";
import "./index.css";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import GroupJoin from "./components/pages/GroupJoin";
import GroupForm from "./components/pages/GroupForm";
import ProtectedRoute from "./components/ProtectedRoute"; // Import the ProtectedRoute component

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/home",
        element: <ProtectedRoute element={<Home />} />, // Protect this route
      },
      {
        path: "/joingroup",
        element: <ProtectedRoute element={<GroupJoin />} />, // Protect this route
      },
      {
        path: "/formgroup",
        element: <ProtectedRoute element={<GroupForm />} />, // Protect this route
      },
    ],
  },
]);

// Render the app with RouterProvider
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </Provider>
);
