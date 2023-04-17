import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { array } from "./array";
import TypeWriterEffect from "react-typewriter-effect";

function Navbar() {
  return (
    <>
      {" "}
      <div className="bg-[#001634] h-full md:h-screen  mb-16">
        <div className="w-[80%] mx-auto ">
          <div className="flex flex-wrap items-center justify-between  text-slate-200 mt-16 md:mt-32 gap-16">
            <div className="flex flex-col flex-2 gap-2">
              <span className="relative text-xl">
                Hello! &nbsp;{" "}
                <span className=" absolute top-4 border-b px-24 border-slate-200"></span>{" "}
              </span>
              <h1 className="text-6xl">I'm Suneel Kumar</h1>
              <div className="text-2xl font-extrabold h-[30px]">
                <TypeWriterEffect
                  textStyle={{
                    color: "#fff",
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
                I Like to build efficient & logical backend using NodeJs.I also
                design & code attractive frontend using ReactJs.Technology i
                used are MongoDb as Database,NodeJs and Express as backend and
                ReactJs for Frontend.
              </p>
              <Link to="/contact" className="btn w-32 text-center">
                Hire me
              </Link>
            </div>
            <div className="flex flex-1 relative md:ml-0 ml-4 ">
              <div className="box-1">
                <img
                  alt="suneel"
                  className="h-[242px]  w-full object-contain  mx-auto rounded-full profile  bg-slate-100"
                  src="/img/me.jpg"
                />
              </div>
              <div className="box-2 absolute left-0 top-0"></div>
              <div className="class"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
