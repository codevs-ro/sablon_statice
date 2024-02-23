import AboutProduct from "../components/AboutProduct";

const { default: Hero } = require("../components/Hero");

const About = () => {
  return (
    <>
      <Hero />
      <AboutProduct />
    </>
  );
};

export default About;
