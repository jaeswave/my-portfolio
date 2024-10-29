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
    <div className="bg-hero-bg bg-no-repeat min-h-screen bg-cover bg-fixed">
      <Nav />
      <Home />
      <About />
      <Skills />
      <Service />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
