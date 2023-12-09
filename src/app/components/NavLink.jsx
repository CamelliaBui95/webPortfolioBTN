import React from 'react';
import Link from "next/link";

const NavLink = ({title, path}) => {
  return (
    <Link
      href={path}
      className="block py-2 mr-4 text-lg sm:text-xl transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-primaryFrom via-primaryVia to-primaryTo text-secondaryBaseColor"
    >
      {title}
    </Link>
  );
}

export default NavLink