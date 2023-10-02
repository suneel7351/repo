import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";

function ProjectCard({ live, github, img, title="", description="" }) {
  return (
    <div className="flex bg-white shadow border cursor-pointer border-gray-100 h-[70vh] md:h-[80vh] flex-col project-card-parent w-[90%] md:w-[35%] lg:w-[30%] relative">
      <div className="">
        <div className="p-browser bg-gray-200">
          <div className="p-circle bg-red-500 w-[12px] h-[12px] rounded-full mr-2 ml-3"></div>
          <div className="p-circle bg-green-500 w-[12px] h-[12px] rounded-full mr-2"></div>
          <div className="p-circle bg-yellow-500 w-[12px] h-[12px] rounded-full mr-2"></div>
        </div>
        <img src={img} alt="" className="p-img p-2" />
        <div className="overlay absolute inset-0 flex items-center justify-center bg-black opacity-0 hover:opacity-70 transition-opacity">
          <div className="text-white text-center">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="text-lg">{description}</p>
          </div>
        </div>
      </div>
      <div className="flex py-2 items-center text-slate-100 bg-gray-200 justify-between px-12 text-xl project-code">
        <a href={live} target="_blank">
          <AiOutlineEye className="cursor-pointer text-black" />
        </a>
        <a href={github} target="_blank">
          <BsGithub className="cursor-pointer text-black" />
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
