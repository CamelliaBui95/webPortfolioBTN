import React, {useState, useRef, useEffect} from "react";
import "./backgroundDeco.css";

const animationStyles = {
  promptSlideIn: {
    transform: "translateY(50%)",
    opacity: 0,
  },
  promptSlideOut: {
    transform: "translateY(0)",
    opacity: 1,
  },
};

const BackgroundDeco = () => {
  const ref = useRef(null);
  
  return (
    <section className="overflow-hidden">
      <div className="prompt-section ">
        <p className="prompt text-primaryColor text-center text-5xl">
          Let's connect
        </p>
      </div>

      <div className="parallax-container">
        <div className="first-layer"></div>
        <div className="second-layer"></div>
        <div className="moon"></div>
      </div>
    </section>
  );
};

export default BackgroundDeco;
