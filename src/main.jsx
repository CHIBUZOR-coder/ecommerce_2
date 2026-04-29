import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Men from "./pages/Men.jsx";
import Women from "./pages/Women.jsx";
import Children from "./pages/Children.jsx";
import ProductProvider from "./Context/ProductProvider.jsx";
import SingleProduct from "./pages/SingleProduct.jsx";
import Cart from "./pages/Cart.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        element: <About />,
        path: "about",
      },
      {
        element: <Contact />,
        path: "contact",
      },
      {
        element: <About />,
        path: "about",
      },
      {
        element: <Men />,
        path: "men",
      },
      {
        element: <Women />,
        path: "women",
      },
      {
        element: <Children />,
        path: "children",
      },
      {
        element: <SingleProduct />,
        path: "single_product/:id",
      },
      {
        element: <Cart />,
        path: "cart",
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <ProductProvider>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </ProductProvider>,
);
