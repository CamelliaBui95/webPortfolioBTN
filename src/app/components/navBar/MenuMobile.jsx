import React, { useState } from "react";
import NavLink from "./NavLink";


const MenuMobile = ({ menuItems }) => {

    
  return (
    <ul
      className="sm:hidden flex flex-col py-4 items-center justify-center w-full" 
    >
      {menuItems.map((item, index) => (
        <li key={index}>
          <NavLink path={item.path} title={item.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuMobile;
