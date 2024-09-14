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

// Define the routes using createBrowserRouter
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
        path: "/home",
        element: <Home />,
      },

      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/SignUp",
        element: <SignUp />,
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
