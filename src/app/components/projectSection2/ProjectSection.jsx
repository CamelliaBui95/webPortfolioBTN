import React from "react";
import "./projectSectionStyle.css";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Top News Deliverer",
    description: "Top Headlines Delivered By NewsAPI",
    image: "/images/projects/newsAPI_1.png",
    gitUrl: "/",
    previewUrl: "/",
    initial: "T",
  },
  {
    id: 2,
    title: "FriendChat",
    description: "Basic Real-time Chat Application",
    image: "/images/projects/friendChat_1.png",
    gitUrl: "/",
    previewUrl: "/",
    initial: "F",
  },
  {
    id: 3,
    title: "Feed My Goat",
    description: "Little JavaScript Game",
    image: "/images/projects/gps_goat_1.png",
    gitUrl: "/",
    previewUrl: "/",
    initial: "G",
  },
  {
    id: 4,
    title: "Routard Admin",
    description: "Traveling Data Manager For Backpackers",
    image: "/images/projects/routard_1.png",
    gitUrl: "/",
    previewUrl: "/",
    initial: "R",
  },
  {
    id: 5,
    title: "SBDM - Gestion des Bières",
    description: "Desktop App For Product Management",
    image: "/images/projects/sbdm_1.png",
    gitUrl: "/",
    previewUrl: "/",
    initial: "S",
  },
];

const ProjectSection = () => {
  return (
    <section className="project-section" id="projects">
      <h2 className="text-primaryColor text-3xl md:text-4xl font-semibold text-center">
        My Projects
      </h2>
      <div className="project-wrapper">
        <div className="card-container">
          {projectsData.map((p) => (
            <ProjectCard
              index={p.id}
              imgUrl={p.image}
              title={p.title}
              description={p.description}
              isChecked={p.id === 3}
              initial={p.initial}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
