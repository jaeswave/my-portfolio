import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import "animate.css";
import { handleScroll } from "../utils";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);

  const toggleNav = () => {
    if (navOpen) {
      setAnimateOut(true);
      setTimeout(() => {
        setNavOpen(false);
        setAnimateOut(false);
      }, 500);
    } else {
      setNavOpen(true);
    }
  };

  return (
    <nav className="bg-black text-white px-8 md:px-16 lg:px-24 fixed top-0 left-0 w-full shadow-md z-10">
      <div className="container flex justify-between items-center">
        <div className="text-2xl font-bold">JaeSwave</div>
        <div
          className={`${
            navOpen
              ? `flex flex-col items-center absolute top-16 left-0 w-full bg-gray-300 text-black text-2xl shadow-md space-y-4 py-4 animate__animated ${
                  animateOut ? "animate__bounceOutUp" : "animate__bounceInDown"
                }`
              : "hidden md:space-x-6 md:block"
          }`}
        >
          <a
            onClick={() => handleScroll("home")}
            className="hover:text-teal-500 cursor-pointer"
          >
            Home
          </a>
          <a
            onClick={() => handleScroll("about")}
            className="hover:text-teal-500 cursor-pointer"
          >
            About
          </a>
          <a
            onClick={() => handleScroll("skills")}
            className="hover:text-teal-500 cursor-pointer"
          >
            Skills
          </a>
          <a
            onClick={() => handleScroll("service")}
            className="hover:text-teal-500 cursor-pointer"
          >
            Service
          </a>
          <a
            onClick={() => handleScroll("project")}
            className="hover:text-teal-500 cursor-pointer"
          >
            Projects
          </a>
          <a
            onClick={() => handleScroll("contact")}
            className="hover:text-teal-500 cursor-pointer"
          >
            Contact
          </a>
        </div>
        <button className="md:hidden" onClick={toggleNav}>
          {navOpen ? <IoMdClose /> : <GiHamburgerMenu />}
        </button>
      </div>
    </nav>
  );
};

export default Nav;
