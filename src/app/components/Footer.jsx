import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container py-1 px-4 flex justify-between">
        <p className="text-primaryColor font-semibold">CB</p>
        <p className="text-slate-500">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
