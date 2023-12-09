import React from "react";

const TabButton = ({ active, setTab, children }) => {
    const classes = active ? "border-b border-purple-500 text-white" : "text-[#ADB7BE]";
  return (
    <button className={`mr-3 text-lg font-semibold hover:text-white ${classes} transition-all duration-300`} onClick={setTab}>
      <p>{children}</p>
    </button>
  );
};

export default TabButton;
