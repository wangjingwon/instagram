import React from "react";
import { FaInstagram } from "react-icons/fa6";
function Header() {
  return (
    <div className="flex items-center gap-4">
      <FaInstagram className="text-red-400 text-5xl" />
      <p className="text-5xl">Instagram</p>
      <a href="/about" className="text-blue-400">
        About
      </a>
    </div>
  );
}

export default Header;
