import React from "react";

const ProjectCard = ({ imgUrl, name, description }) => {
  return (
    <div className="shadow-xl">
      <div
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
        className="h-52 md:h-72 rounded-t-xl relative group overflow-hidden "
      >
        <div className="overlay absolute top-0 left-0 h-full w-[105%] bg-secondaryBg transform -translate-y-[100%] bg-opacity-[0.5] group-hover:translate-y-0 group-hover:bg-opacity-70 transition-all duration-500"></div>
      </div>
      <div className="py-6 px-4 mt-2 bg-bgDeco rounded-b-xl">
        <h3 className="text-primaryColor font-semibold text-xl md:text-2xl">
          {name}
        </h3>
        <p className="text-secondaryColor">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
//convert hex - rgba
