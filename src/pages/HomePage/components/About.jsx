import aboutImage from "../../../assets/aboutImage.png";
const About = () => {
  return (
    <div className="text-white py-10 bg-transparent" id="about">
      <div className="container mx-auto md:px-12 lg:px-20 grid place-self-center ">
        <h2 className="text-4xl font-bold text-center mb-14">About Me</h2>
        <div className="grid grid-row-2 lg:grid-cols-[20%_auto] gap-2 mb-8">
          <div className="place-self-center">
            <img
              className="w-80 h-80 rounded-lg object-cover border-solid border"
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
              Beyond programming skills, I have experience managing projects
              using tools like Jira and Trello, ensuring effective task
              tracking, team collaboration, and project delivery. My combination
              of development expertise and project management skills enables me
              to drive successful outcomes from both technical and
              organizational perspectives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
