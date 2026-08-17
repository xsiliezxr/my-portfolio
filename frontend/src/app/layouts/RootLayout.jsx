import { Outlet } from "react-router-dom";
import { Navbar } from "../../shared/components/layout/Navbar";
import { Footer } from "../../shared/components/layout/Footer";
import { SocialShortcuts } from "../../shared/components/layout/SocialShortcuts";
import { ChatWidget } from "../../features/chatbot";
import { HobbiesWidget } from "../../features/hobbies";

export const RootLayout = () => {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#050505] text-white">
      <Navbar />

      <main className="flex-1">
        {/* Aquí se renderiza HomePage, ProjectsPage, etc. según la URL */}
        <Outlet />
      </main>

      <aside className="fixed left-6 bottom-6 z-40">
        <SocialShortcuts />
      </aside>

      <aside className="fixed right-6 bottom-6 z-40 flex flex-col items-end gap-3">
        <HobbiesWidget />
        <ChatWidget />
      </aside>

      <Footer />
    </div>
  );
};