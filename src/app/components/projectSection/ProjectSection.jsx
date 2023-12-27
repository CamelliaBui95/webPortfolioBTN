"use client";
import React, {useState} from "react";
import ProjectCard from "./ProjectCard";
import ProjectTab from "./ProjectTab";
import "./projectStyle.css"

const projectsData = [
  {
    id: 1,
    title: "Project 1",
    description: "Project 1 description",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Project 2",
    description: "Project 2 description",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Project 3",
    description: "Project 3 description",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Project 4",
    description: "Project 4 description",
    image: "/images/projects/4.png",
    tag: ["All", "Desktop"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Project 5",
    description: "Project 5 description",
    image: "/images/projects/5.png",
    tag: ["All", "Desktop"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Project 6",
    description: "Project 6 description",
    image: "/images/projects/6.png",
    tag: ["All", "Desktop"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectSection = () => {
  const [selectedTab, setSelectedTab] = useState("All");
  const tags = ["All", "Web", "Desktop"];

  const filteredProjects = projectsData.filter(p => p.tag.includes(selectedTab))

  return (
    <section className="mt-4" id="projects">
      <h2 className="text-4xl font-bold text-center mb-5 md:mb-7 text-primaryColor">
        My Projects
      </h2>
      <div className="tabContainer tabContainer m-auto flex justify-evenly">
        {tags.map((tag, index) => {
          const isFirst = index === 0;
          const isLast = index === tags.length - 1;
          return (
            <ProjectTab
              label={tag}
              isFirst={isFirst}
              isLast={isLast}
              id={index + 1}
              onClick={() => setSelectedTab(tag)}
              key={index}
            />
          );
        })}
      </div>
      <ul className="grid md:grid-cols-3 gap-8 md:gap-12 mt-4">
        {filteredProjects.map((project, index) => (
          <li key={index}>
            <ProjectCard
              imgUrl={project.image}
              name={project.title}
              description={project.description}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
