import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Project from "./components/Project";
import Service from "./components/Service";

const HomePage = () => {
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Service />
      <Project />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;
