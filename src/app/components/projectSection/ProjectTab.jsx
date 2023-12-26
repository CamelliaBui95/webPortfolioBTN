"use client";
import React, { useState, useEffect } from "react";
import "./projectStyle.css";

const ProjectTab = ({ isFirst, isLast, label, onClick, isSelected, id }) => {
  const [borderClass, setBorderClass] = useState("");

  useEffect(() => {
    if (isFirst && !isLast) setBorderClass("borderFirst");
    if (!isFirst && isLast) setBorderClass("borderLast");
    if (!isFirst && !isLast) setBorderClass("borderMid");
  }, [isFirst, isLast]);

  return (
    <button
      className={`projectTab projectTab-${id} ${borderClass} block text-lg lg:text-2xl text-primaryColor font-semibold border-textUnderscore w-full p-2`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default ProjectTab;
