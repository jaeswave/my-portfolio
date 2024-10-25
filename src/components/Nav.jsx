import Button from "./Button";
import { handleScroll } from "../utils";
const Nav = () => {
  return (
    <nav className="bg-black text-white px-8 md:px-16 lg:px-24">
      <div className="container py-2 flex justify-center item-center md:justify-between ">
        <div className="text-2xl font-bold md:inline hidden">JAY</div>
        <div className="space-x-6">
          <a href="#home" className="hover:text-teal-500">
            Home
          </a>
          <a href="#about" className="hover:text-teal-500">
            About
          </a>
          <a href="#service" className="hover:text-teal-500">
            Service
          </a>
          <a href="#project" className="hover:text-teal-500">
            Projects
          </a>
          <a href="#contact" className="hover:text-teal-500">
            Contact
          </a>
        </div>
        <div className="md:inline hidden">
          <Button title="Contact Me" onClick={handleScroll} />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
