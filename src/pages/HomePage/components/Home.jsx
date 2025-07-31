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
    <div className="text-center mt-16 py-24 px-4 text-white" id="home">
      <div className="container grid grid-row-3 gap-10 place-items-center">
        {/* Image with Glow */}
        <div className="relative">
          <div className="before:absolute before:-inset-2 before:rounded-full before:bg-gradient-to-tr before:from-[#38bdf8] before:to-[#0ea5e9] before:blur-md before:opacity-40" />
          <img
            className="relative animate__animated animate__fadeInDown mx-auto w-80 h-80 rounded-full object-cover shadow-xl transition-transform duration-300 hover:scale-105"
            src={homeImage}
            alt="homeImg"
          />
        </div>

        <div className="w-full md:w-[90%] text-white animate__animated animate__fadeInUp">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Hi, I{"'"}m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9]">
              Tijani Oladele
            </span>
          </h1>
          <p className="text-3xl sm:text-4xl font-bold mb-4">
            Full Stack Software Engineer, Project Manager & Cybersecurity
            Specialist
          </p>
          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
            I build secure, scalable applications and lead cross-functional
            teams to deliver impactful digital solutions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 w-full md:w-[20%] animate__animated animate__fadeInUp">
          <Button
            onClick={() => handleScroll("contact")}
            className=""
            title={"Contact Me"}
          />
          <Button onClick={handleResumeClick} className="" title={"Resume"} />
        </div>
      </div>
    </div>
  );
};

export default Home;
