import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import Cards from "../../../components/Cards";
import { skills } from "../../../data/skillsData";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="text-white py-20" id="skills">
      <div className="container mx-auto md:px-12 lg:px-20 px-8">
        <h2
          className="text-4xl font-bold text-center mb-12"
          data-aos="fade-down"
        >
          Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skills.map((skillCategory) => (
            <div
              key={skillCategory.title}
              data-aos="fade-up"
              className=" p-6 bg-gradient-to-r from-blue-500 to-green-500	 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4 text-white">
                {skillCategory.title}
              </h3>
              <div className="flex flex-wrap gap-4">
                {skillCategory.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="group flex items-center gap-2 px-4 py-2 bg-[#2a2a2a] rounded-lg hover:bg-[#3a3a3a] transition-transform duration-300 transform hover:scale-105"
                  >
                    <span className="text-xl text-blue-400 group-hover:animate-bounce">
                      {<skill.icon />}
                    </span>
                    <span className="text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
