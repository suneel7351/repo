import React from "react";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineInstagram,
} from "react-icons/ai";

function Footer() {
  return (
    <div className="bg-[#001634] py-8">
      <div className="container mx-auto ">
        <div className=" text-slate-100 flex items-center justify-between flex-col md:flex-row">
          <div className="flex items-center gap-4">
            <img
              className="w-[60px] h-[60px] object-cover rounded-full"
              src="/img/me.jpg"
              alt="photo"
            />
            <span className="text-2xl">Suneel Kumar</span>
          </div>
          <div className="flex items-center gap-4 text-3xl">
            <a target="_blank" href="https://www.linkedin.com/in/suneel7351/">
              <AiFillLinkedin />
            </a>
            <a target="_blank" href="https://github.com/suneel7351">
              <AiFillGithub />
            </a>
            <a href="/">
              <AiOutlineInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
