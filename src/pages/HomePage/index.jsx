import Footer  from "../../components/Footer";
import Nav     from "../../components/Nav";
import About   from "./components/About";
import Skills  from "./components/Skills";
import Contact from "./components/Contact";
import Home    from "./components/Home";
import Project from "./components/Project";
import Service from "./components/Service";

export default function HomePage() {
  return (
    <div style={{ background:"var(--bg)", minHeight:"100vh" }}>
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
}
