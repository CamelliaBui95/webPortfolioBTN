"use client";
import React, { useState, useEffect } from "react";
import { EyeIcon } from "@heroicons/react/24/outline";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ project }) => {
  const [backgroundImg, setBackgroundImg] = useState("");
  const [timeOuts, setTimeOuts] = useState([]);

  const switchBackgroundImage = (index) => {
    setBackgroundImg(project.slides[index].url);
  };

  const handleDemoClick = () => {
    if (project && project.slides) {
      let index = 1;
      setBackgroundImg(project.slides[index++].url);

      while (index < project.slides.length) {
        const url = project.slides[index].url;
        const currentTimeOut = setTimeout(() => {
          setBackgroundImg(url);
        }, 2000 * index);

        setTimeOuts([...timeOuts, currentTimeOut]);
        index++;
        }
        
        const firstUrl = project.slides[0].url;
        const lastTimeOut = setTimeout(() => {
            setBackgroundImg(firstUrl);
        }, 2000 * index);

        setTimeOuts([...timeOuts, lastTimeOut]);
    }
  };

  useEffect(() => {
    if (project) setBackgroundImg(project.slides[0].url);

    return () => {
      timeOuts.forEach((timeOut) => clearTimeout(timeOut));
    };
  }, []);

  return (
    <div className="project-card-mobile">
      <div
        className="h-[200px] sm:h-[250px] w-full rounded-t-3xl shadow-xl"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          transition: "all 0.3s ease 0.2s",
        }}
      ></div>

      <div className="desc-container-mobile flex justify-evenly items-center min-h-[100px] bg-white py-2 rounded-b-3xl shadow-xl">
        <div className="card-index-mobile flex justify-center items-center w-[40px] h-[40px] md:w-[60px] md:h-[60px] ml-1 mr-3 text-xl md:text-2xl rounded-full bg-secondaryTextDeco text-white">
          {project.id}
        </div>
        <div className="w-[60%] mr-1">
          <h4 className="text-secondaryTextDeco font-bold text-xl sm:text-2xl">
            {project.title}
          </h4>
          <p className="text-secondaryColor font-semibold">
            {project.description}
          </p>
        </div>
        <div className="link-groups flex flex-row justify-center items-center pr-2">
          <Link
            href={project.gitUrl}
            className="mx-2 p-2 rounded-full transition-all duration-300 hover:bg-secondaryTextDeco hover:text-white"
          >
            <CodeBracketIcon width={30} className="" />
          </Link>
          <button
            onClick={handleDemoClick}
            className="p-2 rounded-full transition-all duration-300 hover:bg-secondaryTextDeco hover:text-white"
          >
            <EyeIcon width={30} className="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
