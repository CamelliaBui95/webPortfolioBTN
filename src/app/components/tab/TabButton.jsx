import React, {useEffect} from "react";
import "./tabStyle.css"

const TabButton = ({ active, setTab, children }) => {
  const classes = active ? "text-primaryColor" : "text-textDeco";

  return (
    <button className={`mr-3 text-lg font-semibold hover:text-primaryColor ${classes} transition-all duration-300`} onClick={setTab}>
      <p>{children}</p>
      <span className="highLight bg-textUnderscore" style={{width: `${active ? "100%" : "0%"}`}}></span>
    </button>
  );
};

export default TabButton;
