import React from 'react';
import Link from "next/link";

const NavLink = ({title, path}) => {
  return (
    <Link
      href={path}
      className="block py-2 mr-4 text-lg sm:text-xl transition-all duration-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#2B86C5] via-[#784BA0] to-[#FF3CAC] "
    >
      {title}
    </Link>
  );
}

export default NavLink