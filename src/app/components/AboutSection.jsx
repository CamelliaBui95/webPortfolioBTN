import React, { useState, useRef, useEffect, useTransition } from "react";
import ProgressBar from "./ProgressBar";
import TabButton from "./tab/TabButton";

const TAB_DATA = [
  {
    id: "skills",
    title: "Skills",
    content: (
      <div className="mt-2 py-2 flex flex-row ">
        <ul className="list-disc pl-3">
          <li>Node.js, Express</li>
          <li>React, Next.js</li>
          <li>JavaFx</li>
        </ul>
        <ul className="list-disc ml-10">
          <li>Microsoft SQL Server, MongoDB</li>
          <li>Tailwind, Bootstrap</li>
        </ul>
      </div>
    ),
  },
  {
    id: "education",
    title: "Education",
    content: (
      <div className="mt-2 py-2">
        <ul className="list-disc pl-3">
          <li>Business English, Ton Duc Thang University, HoChiMinh City</li>
          <li>CDA - Concepteur Developpeur d'Application, AFPA Roubaix</li>
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

  const handleIntersect = ([entry]) => {
    if (entry.isIntersecting) console.log("Intersected");
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIntersect(true);
        else setIntersect(false);
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
    <section id="about" className="transition-all ">
      <div
        className=" md:grid md:grid-cols-2 gap-8 items-center mt-5 py-8 px-4 xl:gap-16 sm:py-16 xl:px-16"
        ref={ref}
      >
        <div className="h-full">
          <h2 className="text-xl sm:text-2xl font-semibold">Languages</h2>
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
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">About Me</h2>
          <div
            className="transition-all duration-[1s]"
            style={
              hasIntersected
                ? animationStyles.slideIn
                : animationStyles.slideOut
            }
          >
            <p className="text-base md:text-lg">
              I am a full stack web developer with a passion for creating
              scalable and high-performance web/desktop applications. I have
              experience working with JavaScript, React, Redux, Node.js,
              Express, HTML, CSS, Git and Docker. I am a quick learner and am
              always looking to expand my knowledge and skill set. Being a
              self-taught most of the time, I am also very self-disciplined and
              independent.
            </p>
            <div className="flex flex-row mt-4">
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
            </div>

            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
