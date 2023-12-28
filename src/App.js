import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes"
import Layout from "./components/Layout"
import NoPage from "./pages/NoPage";
import './App.css';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <NoPage />,
      children: routes
    }
  ])

  return (
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;