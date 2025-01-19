import React from "react";
import { FaInstagram } from "react-icons/fa6";

const About = () => {
  return (
    <>
      <div className="flex items-center gap-4 m-4">
        <FaInstagram className="text-red-400 text-5xl" />
        <p className="text-5xl">Instagram</p>
        <a href="/" className="text-blue-400">
          Go to home
        </a>
      </div>
      <p>About page</p>
    </>
  );
};

export default About;
