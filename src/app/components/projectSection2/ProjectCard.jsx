"use client";
import React, {useState, useEffect} from "react";
import "./projectSectionStyle.css";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ project, startAnimation, onChange, selected, onDisplayProjectDetail }) => {
  const [slideIn, setSlideIn] = useState({});
  const idInput = `c${project.id}`;

  const animation = {
    left: "0",
    opacity: 1,
    transitionProperty: "width, left",
    transitionDuration: "0.6s, 0.8s",
    transitionTimingFunction: "cubic-bezier(0.28, -0.03, 0, 0.99), cubic-bezier(0.28, -0.03, 0, 0.99)",
    transitionDelay: `0s, ${Math.abs(project.id - 5)}s`,
  }

  useEffect(() => {

    if(startAnimation) 
      setSlideIn(animation);

  }, [startAnimation])

  return (
    <React.Fragment>
      <input
        type="radio"
        name="slide"
        value={idInput}
        id={idInput}
        checked={selected === idInput}
        onChange={e => onChange(e)}
      />
      <label
        htmlFor={idInput}
        className="card"
        style={{backgroundImage: `url(${project.image})`,...slideIn}}
      >
        <div className="overlay">
          <p className="initial transform translate-y-[50%] translate-x-[30%] text-primaryColor">
            {project.initial}
          </p>
        </div>
        <div className="content text-primaryColor">
          <div className="card-index">{project.id}</div>

          <div className="desc-container">
            <div className="description">
              <h4>{project.title}</h4>
              <p>{project.description}</p>
            </div>
            <div className="icon flex flex-row justify-center items-center">
              <Link href={"/"}>
                <CodeBracketIcon className="h-[35px] w-[35px] mx-4 hover:text-textUnderscore transition-all duration-500" />
              </Link>
              <button>
                <EyeIcon className="h-[35px] w-[35px] mr-4 hover:text-textUnderscore transition-all duration-500" onClick={onDisplayProjectDetail} />
              </button>
            </div>
          </div>
        </div>
      </label>
    </React.Fragment>
  );
};

export default ProjectCard;
