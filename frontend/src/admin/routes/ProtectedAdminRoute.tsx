import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";

type ProtectedAdminRouteProps = {
  children: ReactNode;
};

function ProtectedAdminRoute({ children }: ProtectedAdminRouteProps) {
  const token = localStorage.getItem("adminToken");
  const isAuthenticated = Boolean(token);

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  return <>{children}</>;
}

export default ProtectedAdminRoute;