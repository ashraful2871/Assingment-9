import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Brand from "./pages/Brand";
import MyProfile from "./pages/MyProfile";
import AuthProvider from "./provider/AuthProvider";
import PrivetRoute from "./privet/privetRoute";
import About from "./pages/About";
import BrandSells from "./components/BrandSels";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("./couponCollect.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/sign-up",
        element: <SignUp></SignUp>,
      },
      {
        path: "/brands",
        element: <Brand></Brand>,
      },
      {
        path: "/brand/:id",
        element: <BrandSells></BrandSells>,
      },
      {
        path: "/my-profile",
        element: (
          <PrivetRoute>
            <MyProfile></MyProfile>,
          </PrivetRoute>
        ),
      },
      {
        path: "/about-dev",
        element: <About></About>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
