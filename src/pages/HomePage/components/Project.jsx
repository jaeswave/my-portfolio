import Cards from "../../../components/Cards";
import { projects } from "../../../utils";

const Project = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto md:px-12 lg:px-20 px-8 grid place-self-center ">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Cards
              key={project.id}
              projectImage={project.image}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              link={project.githubLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
