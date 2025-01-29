import Navbar from "../Navbar";
import About from "../About";
import Skills from "../Skills";
import Projects from "../Projects";
import Contact from "../Contact";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <>
      <Navbar />
      <About />
      <Skills />
      <Projects />
      {/* <Contact /> */}
    </>
  );
};
