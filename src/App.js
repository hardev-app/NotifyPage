import { 
  //createBrowserRouter,
  createHashRouter, 
  RouterProvider } from "react-router-dom";
import routes from "./routes"
import Layout from "./components/Layout"
import NoPage from "./pages/NoPage";
import './App.css';

function App() {

  const router = createHashRouter([
    {
      path: "/",
      basename: "/",
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