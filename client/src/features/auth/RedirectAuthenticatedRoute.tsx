import { useStore } from "@/store";
import { JSX } from "react";
import { Navigate, useLocation } from "react-router";

type Props = {
  children: JSX.Element;
  fallbackPath?: string;
};

const RedirectAuthenticatedRoute = ({
  children,
  fallbackPath = "/",
}: Props) => {
  const { isAuthenticated } = useStore();
  const location = useLocation();

  if (isAuthenticated) {
    const comingFrom = location.state?.from?.pathname || fallbackPath;
    return <Navigate to={comingFrom} replace />;
  }
  return children;
};

export default RedirectAuthenticatedRoute;
