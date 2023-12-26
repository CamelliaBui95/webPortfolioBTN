"use client";
import Link from "next/link";
import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import "./projectStyle.css";

const ProjectCard = ({ imgUrl, name, description }) => {
  return (
    <div className="shadow-xl">
      <div
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
        className="h-52 md:h-72 rounded-t-xl relative group overflow-hidden "
      >
        <div className="overlay absolute top-0 left-0 h-full w-full bg-secondaryBg transform -translate-y-[100%] bg-opacity-[0.5] group-hover:translate-y-0 group-hover:bg-opacity-70 group-hover:flex flex justify-center items-center transition-all duration-500">
          <Link
            href="/"
            className="text-secondaryTextDeco mr-6 hover:text-textDeco transition-all duration-300"
          >
            <CodeBracketIcon className="h-12 w-12 xl:h-20 xl:w-20 " />
          </Link>
          <Link
            href="/"
            className="text-secondaryTextDeco hover:text-textDeco transition-all duration-300"
          >
            <EyeIcon className="h-12 w-12 xl:h-20 xl:w-20" />
          </Link>
        </div>
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
