"use client";
import React, { useState, useRef, useEffect, useTransition } from "react";
import ProgressBar from "./ProgressBar";
import TabButton from "./tab/TabButton";

const TAB_DATA = [
  {
    id: "skills",
    title: "Skills",
    content: (
      <div className="mt-2 py-2 flex flex-row text-secondaryColor">
        <ul className="list-disc pl-3">
          <li>Node.js, Express</li>
          <li>React, Next.js</li>
          <li>Spring Boot, JavaFx, JSP/JSF, Primefaces</li>
        </ul>
        <ul className="list-disc ml-10">
          <li>Microsoft SQL Server, MongoDB</li>
          <li>Tailwind, Bootstrap</li>
          <li>Git, Docker, Maven</li>
        </ul>
      </div>
    ),
  },
  {
    id: "education",
    title: "Education",
    content: (
      <div className="mt-2 py-2 text-secondaryColor">
        <ul className="list-disc pl-3">
          <li>Business English, Ton Duc Thang University, HoChiMinh City</li>
          <li>CDA - Concepteur Developpeur d&apos;Application, AFPA Roubaix</li>
        </ul>
      </div>
    ),
  },
  {
    id: "hobbies",
    title: "Hobbies",
    content: (
      <div className="mt-2 py-2 text-secondaryColor">
        <ul className="list-disc pl-3">
          <li>Reading</li>
          <li>Playing piano</li>
          <li>Contemplating on math / programming problems</li>
          <li>Fitness</li>
        </ul>
      </div>
    ),
  },
];

const animationStyles = {
  slideOut: {
    transform: "translateX(150%)",
    opacity: 0,
  },
  slideIn: {
    transform: "translateX(0)",
    opacity: 1,
  },
};

const AboutSection = () => {
  const ref = useRef(null);
  const [hasIntersected, setIntersect] = useState(false);
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIntersect(true);
        //else setIntersect(false);
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.disconnect();
    };
  }, []);

  return (
    <section id="about" className="min-h-[70vh] pb-[5rem] transition-all">
      <div
        className="md:grid md:grid-cols-2 gap-8 items-center px-4 xl:gap-16 xl:px-16"
        ref={ref}
      >
        <div className="h-full">
          <h2 className="text-xl text-primaryColor sm:text-2xl font-semibold">
            Technologies
          </h2>
          <ProgressBar
            label="JavaScript"
            percentage="90"
            load={hasIntersected}
          />
          <ProgressBar label="Java" percentage="85" load={hasIntersected} />
          <ProgressBar label="SQL" percentage="75" load={hasIntersected} />
          <ProgressBar label="CSS" percentage="80" load={hasIntersected} />
        </div>
        <div className="flex flex-col h-full">
          <h2 className="text-xl text-primaryColor sm:text-2xl font-semibold mb-4">
            About Me
          </h2>
          <div
            className="transition-all duration-[1s]"
            style={
              hasIntersected
                ? animationStyles.slideIn
                : animationStyles.slideOut
            }
          >
            <p className="text-base md:text-lg text-secondaryColor md:pt-6">
              Hello, I&apos;m{" "}
              <span className="text-primaryColor font-semibold">
                Tuong Nghi Bui
              </span>{" "}
              but you can call me{" "}
              <span className="text-primaryColor font-semibold">Camellia</span>{" "}
              . Thanks to my background in linguistics and business, I&apos;m
              proficient in English, pretty fluent in French and have a global
              understanding of economics, marketing and sales.
            </p>
            <p className="text-base md:text-lg text-secondaryColor">
              However, my biggest interests have always been{" "}
              <span className="text-primaryColor font-semibold">
                technologies, building and creating
              </span>
              . For this reason, in 2020, I decided to learn programming and
              project my future into IT. I started out as a{" "}
              <span className="text-primaryColor font-semibold">
                self-taught
              </span>{" "}
              and am currently in a{" "}
              <span className="text-primaryColor font-semibold">
                12-month course for backend development
              </span>
              .
            </p>
            <p className="text-base md:text-lg text-secondaryColor">
              I&apos;m seeking an{" "}
              <span className="text-primaryColor font-semibold">
                internship
              </span>{" "}
              that would help put into practice my skills in{" "}
              <span className="text-primaryColor font-semibold">
                designing applications&apos; architecture, data modeling
              </span>{" "}
              and{" "}
              <span className="text-primaryColor font-semibold">
                programming
              </span>
              .
            </p>
            <div className="flex flex-row mt-8">
              <TabButton
                active={tab === "skills"}
                setTab={() => handleTabChange("skills")}
              >
                Skills
              </TabButton>
              <TabButton
                active={tab === "education"}
                setTab={() => handleTabChange("education")}
              >
                Education
              </TabButton>
              <TabButton
                active={tab === "hobbies"}
                setTab={() => handleTabChange("hobbies")}
              >
                Hobbies
              </TabButton>
            </div>

            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

{
  /* Currently looking for an internship in{" "}
              <span className="text-primaryColor">
                <b>backend services</b>
              </span>
              , I hope to get an opportunity to expand my knowledge and skill
              set with your team.
            </p> */
}
