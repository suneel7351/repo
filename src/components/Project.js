import React from "react";
import ProjectCard from "./ProjectCard";
import "./App.css";
import Nav from "./Nav";
import { Helmet } from "react-helmet";
function Project() {
  const data = [
    {
      img: "/img/ss.png",
      github: "https://github.com/suneel7351/course-client",
      live: "https://codewithjohn-two.vercel.app/",
    },
    {
      img: "/img/gym.png",
      github: "https://github.com/suneel7351/fitness-gym-web-design",
      live: "https://suneel7351.github.io/fitness-gym-web-design/",
    },
    {
      img: "/img/mi.png",
      github: "https://github.com/suneel7351/miStore-clone",
      live: "https://suneel7351.github.io/miStore-clone/",
    },
    {
      img: "/img/food.png",
      github: "https://github.com/suneel7351/Food-website",
      live: "https://suneel7351.github.io/Food-website/",
    },
    {
      img: "/img/freshmeal.png",
      github: "https://github.com/suneel7351/FreshMeal-Website",
      live: "https://fresh-meal-website.netlify.app/",
    },
    {
      img: "/img/hospital.png",
      github: "https://github.com/suneel7351/hostpital-website-reactjs",
      live: "https://doctor-website.netlify.app/",
    },
  ];

  return (
    <>
      {" "}
      <Helmet>
        <title>Projects</title>
      </Helmet>
      <Nav text="Projects" />
      <div className=" bg-[#011431] project border-t border-dotted border-slate-700 project-home p-8  ">
        <h1 className="text-center  text-5xl md:text-7xl text-slate-200 mt-8 mb-16">
          My Some Work
        </h1>
        <div className="justify-center flex gap-8 flex-wrap text-slate-100 ">
          {data.map((item, index) => {
            return (
              <ProjectCard
                img={item.img}
                github={item.github}
                live={item.live}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Project;
