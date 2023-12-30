"use client";
import React, { useState, useEffect } from "react";
import AboutSection from "./components/AboutSection";
import HeroSection from "./components/heroSection/HeroSection";
import NavBar from "./components/NavBar";
import ProjectSection from "./components/projectSection2/ProjectSection";
import ContactSection from "./components/contactSection/ContactSection";
import Footer from "./components/Footer";
import ContactInfo from "./components/contactInfo/ContactInfo";

export default function Home() {
  const [theme, setTheme] = useState("dark");
  const [timers, setTimer] = useState([]);
  const [isMounted, setMounted] = useState(false);
  const [displayContactInfo, setDisplayContactInfo] = useState(false);

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
      <NavBar mode={theme} toggleMode={handleThemeToggle} />
      <div className="container px-14 mt-24 py-4 mx-auto z-[80]">
        <HeroSection onClickContactInfo={() => setDisplayContactInfo(true)} />
        <AboutSection />
        <ProjectSection />
      </div>
      <ContactSection />
      <Footer />
    </main>
  );
}

//rounded-full bg-[#181818] w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] relative

//bg-[#181b1f]
/**
 *
 */
