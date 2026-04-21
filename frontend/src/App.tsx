import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import HomePage from "./pages/HomePage";
import JoinUsPage from "./pages/JoinUsPage";
import JoinApplicationPage from "./pages/JoinApplicationPage";
import AlumniPage from "./pages/AlumniPage";
import CareerStoriesPage from "./pages/CareerStoriesPage";
import CareerStoryDetailPage from "./pages/CareerStoryDetailPage";
import ForCompaniesPage from "./pages/ForCompaniesPage";
import ContactPage from "./pages/ContactPage";
import OpenPositionsPage from "./pages/OpenPositionsPage";

import AdminLayout from "./admin/components/admin_layout/AdminLayout";
import ProtectedAdminRoute from "./admin/routes/ProtectedAdminRoute";
import AdminLoginPage from "./admin/pages/AdminLoginPage";
import AdminDashboardPage from "./admin/pages/AdminDashboardPage";
import AdminCareerStoriesPage from "./admin/pages/AdminCareerStoriesPage";
import AdminContactPage from "./admin/pages/AdminContactPage";
import AdminOpenPositionsPage from "./admin/pages/AdminOpenPositionsPage";
import AdminMembershipApplicationsPage from "./admin/pages/AdminMembershipApplicationsPage";
import AdminHomeContentPage from "./admin/pages/AdminHomeContentPage";
import AdminJoinUsContentPage from "./admin/pages/AdminJoinUsContentPage";
import AdminAlumniContentPage from "./admin/pages/AdminAlumniContentPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="join-us" element={<JoinUsPage />} />
        <Route path="join-us/apply" element={<JoinApplicationPage />} />
        <Route path="for-alumni" element={<AlumniPage />} />
        <Route path="career-stories" element={<CareerStoriesPage />} />
        <Route path="career-stories/:slug" element={<CareerStoryDetailPage />} />
        <Route path="open-positions" element={<OpenPositionsPage />} />
        <Route path="for-companies" element={<ForCompaniesPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>

      <Route path="/admin/login" element={<AdminLoginPage />} />

      <Route
        path="/admin"
        element={
          <ProtectedAdminRoute>
            <AdminLayout />
          </ProtectedAdminRoute>
        }
      >
        <Route index element={<AdminDashboardPage />} />
        <Route path="home-content" element={<AdminHomeContentPage />} />
        <Route path="join-us-content" element={<AdminJoinUsContentPage />} />
        <Route path="alumni-content" element={<AdminAlumniContentPage />} />
        <Route path="career-stories" element={<AdminCareerStoriesPage />} />
        <Route path="contact-people" element={<AdminContactPage />} />
        <Route path="open-positions" element={<AdminOpenPositionsPage />} />
        <Route
          path="membership-applications"
          element={<AdminMembershipApplicationsPage />}
        />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;