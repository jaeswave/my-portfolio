import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Project from "./components/Project";
import Service from "./components/Service";

const HomePage = () => {
  return (
    <div className="relative bg-heroBg min-h-screen text-white">
      {/* Optional overlay for darkness and mystery */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      <div className="relative z-10">
        <Nav />
        <Home />
        <About />
        <Skills />
        <Service />
        <Project />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
