import AdminDashboardHeaderSection from "../components/admin_dashboard/AdminDashboardHeaderSection";
import AdminDashboardCardsSection from "../components/admin_dashboard/AdminDashboardCardsSection";

import "../styles/admin_dashboard/admin-dashboard-header.css";
import "../styles/admin_dashboard/admin-dashboard-cards.css";

function AdminDashboardPage() {
  return (
    <>
      <AdminDashboardHeaderSection />
      <AdminDashboardCardsSection />
    </>
  );
}

export default AdminDashboardPage;