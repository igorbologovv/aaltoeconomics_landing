import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";

import "../../styles/admin_layout/admin-layout.css";
import "../../styles/admin_layout/admin-sidebar.css";

function AdminLayout() {
  return (
    <div className="admin-layout">
      <AdminSidebar />
      <main className="admin-layout__content">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;