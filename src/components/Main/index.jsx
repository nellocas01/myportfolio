import Navbar from "../Navbar";
import About from "../About";
import Skills from "../Skills";
import Projects from "../Projects";
import Footer from "../Footer";
import Works from "../Works";
import Education from "../Education";
import Blog from "../Blog";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <>
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Works />
      <Education />
      <Blog />
      <Footer />
    </>
  );
};
