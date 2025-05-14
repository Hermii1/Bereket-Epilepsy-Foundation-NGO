import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout.jsx";
import Home from "./pages/home.jsx";
import Error_page from "./pages/Error_page.jsx"; // Import the ErrorPage component
import About from "./pages/About.jsx"; // Import the About component
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // This layout will apply to all child routes
    errorElement: <Error_page />, // Render Error_page for invalid routes or errors
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />, // Render the About component when the path is "/about"
      }
    ],
  },
]);

export default router;