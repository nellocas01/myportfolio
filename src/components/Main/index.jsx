import Navbar from "../Navbar";
import About from "../About";
import Skills from "../Skills";
import Contact from "../Contact";
import Projects from "../Projects";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <>
      <Navbar />
      <About />
      <Skills />
      {/* <Projects />
      <Contact /> */}
    </>
  );
};
