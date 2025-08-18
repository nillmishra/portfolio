import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import GoogleAnalytics from "./components/GoogleAnalytics.jsx";

import Home from "./pages/Home.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, mirror: false, easing: "ease-out" });
  }, []);

  return (
    <div className="bg-black text-slate-300">
      <GoogleAnalytics />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<ProjectsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}