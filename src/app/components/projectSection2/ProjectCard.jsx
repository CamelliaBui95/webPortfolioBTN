import React from "react";
import "./projectSectionStyle.css";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ index, imgUrl, title, description, isChecked, initial }) => {
  return (
    <React.Fragment>
      <input
        type="radio"
        name="slide"
        id={`c${index}`}
        defaultChecked={isChecked}
      />
      <label
        htmlFor={`c${index}`}
        className="card"
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
        <div className="overlay">
          <p className="initial transform translate-y-[50%] translate-x-[30%] text-primaryColor">
            {initial}
          </p>
        </div>
        <div className="content text-primaryColor">
          <div className="card-index">{index}</div>

          <div className="desc-container">
            <div className="description">
              <h4>{title}</h4>
              <p>{description}</p>
            </div>
            <div className="icon flex flex-row justify-center items-center">
              <Link href={"/"}>
                <CodeBracketIcon className="h-[35px] w-[35px] mx-4 hover:text-textUnderscore transition-all duration-500" />
              </Link>
              {/**<Link href={"/"}>
                <EyeIcon className="h-[35px] w-[35px] mx-4 hover:text-textUnderscore transition-all duration-500" />
              </Link> */}
            </div>
          </div>
        </div>
      </label>
    </React.Fragment>
  );
};

export default ProjectCard;
