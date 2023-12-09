"use client";

import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import ProjectSection from "./components/ProjectSection";

export default function Home() {
  return (
    <main className="theme-light flex flex-col bg-primaryBg min-h-screen">
      <NavBar />
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
