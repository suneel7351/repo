import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { array } from "./array";
import TypeWriterEffect from "react-typewriter-effect";

function Navbar() {
  return (
    <>
      <div className="bg-gray-50 h-full py-8 shadow">
        <div className="w-[80%] mx-auto ">
          <div className="flex flex-wrap items-center justify-between py-8 gap-16">
            <div className="flex flex-col flex-[2] gap-2">
              <span className="relative text-xl">
                Hello! &nbsp;{" "}
                <span className=" absolute top-4 border-b px-24 border-slate-200"></span>{" "}
              </span>
              <h1 className="text-6xl">I'm Suneel Kumar</h1>
              <div className="text-2xl font-extrabold h-[30px]">
                <TypeWriterEffect
                  textStyle={{
                    color: "#000",
                    fontWeight: 500,
                    fontSize: "1.5em",
                  }}
                  startDelay={100}
                  cursorColor="#3F3D56"
                  multiText={array}
                  multiTextDelay={1000}
                  typeSpeed={130}
                />
              </div>
              <span className="text-orange-500 text-xl">
                Efficient Frontend and Backend Developer
              </span>
              <p className="text-lg">
                I specialize in developing efficient Node.js backends and
                attractive React.js frontends. My tech toolkit comprises MongoDB,
                Node.js, Express.js, and React.js, enabling me to deliver seamless
                web solutions that blend functionality and visual appeal. I'm
                passionate about creating web applications that offer a top-notch
                user experience.
              </p>
             <div className="flex gap-4">
             <Link to="/contact" className="btn w-32 text-center">
                Hire me
              </Link>

              <a target="_next" href="https://drive.google.com/file/d/1FgGFFlQWK2ZY-_kOiCCd3H2Lz7Nv9Vnd/view?usp=sharing" className="btn w-32 text-center">
               Resume
              </a>
             </div>
            </div>
          
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
