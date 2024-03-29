"use client";
import React, { useState, useEffect } from "react";
import AboutSection from "./components/AboutSection";
import HeroSection from "./components/heroSection/HeroSection";
import NavBar from "./components/navBar/NavBar";
import ProjectSection from "./components/projectSection/ProjectSection";
import ProjectSectionMobile from "./components/projectSectionForMobile/ProjectSectionMobile";
import ContactSection from "./components/contactSection/ContactSection";
import Footer from "./components/Footer";
import ContactInfo from "./components/contactInfo/ContactInfo";
import ProjectDetail from "./components/projectDetail/ProjectDetail";
import useDimension from "@/useDimension";

export default function Home() {
  const [theme, setTheme] = useState("dark");
  const [timers, setTimer] = useState([]);
  const [isMounted, setMounted] = useState(false);
  const [displayContactInfo, setDisplayContactInfo] = useState(false);
  const [displayCarousel, setDisplayCarousel] = useState(false);
  const [selectedProject, setSelectedProject] = useState({});
  const { width } = useDimension();

  const handleThemeToggle = () => {
    const timer = setTimeout(() => {
      setTheme(theme === "dark" ? "light" : "dark");
    }, 300);

    setTimer([...timers, timer]);
  };

  useEffect(() => {
    setMounted(true);
    return () => {
      timers.forEach((t) => clearTimeout(t));
    };
  }, [theme]);

  if (!isMounted) return null;

  return (
    <main
      className={`theme-${theme} flex flex-col bg-primaryBg min-h-screen relative`}
    >
      <ContactInfo
        display={displayContactInfo}
        onClose={() => setDisplayContactInfo(false)}
      />
      {width > 1280 && (
        <ProjectDetail
          display={displayCarousel}
          onClose={() => setDisplayCarousel(false)}
          project={selectedProject}
        />
      )}

      <NavBar mode={theme} toggleMode={handleThemeToggle} />
      <div className="container px-14 mt-24 py-4 mx-auto z-[80]">
        <HeroSection onClickContactInfo={() => setDisplayContactInfo(true)} />
        <AboutSection />
        {width > 1280 && (
          <ProjectSection
            onDisplayProjectDetail={(p) => {
              setSelectedProject(p);
              setDisplayCarousel(true);
            }}
          />
        )}
        {
          width < 1280 && (
            <ProjectSectionMobile/>
          )
        }
      </div>
      <ContactSection />
      <Footer />
    </main>
  );
}
