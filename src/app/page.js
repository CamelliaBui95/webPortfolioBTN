"use client";
import React, {useState, useEffect} from 'react';
import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import ProjectSection from "./components/ProjectSection";

export default function Home() {
  const [theme, setTheme] = useState("dark");
  const [timers, setTimer] = useState([]);
  const [isMounted, setMounted] = useState(false);

  const handleThemeToggle = () => {
    const timer = setTimeout(() => {
      setTheme(theme === "dark" ? "light" : "dark");
    }, 400)

    setTimer([...timers, timer]);
    
  }

  useEffect(() => {
    setMounted(true);
    return () => {
      timers.forEach(t => clearTimeout(t));
    }
  }, [])

  if (!isMounted) return null;

  return (
    <main className={`theme-${theme} flex flex-col bg-primaryBg min-h-screen`}>
      <NavBar mode={theme} toggleMode={handleThemeToggle} />
      <div className="container px-12 mt-24 py-4 mx-auto ">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
      </div>
    </main>
  );
}

//rounded-full bg-[#181818] w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] relative

//bg-[#181b1f]
/**
 *
 */
