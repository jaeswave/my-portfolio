import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import "animate.css";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);

  const toggleNav = () => {
    if (navOpen) {
      setAnimateOut(true);
      setTimeout(() => {
        setNavOpen(false);
        setAnimateOut(false); // Reset animation state after hiding
      }, 500); // Match this with the duration of bounceOutUp animation (500ms)
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
          <a href="#home" className="hover:text-teal-500">
            Home
          </a>
          <a href="#about" className="hover:text-teal-500">
            About
          </a>
          <a href="#skills" className="hover:text-teal-500">
            Skills
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
        <button className="md:hidden" onClick={toggleNav}>
          {navOpen ? <IoMdClose /> : <GiHamburgerMenu />}
        </button>
      </div>
    </nav>
  );
};

export default Nav;
