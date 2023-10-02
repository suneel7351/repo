import Nav from "./Nav";
import Navbar from "./Navbar";
import Skill from "./Skill";
import CustomizedTimeline from "./CustomizedTimeline";
import { Helmet } from "react-helmet";
const Home = () => {
  const skillData = [
    {
      title: "JavaScript",
      description: "JavaScript is a versatile scripting language used for building interactive and dynamic web applications. It enables developers to create responsive and engaging user experiences on the web.",
      progress: 80
    },
    {
      title: "Node.js",
      description: "Node.js is a server-side JavaScript runtime that allows developers to build scalable network applications. It utilizes an event-driven, non-blocking I/O model, making it ideal for real-time applications and APIs.",
      progress: 75
    },
    {
      title: "React",
      description: "React is a JavaScript library for building user interfaces. It offers a declarative and efficient approach to UI development, making it a popular choice for creating interactive web applications.",
      progress: 90
    },
    {
      title: "MongoDB",
      description: "MongoDB is a NoSQL database known for its high performance, high availability, and easy scalability. It is widely used for storing and retrieving data in modern web applications.",
      progress: 85
    },
    {
      title: "MySQL",
      description: "MySQL is an open-source relational database management system known for its reliability and ease of use. It is commonly used for data storage and retrieval in various applications.",
      progress: 70
    },
    {
      title: "C++",
      description: "C++ is a powerful, general-purpose programming language with applications in system and software development. It is widely used in game development and offers high performance and efficiency.",
      progress: 60
    }
  ];
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Nav home={true} />
      <Navbar />
      <CustomizedTimeline />
      <Skill skills={skillData}/>

     
      
    </>
  );
};

export default Home;
