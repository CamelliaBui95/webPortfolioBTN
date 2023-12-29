import React from "react";
import "./projectSectionStyle.css";

const ProjectCard = ({ index, imgUrl, title, description, isChecked }) => {
  return (
    <>
      <input type="radio" name="slide" id={`c${index}`} defaultChecked={isChecked} />
      <label
        htmlFor={`c${index}`}
        className="card"
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
        <div className="content text-primaryColor">
          <div className="card-index">{index}</div>
          <div className="description">
            <h4>{title}</h4>
            <p>{description}</p>
          </div>
        </div>
      </label>
    </>
  );
};

export default ProjectCard;
