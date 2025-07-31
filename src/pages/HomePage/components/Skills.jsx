// 



import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { skills } from "../../../data/skillsData";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="skills" className="relative z-10 py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            My Tech Arsenal
          </h2>
          <p className="mt-4 text-gray-300 text-lg">
            Languages, frameworks, tools & platforms I work with every day.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skills.map((skillCategory) => (
            <div
              key={skillCategory.title}
              data-aos="zoom-in"
              className="group bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 relative overflow-hidden"
            >
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-blue-400 transition-colors">
                {skillCategory.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillCategory.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-3 py-2 bg-[#1f1f1f] hover:bg-[#2a2a2a] rounded-lg transition duration-200"
                  >
                    {skill.icon ? (
                      <skill.icon className="text-blue-400 w-5 h-5" />
                    ) : (
                      <span className="text-blue-400 w-5 h-5" />
                    )}
                    <span className="text-sm text-white">{skill.name}</span>
                  </div>
                ))}
              </div>

              {/* Optional Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-blue-400 rounded-2xl blur-xl transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
