import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout.jsx";
import Home from "./pages/home.jsx";
import Error_page from "./pages/Error_page.jsx"; // Import the ErrorPage component
import About from "./pages/About.jsx"; // Import the About component
import Contact from "./pages/contact.jsx"; // Import the Contact component
import Blog from "./pages/blog.jsx"; // Import the Blog component
import HowItWorks from "./pages/HowItWorks.jsx";
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
      },
      {
        path: "/contact",
        element: <Contact />, // Render the Contact component when the path is "/contact"
      },
      {
        path: "/blog",
        element: <Blog />, // Render the Blog component when the path is "/blog"
      },
      {
        path: "/howitworks",
        element: <HowItWorks />, // Render the HowItWorks component when the path is "/howitworks"
      }
    ],
  },
]);

export default router;