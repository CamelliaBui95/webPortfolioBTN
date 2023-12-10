"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import MenuMobile from "./MenuMobile";
import Toggle from "./toggle/Toggle";
import HamburgerMenu from "./HamburgerMenu";


const navLinks = [
  { title: "About", path: "#about" },
  { title: "Projects", path: "#project" },
  { title: "Contact", path: "#contact" },
];

const animationStyles = {
  hSlideIn: {
    transform: "translateY(-150%)",
    opacity: 0,
  },
  hSlideOut: {
    transform: "translateY(0)",
    opacity: 1,
  },
};

const NavBar = ({mode, toggleMode}) => {
  const [navMobileOpen, setNavMobileOpen] = useState(false);

  return (
    <>
      <nav className="full-opacity fixed top-0 left-0 right-0 z-[100] bg-primaryBg bg-opacity-100 shadow-md flex flex-row justify-between items-center">
        <div className="px-2 py-2 sm:px-4 sm:py-2 flex flex-wrap items-center justify-between sm:justify-start">
          <Link
            href={"/"}
            className="text-primaryColor text-3xl sm:text-4xl font-semibold mr-8"
          >
            CB
          </Link>

          <div className="menu hidden sm:block" id="navbar">
            <ul className="flex md:flex-row ">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink title={link.title} path={link.path} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center">
          <Toggle toggleMode={ toggleMode} />
          <HamburgerMenu active={navMobileOpen} setActive={setNavMobileOpen} />
        </div>
      </nav>
      <nav
        className="fixed top-10 left-0 right-0 z-10 bg-primaryBg bg-opacity-100 transition-all duration-[1s]"
        style={
          !navMobileOpen ? animationStyles.hSlideIn : animationStyles.hSlideOut
        }
      >
        <MenuMobile menuItems={navLinks} />
      </nav>
    </>
  );
};

export default NavBar;

//SunIcon, MoonIcon