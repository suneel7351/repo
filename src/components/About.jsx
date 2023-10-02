import React from "react";
import Nav from "./Nav";
import { Helmet } from "react-helmet";
import { AiTwotoneMail } from 'react-icons/ai'
import { MdLocationPin } from 'react-icons/md'
import { AiFillPhone } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
function About() {
  return (
    <>
      {" "}
      <Helmet>
        <title>About</title>
      </Helmet>
      <Nav text="About me" />
      <div className="shadow py-4 bg-gray-50">
        <div className="about-card mx-auto container py-8 md:px-8 px-4 flex flex-col justify-center gap-4">
          <h1 className="text-3xl">Basic Information</h1>
          <div className="about-details flex flex-col gap-2">
            <span className="font-extrabold text-3xl">Suneel Kumar</span>
            <span>A Full Stack Dev</span>
            <p className="text-lg">
              Final-year BTech student excelling as a dedicated MERN Stack Developer. With three months of transformative internship experience, I actively contribute to ongoing projects. Currently working as an intern in a company as a full-stack developer, I am committed to continuous learning and innovation, ensuring a robust foundation for future professional achievements.
            </p>
            <h1 className="font-bold text-xl">Education - </h1>
            <div className="education">
              <h2 className="text-xl">
                B.TECH in Information Technology
              </h2>
              <p className="">UIET, CSJM University - Kanpur, Uttar Pradesh | August 2020 to May 2024</p>
              <p className="">Courses: Information Technology</p>
            </div>
            <div className="education">
              <h2 className="text-xl">
                Intermediate
              </h2>
              <p className="">Saraswati Vidya Mandir Inter College, Jalesar (ETAH) | 2017 - 2018</p>
              <p className="text-sm">Percentage: 85.2%</p>
            </div>
            <div className="education">
              <h2 className="text-xl">
                High School
              </h2>
              <p className="">Saraswati Vidya Mandir Inter College, Jalesar (ETAH) | 2015 - 2016</p>
              <p className="text-sm">Percentage: 86.67%</p>
            </div>


            <div className="flex justify-between text-xl mt-4">
              <div className="flex gap-2 items-center">
                <AiTwotoneMail /> : <span>rsuneel47@gmail.com</span>
              </div>
              <div className="flex gap-2 items-center">
                <AiFillPhone /> : <span>7351437357</span>
              </div>
              <div className="flex gap-2 items-center">
                <AiFillGithub /> : <a className="text-blue-500" href="https://github.com/suneel7351" target="_blank" rel="noopener noreferrer">suneel7351</a>
              </div>
              <div className="flex gap-2 items-center">
                <AiFillLinkedin /> : <a href="https://www.linkedin.com/in/suneel7351/" target="_blank" rel="noopener noreferrer" className="text-blue-500">suneel7351</a>
              </div>
              <div className="flex gap-2 items-center">
                <MdLocationPin /> : <span>Kanpur</span>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="bg-white mb-8">
        <div className=" flex flex-col gap-2 mt-8 container mx-auto md:px-8 px-4 pt-8">
          <h1 className="font-bold text-xl">Internship Experience - </h1>
          <h2 className="text-xl">
            Full Stack Developer Internship
          </h2>
          <p>During my three-month MERN stack internship, I immersed myself in full-stack development, gaining hands-on experience in MongoDB, Express.js, React.js, and Node.js. I contributed to building dynamic web applications, honing my skills in front-end and back-end technologies, and collaborating effectively in a professional development environment.</p>
          <h2 className="text-xl">
            <span className=" font-bold">Company - </span>
            CEOITBOX Tech Services LLP
          </h2>
          <small>19 June 2023 to 19 September 2023</small>

          <img src="/img/certificate.png" className="w-[300px]" />
          <a className="btn w-36 text-center" href="https://drive.google.com/file/d/1oBvJsVtrY6V1IWt8CVqPClkVmGqfY6gx/view?usp=sharing" target="_next">Download</a>

          <h1 className="text-3xl my-2">Achievements/Tasks</h1>
          <div className="flex flex-wrap gap-4">
            <div className="p-4 md:w-[350px] bg-gray-50 shadow hover:shadow-md border-gray-100">
              <h1 className="text-2xl"> MERN Meeting Scheduler </h1>
              <p className="">
                Seamlessly integrated with Google Calendar for efficient task management. Optimized productivity by providing a user-friendly experience in scheduling meetings, tracking responsibilities, and enhancing overall organizational efficiency.
              </p>
            </div>

            <div className="p-4 md:w-[350px] bg-gray-50 shadow hover:shadow-md border-gray-100">
              <h1 className="text-2xl">   Employee Feedback App </h1>
              <p className="">
                Enabled monthly self-assessment aligned with KPIs. Integrated email notifications for managers, ensuring constructive feedback. Admin panel for centralized oversight in streamlined performance management.
              </p>
            </div>

            <div className="p-4 md:w-[350px] bg-gray-50 shadow hover:shadow-md border-gray-100">
              <h1 className="text-2xl"> Reminder Web Application </h1>
              <p className="">
                Robust platform for user registration, recurring reminders, and dynamic scheduling. Leveraged WhatsApp and email APIs for automated reminders, enhancing user productivity and engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
