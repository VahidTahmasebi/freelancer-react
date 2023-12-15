import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import useAuthorize from "../features/authentication/useAuthorize";

import Loading from "./Loading";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();

  const { isLoading, isAuthenticated, isAuthorized } = useAuthorize();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) navigate("/auth");
    if (!isLoading && !isAuthorized) navigate("/not-access");
  }, [isLoading, isAuthenticated, isAuthorized, navigate]);

  if (isLoading)
    return (
      <div className="h-screen flex justify-center items-center bg-secondary-100">
        <Loading />
      </div>
    );

  if (isAuthenticated && isAuthorized) return children;
};

export default ProtectedRoute;
