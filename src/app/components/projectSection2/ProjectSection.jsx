import React, { useRef, useState, useEffect } from "react";
import "./projectSectionStyle.css";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Top News Deliverer",
    description: "Top Headlines Delivered By NewsAPI",
    image: "/images/projects/newsAPI_1.png",
    gitUrl: "/",
    type: "Web Application",
    technologies: ["JavaScript", "React", "NextJs", "Bootstrap"],
    slides: [
      { url: "/images/projects/newsAPI_1.png", type: "image" },
      { url: "/images/projects/newsAPI_2.png", type: "image" },
      { url: "/images/projects/newsAPI_3.png", type: "image" },
      { url: "/images/projects/newsAPI_4.png", type: "image" },
    ],
    initial: "T",
  },
  {
    id: 2,
    title: "FriendChat",
    description: "Basic Real-time Chat Application",
    image: "/images/projects/friendChat_1.png",
    gitUrl: "/",
    type: "Web Application",
    technologies: ["JavaScript", "React", "NodeJs", "MongoDB", "Bootstrap"],
    slides: [
      { url: "/images/projects/friendChat_1.png", type: "image" },
      { url: "/images/projects/friendChat_2.png", type: "image" },
      { url: "/images/projects/friendChat_3.png", type: "image" },
      { url: "/images/projects/friendChat_4.png", type: "image" },
    ],
    initial: "F",
  },
  /**public\images\projects\slides\friendChat_1.png */
  {
    id: 3,
    title: "Feed My Goat",
    description: "Little JavaScript Game",
    image: "/images/projects/feedMyGoat_1.png",
    gitUrl: "/",
    type: "Web Application",
    technologies: ["JavaScript", "CSS", "HTML"],
    slides: [
      { url: "/images/projects/feedMyGoat_1.png", type: "image" },
      { url: "/images/projects/feedMyGoat_2.png", type: "image" },
      { url: "/images/projects/feedMyGoat_vid.mp4", type: "video" },
    ],
    initial: "G",
  },
  {
    id: 4,
    title: "Routard Admin",
    description: "Traveling Data Manager For Backpackers",
    image: "/images/projects/routard_1.png",
    gitUrl: "/",
    type: "Desktop Application",
    technologies: ["Java", "JavaFX", "Microsoft SQL Server", "Scene Builder"],
    slides: [
      { url: "/images/projects/routard_1.png", type: "image" },
      { url: "/images/projects/routard_2.png", type: "image" },
      { url: "/images/projects/routard_3.png", type: "image" },
      { url: "/images/projects/routard_4.png", type: "image" },
    ],
    initial: "R",
  },
  {
    id: 5,
    title: "SBDM",
    description: "Desktop App For Product Management",
    image: "/images/projects/sbdm_1.png",
    gitUrl: "/",
    type: "Desktop Application",
    technologies: ["Java", "JavaFX", "Microsoft SQL Server", "Scene Builder"],
    slides: [
      { url: "/images/projects/sbdm_1.png", type: "image" },
      { url: "/images/projects/sbdm_2.png", type: "image" },
      { url: "/images/projects/sbdm_3.png", type: "image" },
      { url: "/images/projects/sbdm_4.png", type: "image" },
    ],
    initial: "S",
  },
];

const ProjectSection = ({ onDisplayProjectDetail }) => {
  const ref = useRef(null);
  const [selected, setSelected] = useState("");
  const [startAnimation, setStartAnimation] = useState(false);

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  useEffect(() => {
    let idTimeOut = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);

          if(idTimeOut === null) {
            idTimeOut = setTimeout(() => {
              setSelected("c3");
            }, 5000);
          }
          
        }
      },
      { threshold: 1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      observer.disconnect();
      clearTimeout(idTimeOut);
    };
  }, []);

  return (
    <section className="project-section" id="projects">
      <h2 className="text-primaryColor text-3xl md:text-4xl font-semibold text-center">
        My Projects
      </h2>
      <div className="project-wrapper">
        <div className="card-container" ref={ref}>
          {projectsData.map((p) => (
            <ProjectCard
              project={p}
              selected={selected}
              onChange={handleChange}
              startAnimation={startAnimation}
              onDisplayProjectDetail={() => onDisplayProjectDetail(p)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
