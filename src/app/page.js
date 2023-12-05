"use client";

import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import ProgressBar from "./components/ProgressBar";

export default function Home() {
  return (
    <main className="flex flex-col bg-[#121212] min-h-screen">
      <NavBar />
      <div className="container px-12 mt-24 py-4 mx-auto ">
        <HeroSection />
      </div>

      <div className="skills w-[500px] my-[60px] mx-auto p-[20px]">
        <h1>Skills</h1>

        <ProgressBar label={"JavaScript"} percentage={"90"} />
      </div>
    </main>
  );
}

//rounded-full bg-[#181818] w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] relative

//bg-[#181b1f]
/**
 *
 */
