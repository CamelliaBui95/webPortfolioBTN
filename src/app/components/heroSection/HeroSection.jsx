"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import "./heroStyle.css";

const HeroSection = ({ onClickContactInfo }) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    });

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="min-h-screen" ref={ref}>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div
          className={`left-banner  ${
            inView ? "show-leftBanner" : ""
          }  col-span-7 place-self-center flex flex-col flex-wrap justify-center text-center sm:text-left`}
        >
          <h1 className="text-textDeco text-3xl sm:text-5xl 3xl:text-7xl font-extrabold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-grad-from via-grad-via to-grad-to">
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
          <p className="text-secondaryColor text-base sm:text-lg 3xl:text-2xl mb-6">
            Natural Science, technologies and problem-solving are my main sources of dopamine.
          </p>
          <div>
            <button onClick={onClickContactInfo} className="btn1 rounded-full mr-4 mb-3 sm:mb-0 px-6 py-3 w-full sm:w-fit bg-gradient-to-r from-grad-from via-grad-via to-grad-to text-primaryColor font-semibold 2xl:text-xl transition-all duration-300 shadow-md">
              Contact Me
            </button>
            <button className="btn2 rounded-full mr-4 mb-5 sm:mb-0 px-1 py-1 w-full sm:w-fit bg-gradient-to-r from-grad-from via-grad-via to-grad-to text-primaryColor font-semibold 2xl:text-xl transition-all duration-300 shadow-md ">
              <a href="./cv/TuongNghiBuiCV.pdf" download className="block rounded-full bg-primaryBg px-5 py-2 text-secondaryBaseColor">
                Download CV
              </a>
            </button>
          </div>
        </div>

        <div
          className={`right-banner ${
            inView ? "show-rightBanner" : ""
          } col-span-5 place-self-center`}
        >
          <div className="bg-secondaryBg rounded-full w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] 3xl:w-[650px] 3xl:h-[650px] relative">
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

