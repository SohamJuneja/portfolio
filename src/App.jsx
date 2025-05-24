"use client"    

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
import NetflixTitle from "./components/NetflixTitle"
import Browse from "./components/Browse"
import Navbar from "./components/Navbar"
import ProfilePage from "./components/ProfilePage"
import Contact from "./components/Contact"
import ScrollToTop from "./components/ScrollToTop"
import Achievements from "./components/Achievements";
import Experience from "./components/Experience";
import Cinema from "./components/Cinema";
import Music from "./components/Music";
import Blog from "./components/Blog";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function AppRoutes() {
  const location = useLocation();
  // Only show Navbar if not on the landing or browse page
  const showNavbar = location.pathname !== "/" && location.pathname !== "/browse";

  return (
    <>
      <ScrollToTop />
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<NetflixTitle />} />
        <Route path="/certifications" element={<Achievements />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/profile/:name" element={<ProfilePage />} />
        <Route path="/work-experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact-me" element={<Contact />} />
        <Route path="/cinema" element={<Cinema />} />
        <Route path="/music" element={<Music />} />
        <Route path="/blogs" element={<Blog />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppRoutes />
      <Analytics />
      <SpeedInsights />
    </Router>
  )
}
