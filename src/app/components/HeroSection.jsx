import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center flex flex-col flex-wrap justify-center text-center sm:text-left">
          <h1 className="text-white text-3xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2B86C5] via-[#784BA0] to-[#FF3CAC]">
              Hello, I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Camellia",
                1000,
                "React Developper",
                1000,
                "Java Programmer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            quam ipsum quis sit deleniti corporis.
          </p>
          <div className="">
            <button className="rounded-full mr-4 mb-3 sm:mb-0 px-6 py-3 w-full sm:w-fit bg-gradient-to-r from-[#2B86C5] via-[#784BA0] to-[#FF3CAC] text-white hover:text-slate-200">
              Hire Me
            </button>
            <button className="rounded-full mr-4 mb-5 sm:mb-0 px-1 py-1 w-full sm:w-fit bg-gradient-to-r from-[#2B86C5] via-[#784BA0] to-[#FF3CAC] text-white hover:text-slate-200">
              <span className="block rounded-full bg-[#121212] px-5 py-2 text-white hover:bg-slate-800">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center sm:place-self-end ">
          <div className="bg-[#181818] rounded-full w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] relative">
            <Image
              src="/images/memoji-with-cats-nobackground.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={450}
              height={450}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

//black: #121212
//gradient: from[#2B86C5] via[#784BA0] to[#FF3CAC]