import { Navigate, Routes, Route } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";
import { HomePage } from "../../features/home/pages/HomePage";
import { ProjectsPage } from "../../features/projects/pages/ProjectsPage";
import { AboutPage } from "../../features/about/pages/AboutPage";
import { SkillsPage } from "../../features/skills/pages/SkillsPage";
import { CertificatesPage } from "../../features/certificates/pages/CertificatesPage";
import { GalleryPage } from "../../features/gallery/pages/GalleryPage";
import { ContactPage } from "../../features/contact/pages/ContactPage";

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Padre que contiene las rutas hijas */}
      <Route element={<RootLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/certificates" element={<CertificatesPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};