import React from "react";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineInstagram,
} from "react-icons/ai";

function Footer() {
  return (
    <div className="bg-[#00003c] py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center gap-4 mb-4 md:mb-0">
          <img
            className="w-12 h-12 object-cover rounded-full"
            src="/img/mern1.jpeg"
            alt="photo"
          />
          <div>
            <span className="text-lg font-semibold text-white">Suneel Kumar</span>
            <p className="text-gray-300 text-sm">Full Stack Developer</p>
          </div>
        </div>
        <div className="flex items-center gap-8 text-2xl">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/suneel7351/"
            className="text-white hover:text-blue-500 transition duration-300"
          >
            <AiFillLinkedin />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/suneel7351"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            <AiFillGithub />
          </a>
          <a
            href="/"
            className="text-white hover:text-pink-500 transition duration-300"
          >
            <AiOutlineInstagram />
          </a>
        </div>
      </div>
      <div className="mt-4 text-center text-gray-300">
        <p>
          &copy; 2023 <a href="https://suneel.vercel.app" className="text-blue-500 hover:underline">suneel.vercel.app</a> All rights reserved.
        </p>
        <p className="text-sm mt-2">
          Reach out: <a href="mailto:suneel@example.com" className="text-blue-500 hover:underline">rsuneel47@gmail.com</a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
