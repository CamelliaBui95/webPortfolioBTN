import React, {useRef, useState, useEffect} from "react";
import "./projectSectionStyle.css";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ index, imgUrl, title, description, isChecked, initial, startAnimation }) => {
  const [slideIn, setSlideIn] = useState({});
  const inputRef = useRef(null);

  const animation = {
    left: "0",
    opacity: 1,
    transitionProperty: "width, left",
    transitionDuration: "0.6s, 0.9s",
    transitionTimingFunction: "cubic-bezier(0.28, -0.03, 0, 0.99), linear",
    transitionDelay: `0s, ${Math.abs(index - 5)}s`,
    
  }

  useEffect(() => {
    let idTimeOut = null;
    if(startAnimation) {
      setSlideIn(animation);

      idTimeOut = setTimeout(() => {
        if(inputRef.current) 
          inputRef.checked = isChecked;
        console.log(inputRef)
      },5000)

    }

    console.log("render")
    
    return () => clearTimeout(idTimeOut)
   

  }, [startAnimation])


  return (
    <React.Fragment>
      <input
        type="radio"
        name="slide"
        id={`c${index}`}
        ref={inputRef}
      />
      <label
        htmlFor={`c${index}`}
        className="card"
        style={{backgroundImage: `url(${imgUrl})`,...slideIn}}
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
              <button>
                <EyeIcon className="h-[35px] w-[35px] mr-4 hover:text-textUnderscore transition-all duration-500" />
              </button>
            </div>
          </div>
        </div>
      </label>
    </React.Fragment>
  );
};

export default ProjectCard;
