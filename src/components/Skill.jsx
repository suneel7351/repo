import React, { useRef, useEffect, useState } from "react";
import "./App.css";
import {
  SiReact,
  SiJava,
  SiJavascript,
  SiCss3,
  SiExpress,
  SiHtml5,
  SiTailwindcss,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

function Skill({ skills }) {
  const cubeRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [initialX, setInitialX] = useState(0);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setInitialX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const dx = e.clientX - initialX;
    const sensitivity =0.0009

    setRotation((prevRotation) => ({
      x: prevRotation.x,
      y: prevRotation.y + dx * sensitivity,
    }));

    setInitialX(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  useEffect(() => {
    if (cubeRef.current) {
      cubeRef.current.style.transform = `rotateX(${rotation.x}rad) rotateY(${rotation.y}rad)`;
    }
  }, [rotation]);





  return (
    <div className="skill bg-gray-50">
      <h1 className="text-black text-7xl top-0 mb-32">My Skills</h1>
      <div className="skillContainer cursor-pointer"
        ref={cubeRef}
        onMouseDown={handleMouseDown}
        style={{userSelect:'none'}}
    
      
      >

        {
          skills?.map((item, index) => {
            return <div className={`cursor-pointer skillFaces bg-gray-200 skillFaces-${index + 1} flex gap-2 flex-col px-3 py-2`} >
              <h2 className="text-2xl font-bold mb-2 text-black">{item?.title}</h2>
              <p className="text-black">{item?.description}</p>
              <div className="progress-bar w-full h-4 bg-gray-300 rounded-md relative">
                <div className="progress-bar-fill h-full bg-blue-500 rounded-md animate-pulse" style={{ width: `${item?.progress}%` }}>
                  <span className="absolute progress-text text-center text-white text-xs absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">{item?.progress}%</span>
                </div>
              </div>
            </div>
          })
        }

      </div>
      <div className="cubeShadow bg-gray-200 "></div>
      
    </div>
  );
}

export default Skill;
