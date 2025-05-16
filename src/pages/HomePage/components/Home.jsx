// import homeImage from "../../../assets/homeImage.png";
// import Button from "../../../components/Button";
// import { handleScroll } from "../../../utils";
// import Resume from "../../../assets/My_Resume.pdf";
// import "animate.css";

// const Home = () => {
//   function handleResumeClick() {
//     window.open(Resume, "_blank");
//   }

//   return (
//     <div className="text-center py-24 " id="home">
//       <div className="container grid grid-row-3 gap-5 place-self-center">
//         <div className="place-self-center">
//           <img
//             className="animate__animated animate__backInDown mx-auto min-w-56 h-56  rounded-full object-cover transform transition-transform duration-300 hover:scale-100"
//             src={homeImage}
//             alt="homeImg"
//           />
//         </div>
//         <div className=" w-[85%] text-white px-4 place-self-center">
//           <h1 className="text-4xl font_bold mb-2 animate__animated animate__backInLeft">
//             I{"'"}m{" "}
//             <span className="text-transparent font-bold bg-clip-text bg-gradient-to-b from-sky-50 to-white">
//               Oladele Tijani
//             </span>
//             , Full Stack Software Engineer | Project Manager | Cybersecurity
//             Educator and Specialist
//           </h1>
//           <p className="text-gray-400 text-xl animate__animated animate__backInRight">
//             I build secure, scalable web applications and lead cross-functional
//             teams to deliver impactful digital solutions.{" "}
//           </p>
//         </div>
//         <div className="grid sm:grid-cols-2 gap-3 min-w-[20%] place-self-center">
//           <Button title="Contact Me" onClick={() => handleScroll("contact")} />
//           <Button title="Resume" onClick={handleResumeClick} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;




import homeImage from "../../../assets/homeImage.png";
import Button from "../../../components/Button";
import { handleScroll } from "../../../utils";
import Resume from "../../../assets/My_Resume.pdf";
import "animate.css";

const Home = () => {
  function handleResumeClick() {
    window.open(Resume, "_blank");
  }

  return (
    <div
      className="text-center py-24 px-4 text-white"
      id="home"
    >
      <div className="container grid grid-row-3 gap-10 place-items-center">
        {/* Image with Glow */}
        <div className="relative">
          <div className="before:absolute before:-inset-2 before:rounded-full before:bg-gradient-to-tr before:from-[#38bdf8] before:to-[#0ea5e9] before:blur-md before:opacity-40" />
          <img
            className="relative animate__animated animate__fadeInDown mx-auto w-56 h-56 rounded-full object-cover shadow-xl transition-transform duration-300 hover:scale-105"
            src={homeImage}
            alt="homeImg"
          />
        </div>

        <div className="w-[90%] max-w-3xl text-white animate__animated animate__fadeInUp">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            I{"'"}m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9]">
              Oladele Tijani
            </span>
            , Full Stack Software Engineer, Project Manager & Cybersecurity
            Specialist
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
            I build secure, scalable web applications and lead cross-functional
            teams to deliver impactful digital solutions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 w-full max-w-xs animate__animated animate__fadeInUp">
          <button
            onClick={() => handleScroll("contact")}
            className="bg-gradient-to-r from-[#06b6d4] to-[#3b82f6] text-white font-semibold py-2 px-6 rounded-full shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            Contact Me
          </button>
          <button
            onClick={handleResumeClick}
            className="bg-gradient-to-r from-[#10b981] to-[#22c55e] text-white font-semibold py-2 px-6 rounded-full shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
