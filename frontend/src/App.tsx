import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import JoinUsPage from "./pages/JoinUsPage";
import AlumniPage from "./pages/AlumniPage";
import CareerStoriesPage from "./pages/CareerStoriesPage";
import ForCompaniesPage from "./pages/ForCompaniesPage";
import ContactPage from "./pages/ContactPage";
import CareerStoryDetailPage from "./pages/CareerStoryDetailPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
      
        <Route index element={<HomePage />} />
        <Route path="join-us" element={<JoinUsPage />} />
        <Route path="for-alumni" element={<AlumniPage />} />
        <Route path="career-stories" element={<CareerStoriesPage />} />
        <Route path="for-companies" element={<ForCompaniesPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="/career-stories" element={<CareerStoriesPage />} />
        <Route path="/career-stories/:slug" element={<CareerStoryDetailPage />} />
      </Route>
    </Routes>
  );
}

export default App;