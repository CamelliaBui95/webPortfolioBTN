import React from "react";
import "./projectSectionStyle.css";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Project 1",
    description: "Project 1 description",
    image: "/images/projects/1.png",
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Project 2",
    description: "Project 2 description",
    image: "/images/projects/2.png",
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Project 3",
    description: "Project 3 description",
    image: "/images/projects/3.png",
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Project 4",
    description: "Project 4 description",
    image: "/images/projects/4.png",
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Project 5",
    description: "Project 5 description",
    image: "/images/projects/5.png",
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Project 6",
    description: "Project 6 description",
    image: "/images/projects/6.png",
    gitUrl: "/",
    previewUrl: "/",
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
            <ProjectCard index={p.id} imgUrl={p.image} title={p.title} description={p.description} isChecked={p.id === 3}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
