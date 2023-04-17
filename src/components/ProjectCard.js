import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
function ProjectCard({ live, github, img }) {
  return (
    <>
      <div className="flex h-[70vh] md:h-[80vh] flex-col project-card-parent w-[90%] md:w-[35%] lg:w-[30%]">
        {" "}
        <div className="p border border-slate-800 shadow-lg">
          <div className="p-browser bg-slate-700 ">
            <div className="p-circle bg-red-500 w-[12px] h-[12px] rounded-full mr-2 ml-3"></div>
            <div className="p-circle bg-green-500 w-[12px] h-[12px] rounded-full mr-2"></div>
            <div className="p-circle bg-yellow-500 w-[12px] h-[12px] rounded-full mr-2"></div>
          </div>
          <img src={img} alt="" className="p-img" />
        </div>
        <div className="flex py-2 items-center text-slate-100 bg-slate-800 justify-between px-12 text-xl project-code">
          <a href={live} target="_blank">
            {" "}
            <AiOutlineEye className="cursor-pointer" />
          </a>
          <a href={github} target="_blank">
            {" "}
            <BsGithub className="cursor-pointer" />
          </a>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
