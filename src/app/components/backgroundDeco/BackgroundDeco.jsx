import React, { useState, useRef, useEffect } from "react";
import "./backgroundDeco.css";

const animationStyles = {
  promptSlideOut: {
    transform: "translateY(500%)",
    opacity: 0,
  },
  promptSlideIn: {
    transform: "translateY(0)",
    opacity: 1,
  },
  moonSlideOut: {
    top: "100%",
    opacity: 0.5,
  },
  moonSlideIn: {
    top: "0",
    opacity: 1,
  },
};

const BackgroundDeco = () => {
  const ref = useRef(null);
  const refMoon = useRef(null);
  const [hasIntersected, setIntersect] = useState(false);
  const [slide, setSlide] = useState(animationStyles.promptSlideOut);

  useEffect(() => {
    const observer1 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setSlide(animationStyles.promptSlideIn);
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer1.observe(ref.current);
    }

    const observer2 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIntersect(true);
      },
      { threshold: 0.7 }
    );

    if (refMoon.current) {
      observer2.observe(refMoon.current);
    }

    return () => {
      if (ref.current) observer1.disconnect();
      if (refMoon.current) observer2.disconnect();
    };
  }, []);

  return (
    <section className="overflow-hidden transition-all duration-[1s] ease-in-out">
      <div className="prompt-section" ref={ref}>
        <p
          className="prompt text-primaryColor text-center text-5xl transition-all duration-[1s] ease-in-out"
          style={slide}
        >
          Let's connect
        </p>
      </div>

      <div className="parallax-container " ref={refMoon}>
        <div className="first-layer"></div>
        <div className="second-layer"></div>
        <div
          className="moon transition-all duration-[2s] ease-in-out"
          style={
            hasIntersected
              ? animationStyles.moonSlideIn
              : animationStyles.moonSlideOut
          }
        ></div>
      </div>
    </section>
  );
};

export default BackgroundDeco;
