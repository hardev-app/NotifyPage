import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes"
import Layout from "./components/Layout"
import NoPage from "./pages/NoPage";
import './App.css';

function App() {

  const router = createBrowserRouter([
    {
      path: "/NotifyPage",
      element: <Layout />,
      errorElement: <NoPage />,
      children: routes
    }
  ])

  return (
      <RouterProvider router={router} />
  );
}

export default App;