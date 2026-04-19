import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";

type ProtectedAdminRouteProps = {
  children: ReactNode;
};

export default function ProtectedAdminRoute({
  children,
}: ProtectedAdminRouteProps) {
  const isAuthenticated = localStorage.getItem("adminAuth") === "true";

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  return <>{children}</>;
}