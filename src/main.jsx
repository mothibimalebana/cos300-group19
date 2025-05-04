import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App.jsx"
import Login from "./Login.jsx"
import MfaVerification from "./MfaVerification.jsx"
import Dashboard from "./Dashboard.jsx"
import "./index.css"

// Define all routes for the application
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/register",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/mfa-verification",
    element: <MfaVerification />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "*",
    element: <App />,
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
