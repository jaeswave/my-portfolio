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
    <div className="text-center py-24 " id="home">
      <div className="container grid grid-row-3 gap-5 place-self-center">
        <div className="place-self-center">
          <img
            className="animate__animated animate__backInDown mx-auto min-w-56 h-56  rounded-full object-cover transform transition-transform duration-300 hover:scale-100"
            src={homeImage}
            alt="homeImg"
          />
        </div>
        <div className=" w-[85%] text-white px-4 place-self-center">
          <h1 className="text-4xl font_bold mb-2 animate__animated animate__backInLeft">
            I{"'"}m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
              Oladele Tijani
            </span>
            , Full Stack Software Engineer/Project Manager
          </h1>
          <p className="text-gray-400 text-xl animate__animated animate__backInRight">
            I specialize in building scalable and responsive web applications
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-3 min-w-[20%] place-self-center">
          <Button title="Contact Me" onClick={() => handleScroll("contact")} />
          <Button title="Resume" onClick={handleResumeClick} />
        </div>
      </div>
    </div>
  );
};

export default Home;
