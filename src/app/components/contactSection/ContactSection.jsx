"use client";
import React, { useRef, useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import "./contactStyle.css";

const ContactSection = () => {
  const refPrompt = useRef(null);
  const refBg = useRef(null);

  const [firstLayerScaleDown, setFirstLayerScaleDown] = useState("");
  const [moonSlideIn, setMoonSlideIn] = useState("");
  const [secondLayerSlideUp, setSecondLayerSlideUp] = useState("");

  const [promptSlideUp, setPromptSlideUp] = useState("");
  const [showText, setShowText] = useState("");
  const [showForm, setShowForm] = useState("");

  useEffect(() => {
    const observerPrompt = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPromptSlideUp("prompt-slideUp");
          setShowText("text-showUp");
        }
      },
      { threshold: 0.5 }
    );

    if (refPrompt.current) {
      observerPrompt.observe(refPrompt.current);
    }

    const bgObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMoonSlideIn("moon-slideIn");
          setFirstLayerScaleDown("firstLayer-scaleDown");
          setSecondLayerSlideUp("secondLayer-slideUp");
          setShowForm("form-scaleUp");
        }
      },
      { threshold: 0.8 }
    );

    if (refBg.current) {
      bgObserver.observe(refBg.current);
    }

    return () => {
      if (refPrompt.current) observerPrompt.disconnect();
      if (refBg.current) bgObserver.disconnect();
    };
  }, []);

  return (
    <section className="overflow-hidden transition-all duration-[1s] ease-in-out">
      <div className="prompt-section" ref={refPrompt}>
        <p
          className={`prompt ${promptSlideUp} text-primaryColor text-center text-5xl`}
        >
          Let's connect !
        </p>
        <p
          className={`text ${showText} text-secondaryColor text-center text-3xl mt-12 px-4 w-fit`}
        >
          My inbox is always open. Whether you have a question or just want to
          say hi, I'll try my best to get back to you.
        </p>
      </div>

      <div className="background" ref={refBg}>
        <div className={`first-layer ${firstLayerScaleDown}`}></div>
        <div className={`second-layer ${secondLayerSlideUp}`}></div>
        <div className={`moon ${moonSlideIn}`}></div>

        {<ContactForm display={showForm} />}
      </div>
    </section>
  );
};

export default ContactSection;
