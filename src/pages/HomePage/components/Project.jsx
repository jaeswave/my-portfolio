// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import Cards from "../../../components/Cards";
// import { projects } from "../../../data";

// const Project = () => {
//   useEffect(() => {
//     AOS.init({ duration: 800, once: true });
//   }, []);

//   return (
//     <div
//       className="text-white py-20 "
//       id="project"
//     >
//       <div className="container mx-auto md:px-12 lg:px-20 px-8">
//         <h2
//           className="text-4xl font-bold text-center mb-12"
//           data-aos="fade-down"
//         >
//           Projects
//         </h2>
//         <div className="grid lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <div
//               key={project.id}
//               data-aos="fade-up"
//               data-aos-delay={index * 100}
//               className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
//             >
//               <Cards
//                 cardType={false}
//                 projectImage={project.image}
//                 title={project.title}
//                 description={project.description}
//                 techStack={project.techStack}
//                 link={project.githubLink}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Project;




import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { projects } from "../../../data";

const Project = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div
      id="project"
      className="text-white py-20 bg-gradient-to-b from-white/5 to-black/10 backdrop-blur-sm"
    >
      <div className="container mx-auto md:px-12 lg:px-20 px-8">
        <h2
          className="text-4xl font-bold text-center mb-12"
          data-aos="fade-down"
        >
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white/5 border border-white/10 rounded-2xl shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700"
                  >
                    Live Preview
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-800 text-white rounded-md text-sm hover:bg-gray-900"
                  >
                    GitHub
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-300 mb-4">
                  {project.description}
                </p>

                {/* Tech stack badges */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-900 text-white text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
