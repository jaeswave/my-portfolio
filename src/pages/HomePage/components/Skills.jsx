import Cards from "../../../components/Cards";
import { skills } from "../../../data/skillsData";
const Skills = () => {
  return (
    <div className="text-white py-20" id="skills">
      <div className="container mx-auto md:px-12 lg:px-20 px-8 grid place-self-center ">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillCategory) => (
            <div key={skillCategory.title} className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                {skillCategory.title}
              </h3>
              <div className="flex flex-wrap gap-4">
                {skillCategory.items.map((skill) => (
                  <Cards
                    key={skill.name}
                    name={skill.name}
                    icon={<skill.icon />}
                  />
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
