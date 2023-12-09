import React from "react";
import "./tabStyle.css"

const TabButton = ({ active, setTab, children }) => {
    const classes = active ? "text-white" : "text-[#ADB7BE]";
  return (
    <button className={`mr-3 text-lg font-semibold hover:text-white ${classes} transition-all duration-300`} onClick={setTab}>
      <p>{children}</p>
      <span className="highLight" style={{width: `${active ? "100%" : "0%"}`}}></span>
    </button>
  );
};

export default TabButton;
