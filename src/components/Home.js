import Nav from "./Nav";
import Navbar from "./Navbar";
import Skill from "./Skill";
import CustomizedTimeline from "./Timeline";

const Home = () => {
  return (
    <>
      <Nav home={true} />
      <Navbar />
      <CustomizedTimeline />
      <Skill />
    </>
  );
};

export default Home;
