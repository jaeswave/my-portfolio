import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Cards from "../../../components/Cards";
import { projects } from "../../../data";

const Project = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div
      className="text-white py-20 "
      id="project"
    >
      <div className="container mx-auto md:px-12 lg:px-20 px-8">
        <h2
          className="text-4xl font-bold text-center mb-12"
          data-aos="fade-down"
        >
          Projects
        </h2>
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Cards
                cardType={false}
                projectImage={project.image}
                title={project.title}
                description={project.description}
                techStack={project.techStack}
                link={project.githubLink}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
