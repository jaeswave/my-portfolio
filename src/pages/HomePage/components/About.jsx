import aboutImage from "../../../assets/icon.png";
const About = () => {
  return (
    <div className="bg-black text-white py-10" id="about">
      <div className="container mx-auto md:px-12 lg:px-20 grid place-self-center ">
        <h2 className="text-4xl font-bold text-center mb-14">About Me</h2>
        <div className="grid grid-row-2 lg:grid-cols-[20%_auto] gap-2 mb-8">
          <div className="place-self-center">
            <img
              className="w-72 h-72rounded-lg object-cover border-solid border"
              src={aboutImage}
              alt="aboutImage"
            />
          </div>
          <div className="flex flex-col justify-center gap-5  px-2 py-2 text-center">
            <p className="text-xl">
              I{"'"}m passionate about developing innovative solutions that make
              a real difference in the world. I have a strong foundation in
              programming languages such as JavaScript and Python, along with
              experience in web frameworks like React, React Native and Next.js.
              Additionally, I am proficient in backend technologies such as
              Node.js and have worked extensively with both SQL and NoSQL
              databases.
            </p>

            <p className="text-xl">
              Beyond technical skills, I have experience managing projects using
              tools like Jira and Trello, ensuring effective task tracking, team
              collaboration, and project delivery. My combination of development
              expertise and project management skills enables me to drive
              successful outcomes from both technical and organizational
              perspectives.
            </p>
          </div>
        </div>
        <div className=" grid grid-rows-3 gap-3 px-5 font-bold">
          <div className="flex items-center">
            <label htmlFor="html&css" className="w-2/12 ">
              HTML & CSS
            </label>
            <div className="grow bg-gray-800 rounded-full h-2.5">
              <div className="bg-gradient-to-r from-teal-500 to-green-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-11/12"></div>
            </div>
          </div>
          <div className="flex items-center">
            <label htmlFor="react" className="w-2/12 ">
              React JS
            </label>
            <div className="grow bg-gray-800 rounded-full h-2.5">
              <div className="bg-gradient-to-r from-teal-500 to-green-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
            </div>
          </div>
          <div className="flex  items-center">
            <label htmlFor="node" className="w-2/12 ">
              Node JS
            </label>
            <div className="grow bg-gray-800 rounded-full h-2.5">
              <div className="bg-gradient-to-r from-teal-500 to-green-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-11/12"></div>
            </div>
          </div>
          <div className="flex  items-center">
            <label htmlFor="Database" className="w-2/12 ">
              Databases
            </label>
            <div className="grow bg-gray-800 rounded-full h-2.5">
              <div className="bg-gradient-to-r from-teal-500 to-green-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12"></div>
            </div>
          </div>
          <div className="flex  items-center">
            <label htmlFor="project" className="w-2/12 ">
              Project Manager
            </label>
            <div className="grow bg-gray-800 rounded-full h-2.5">
              <div className="bg-gradient-to-r from-teal-500 to-green-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-7/12"></div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 place-items-center text-center mt-8">
          <div>
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-green-400">
              3+
            </h3>
            <p>Years Experience</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-green-400">
              5+
            </h3>
            <p>Projects Completed</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-green-400">
              10+
            </h3>
            <p>Satisfied Clients</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
