"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/20/solid";
import "./projectDetail.css";

const ProjectCarousel = ({ display, onClose, project }) => {
  const containerRef = useRef(null);
  const slideRef = useRef(null);
  const videoRef = useRef(null);

  const handlePrevClick = () => {
    if (containerRef.current && slideRef.current)
      containerRef.current.scrollLeft -= slideRef.current.clientWidth;
  };

  const handleNextClick = () => {
    if (containerRef.current && slideRef.current)
      containerRef.current.scrollLeft += slideRef.current.clientWidth;
  };

  const renderWrapper = (slide) => {
    if (slide.type === "image")
      return <Image src={slide.url ? slide.url : ""} width={1080} height={100} />;
    if (slide.type === "video")
      return (
       <video ref={videoRef} width="85%" height="100%" controls preload="auto">
          <source src={slide.url ? slide.url : ""} type="video/mp4"/>
        </video>
      );
  };

  useEffect(() => {}, [project]);

  return (
    <div
      className={`${
        display ? "" : "hidden"
      } min-w-screen min-h-screen bg-slate-500 bg-opacity-[0.1] shadow-md fixed top-0 left-0 right-0 z-[101] flex justify-center items-center transition-transform duration-700`}
    >
      <div className="border-2 border-opacity-[0.4] border-primaryColor bg-primaryBg rounded-xl h-[250px] w-[380px] md:h-[90vh] md:w-[70%] px-5 py-5 text-primaryColor">
        <div className="flex justify-end text-lg">
          <button onClick={() => {

            if(videoRef.current)
              videoRef.current.pause();

            onClose();
          }}>
            <XMarkIcon className="transition-all duration-5 h-6 w-6 text-secondaryColor hover:text-primaryColor" />
          </button>
        </div>

        <div className="carousel">
          <button
            className="slide-arrow"
            id="arrow-prev"
            onClick={handlePrevClick}
          >
            &#8249;
          </button>
          <button
            className="slide-arrow"
            id="arrow-next"
            onClick={handleNextClick}
          >
            &#8250;
          </button>
          <ul
            className="slides-container rounded-xl shadow-md"
            ref={containerRef}
          >
            <li
              className="slide flex justify-center items-center"
              ref={slideRef}
            >
              <Image
                src={project.slides ? project.slides[0].url : ""}
                width={1080}
                height={100}
              />
            </li>
            {project.slides &&
              project.slides.slice(1, project.slides.length).map((s, index) => (
                <li
                  className="slide flex justify-center items-center"
                  ref={slideRef}
                >
                  {renderWrapper(s)}
                </li>
              ))}
          </ul>
        </div>

        <h3 className="text-primaryColor text-4xl mt-2">{project.title}</h3>
        <p className="desc text-secondaryColor text-2xl py-5">
          {project.description}
        </p>
        <p className="desc text-secondaryColor text-xl">
          <span className="mr-3 text-primaryColor">
            <b>Type:</b>
          </span>
          {project.type}
        </p>
        <p className="desc text-secondaryColor text-xl">
          <span className="mr-3 text-primaryColor">
            <b>Technologies:</b>
          </span>
          {project.technologies && project.technologies.join(", ")}
        </p>
      </div>
    </div>
  );
};

export default ProjectCarousel;
