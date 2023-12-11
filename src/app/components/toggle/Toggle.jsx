import React from "react";
import { MoonIcon } from "@heroicons/react/20/solid";
import { SunIcon } from "@heroicons/react/20/solid";
import "./toggleStyle.css";

const Toggle = ({ toggleMode }) => {
  return (
    <div className="toggle-container mr-3">
      <input
        type="checkbox"
        id="toggle"
        className="hidden"
        onClick={() => toggleMode()}
      />
      {/**<div className="bg-fill transition-all duration-[0.9s]"></div> */}
      <div className="switchBtn w-[3.5rem] h-[2rem] border-[0.20rem] border-primaryColor rounded-full transition-all duration-300 shadow-md">
        <label
          htmlFor="toggle"
          className="rounded-full w-[2rem] h-[1.8rem] flex items-center justify-center cursor-pointer transition-all duration-300"
        >
          <div className="icons flex flex-col items-center gap-[1.2rem] translate-x-[0px] translate-y-[1.5rem] transition-all duration-300">
            <SunIcon className="w-[2rem] h-[2rem] text-primaryColor p-[2px]" />
            <MoonIcon className="w-[2rem] h-[2rem] text-primaryColor p-[2px]" />
          </div>
        </label>
      </div>
    </div>
  );
};

export default Toggle;
