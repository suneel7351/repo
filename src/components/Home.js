import Nav from "./Nav";
import Navbar from "./Navbar";
import Skill from "./Skill";
import CustomizedTimeline from "./Timeline";
import { Helmet } from "react-helmet";
const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Nav home={true} />
      <Navbar />
      <CustomizedTimeline />
      <Skill />
    </>
  );
};

export default Home;
