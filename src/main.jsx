import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Brands from "./pages/Brands";
import MyProfile from "./pages/MyProfile";
import AuthProvider from "./provider/AuthProvider";
import PrivetRoute from "./privet/privetRoute";
import About from "./pages/About";
import BrandsDetails from "./pages/BrandsDetails";
import Error from "./pages/Error";
import ForgetPassword from "./pages/ForgetPassword";
import UpdateProfile from "./pages/UpdateProfile";
import Review from "./pages/Review";
import UserReview from "./pages/UserReview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/couponCollect.json"),
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
        element: <Brands></Brands>,
        loader: () => fetch("/couponCollect.json"),
      },
      {
        path: "/brand/:id",
        element: (
          <PrivetRoute>
            <BrandsDetails></BrandsDetails>
          </PrivetRoute>
        ),
        loader: async ({ params }) => {
          const res = await fetch("/couponCollect.json");
          const data = await res.json();
          const singleData = data.find((d) => d._id === params.id);
          return singleData;
        },
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
      {
        path: "/forget-password",
        element: <ForgetPassword></ForgetPassword>,
      },
      {
        path: "/update-profile",
        element: (
          <PrivetRoute>
            <UpdateProfile></UpdateProfile>
          </PrivetRoute>
        ),
      },
      {
        path: "/feedback",
        element: (
          <PrivetRoute>
            <Review></Review>
          </PrivetRoute>
        ),
      },
      {
        path: "/user-review",
        element: <UserReview></UserReview>,
        loader: () => fetch("/userReview.json"),
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
