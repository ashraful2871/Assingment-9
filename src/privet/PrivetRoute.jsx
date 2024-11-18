import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    if (loading) {
      return (
        <div className="flex min-h-screen items-center justify-center">
          <span className="loading loading-bars loading-lg"></span>
        </div>
      );
    }
  }

  if (user && user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivetRoute;
