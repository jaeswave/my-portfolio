// import aboutImage from "../../../assets/aboutImage.png";
// const About = () => {
//   return (
//     <div className="text-white py-10 bg-transparent" id="about">
//       <div className="container mx-auto md:px-12 lg:px-20 grid place-self-center ">
//         <h2 className="text-4xl font-bold text-center mb-14">About Me</h2>
//         <div className="grid grid-row-2 lg:grid-cols-[20%_auto] gap-2 mb-8">
//           <div className="place-self-center">
//             <img
//               className="w-80 h-80 rounded-lg object-cover border-solid border"
//               src={aboutImage}
//               alt="aboutImage"
//             />
//           </div>
//           <div className="flex flex-col justify-center gap-5  px-2 py-2 text-center">
//             <p className="text-xl">
//               I{"'"}m a versatile tech professional with core expertise in full
//               stack software development, project management, and cybersecurity.
//               As a Full Stack Engineer, I build responsive, secure, and
//               high-performing applications using technologies like React,
//               Node.js, Next.js, NestJS, and Docker. As a Project Manager, I
//               drive product delivery through agile processes, effective team
//               coordination, and strategic planning—ensuring quality and
//               consistency across the board. As a Cybersecurity Specialist, I
//               focus on building resilient systems with strong authentication,
//               data protection, and vulnerability prevention measures integrated
//               by design. I'm passionate about creating tech solutions that solve
//               real problems, leading with a balance of technical precision and
//               big-picture thinking.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;




import aboutImage from "../../../assets/aboutImage.png";

const About = () => {
  return (
    <section id="about" className="py-24 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Who I Am
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-300">
            A builder. A leader. A defender of secure, scalable software.
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <div className="flex-shrink-0">
            <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-2xl overflow-hidden shadow-xl border border-white/10 relative group">
              <img
                src={aboutImage}
                alt="Oladdele Tijani Sheu"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition duration-300 rounded-2xl" />
            </div>
          </div>

          {/* Description */}
          <div className="max-w-2xl space-y-6 text-center lg:text-left text-gray-300 text-lg leading-relaxed">
            <p>
              <span className="font-semibold text-white">
                Hi, I’m Oladdele Tijani Sheu
              </span>{" "}
              — a full stack engineer, project manager, and ethical hacker. I bring products to life by writing clean code, leading agile teams, and building secure, scalable systems.
            </p>
            <p>
              I specialize in <span className="text-white font-medium">React, Node.js, Next.js, NestJS, and Docker</span>. I’ve led teams through complex software builds, ensuring efficiency and excellence at every stage.
            </p>
            <p>
              In cybersecurity, I design systems that are hardened by default—leveraging authentication, encryption, and vulnerability prevention strategies from the ground up.
            </p>
            <p>
              My mission is to build tech that matters—tools that solve real problems and make life better.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
