import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import useAuthorize from "../features/authentication/useAuthorize";

import Loading from "./Loading";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();

  const { isLoading, isAuthenticated, isAuthorized, isVerified } =
    useAuthorize();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) navigate("/auth");
    if (!isLoading && !isVerified) {
      toast.error("Your profile has not been verified yet");
      navigate("/");
    }
    if (!isLoading && !isAuthorized) navigate("/not-access");
  }, [isLoading, isAuthenticated, isAuthorized, isVerified, navigate]);

  if (isLoading)
    return (
      <div className="h-screen flex justify-center items-center bg-secondary-100">
        <Loading />
      </div>
    );

  if (isAuthenticated && isAuthorized) return children;
};

export default ProtectedRoute;
