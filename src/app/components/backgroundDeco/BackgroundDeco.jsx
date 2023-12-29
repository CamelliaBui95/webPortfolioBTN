"use client";
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
  const refPrompt = useRef(null);
  const refMoon = useRef(null);

  const [moonSlideIn, setMoonSlideIn] = useState(animationStyles.moonSlideOut);
  const [promptSlideUp, setPromptSlideUp] = useState(
    animationStyles.promptSlideOut
  );

  useEffect(() => {
    const observerPrompt = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting)
          setPromptSlideUp(animationStyles.promptSlideIn);
      },
      { threshold: 0.5 }
    );

    if (refPrompt.current) {
      observerPrompt.observe(refPrompt.current);
    }

    const observerMoon = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setMoonSlideIn(animationStyles.moonSlideIn);
      },
      { threshold: 0.7 }
    );

    if (refMoon.current) {
      observerMoon.observe(refMoon.current);
    }

    return () => {
      if (refPrompt.current) observerPrompt.disconnect();
      if (refMoon.current) observerMoon.disconnect();
    };
  }, []);

  return (
    <section className="overflow-hidden transition-all duration-[1s] ease-in-out">
      <div className="prompt-section" ref={refPrompt}>
        <p
          className="prompt text-primaryColor text-center text-5xl transition-all duration-[1s] ease-in-out"
          style={promptSlideUp}
        >
          Let's connect
        </p>
        <p className="text-secondaryColor text-center text-3xl mt-12 w-fit">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At excepturi
          iusto nobis aut aliquid itaque vel accusantium! Est qui nisi sint,
          quos nam quibusdam repellendus eius! Id, illo. Vel, molestiae.
        </p>
      </div>

      <div className="parallax-container" ref={refMoon}>
        <div className="first-layer"></div>
        <div className="second-layer"></div>
        <div
          className="moon transition-all duration-[2s] ease-in-out"
          style={moonSlideIn}
        ></div>

        <div className="contact-section">
          <form action="" className="form-section">
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-primaryColor block mb-2 text-sm font-medium"
              >
                Your Email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="placeholder-secondaryColor text-secondaryColor text-sm rounded-lg block w-full p-2.5"
                placeholder="abc@mail.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-primaryColor block mb-2 text-sm font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className=" placeholder-secondaryColor placeholder text-secondaryColor text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-primaryColor placeholder block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="placeholder-secondaryColor placeholder text-secondaryColor text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              ></textarea>
            </div>
            <button type='submit' className="submit-btn">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BackgroundDeco;
