import React from 'react'

const HamburgerMenu = ({active, setActive}) => {
  return (
    <div className="mobile-menu block sm:hidden">
      <button
        className="w-8 h-8 flex flex-col items-center justify-evenly"
        onClick={() => setActive(!active)}
      >
        <span
          className={`bg-primaryColor block h-1 w-7 transition-all duration-300 ease-out ${
            active ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`bg-primaryColor block h-1 w-7 transition-all duration-300 ease-out ${
            active ? "translate-x-10" : ""
          }`}
        ></span>
        <span
          className={`bg-primaryColor block h-1 w-7 transition-all duration-300 ease-out ${
            active ? "-rotate-45 -translate-y-2.5" : ""
          }`}
        ></span>
      </button>
    </div>
  );
}

export default HamburgerMenu