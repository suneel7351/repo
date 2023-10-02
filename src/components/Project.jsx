




import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import "./App.css";
import Nav from "./Nav";
import { Helmet } from "react-helmet";

function Project() {
  const [selectedStack, setSelectedStack] = useState("all");
  const data = [
    {
      img: "/img/ecom.png",
      github: "https://github.com/suneel7351/revise-ecommerce",
      live: "https://ecom-l278.onrender.com/",
      stack: "full stack",
      title: "E-commerce Platform (MERN Stack)",
      description: `Developed a dynamic e-commerce platform facilitating sellers to
      seamlessly upload and manage products. Implemented user-
      friendly features for customers to browse and purchase items.
      Admin panel and seller dashboard oﬀer robust management tools
      for streamlined operations`
    },
    {
      img: "/img/gym.png",
      github: "https://github.com/suneel7351/fitness-gym-web-design",
      live: "https://suneel7351.github.io/fitness-gym-web-design/",
      stack: "frontend",
      title: "",
      description: "Fitness Gym Website in HTML,CSS"
    },

    {
      img: "/img/mi.png",
      github: "https://github.com/suneel7351/miStore-clone",
      live: "https://suneel7351.github.io/miStore-clone/",
      stack: "frontend",
      title: "Mi Store Clone",
      description: "This is Mi Store Clone Website in Reactjs."
    },

    {
      img: "/img/freshmeal.png",
      github: "https://github.com/suneel7351/FreshMeal-Website",
      live: "https://fresh-meal-website.netlify.app/",
      stack: "frontend",
      title: "",
      description: "FreshMeal Website in HTML,CSS"
    },
    {
      img: "/img/hospital.png",
      github: "https://github.com/suneel7351/hostpital-website-reactjs",
      live: "https://doctor-website.netlify.app/",
      stack: "frontend",
      title: "Hospital UI",
      description: "This is a Hospital UI in Reactjs."
    },
  ];
  const filteredProjects =
    selectedStack === "all"
      ? data
      : data.filter((project) =>
        project.stack.toLowerCase().includes(selectedStack)
      );

  return (
    <>
      {" "}
      <Helmet>
        <title>Projects</title>
      </Helmet>
      <Nav text="Projects" />
      <div className="bg-gray-50 project project-home p-8">
        <div className="my-4 w-[350px]   mx-auto flex gap-4 bg-gray-50  py-1 px-2">
          <button
            className={`stack-button ${selectedStack === "all"
              ? "bg-blue-500 text-white"
              : selectedStack === "frontend"
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-800"
              } py-2 px-4 mr-2 rounded`}
            onClick={() => setSelectedStack("all")}
          >
            All
          </button>
          <button
            className={`stack-button ${selectedStack === "frontend"
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-800"
              } py-2 px-4 mr-2 rounded`}
            onClick={() => setSelectedStack("frontend")}
          >
            Frontend
          </button>
          <button
            className={`stack-button ${selectedStack === "full stack"
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-800"
              } py-2 px-4 rounded`}
            onClick={() => setSelectedStack("full stack")}
          >
            Full Stack
          </button>
        </div>

        <div className="justify-center flex gap-8 mt-4 flex-wrap text-slate-100">
          {filteredProjects.map((item, index) => (
            <ProjectCard
              img={item.img}
              github={item.github}
              live={item.live}
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Project;
