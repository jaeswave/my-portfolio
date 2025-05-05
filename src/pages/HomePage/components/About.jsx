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
              I{"'"}m a versatile tech professional with core expertise in full
              stack software development, project management, and cybersecurity.
              As a Full Stack Engineer, I build responsive, secure, and
              high-performing applications using technologies like React,
              Node.js, Next.js, NestJS, and Docker. As a Project Manager, I
              drive product delivery through agile processes, effective team
              coordination, and strategic planning—ensuring quality and
              consistency across the board. As a Cybersecurity Specialist, I
              focus on building resilient systems with strong authentication,
              data protection, and vulnerability prevention measures integrated
              by design. I'm passionate about creating tech solutions that solve
              real problems, leading with a balance of technical precision and
              big-picture thinking.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
