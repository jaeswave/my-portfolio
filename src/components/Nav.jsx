
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
      }, 500); // match animation duration
    } else {
      setNavOpen(true);
    }
  };

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Service", id: "service" },
    { label: "Projects", id: "project" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav className="bg-gradient-to-r from-black via-gray-900 to-black bg-opacity-80 backdrop-blur-md text-white px-6 md:px-16 fixed top-0 left-0 w-full shadow-lg z-50 transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center h-16">
        <div className="text-3xl font-extrabold font-logo tracking-wider text-teal-400 animate__animated animate__fadeInLeft">
          JaeSwave
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map(({ label, id }, i) => (
            <a
              key={id}
              onClick={() => handleScroll(id)}
              className={`cursor-pointer text-lg font-medium hover:text-teal-300 transition duration-200 ease-in-out animate__animated animate__fadeInDown animate__delay-${
                i + 1
              }s`}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-3xl text-teal-300 focus:outline-none animate__animated animate__fadeIn"
          onClick={toggleNav}
          aria-label="Toggle Navigation"
        >
          {navOpen ? <IoMdClose /> : <GiHamburgerMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <div
          className={`md:hidden absolute top-16 left-0 w-full bg-gray-100 text-black py-6 flex flex-col items-center space-y-4 shadow-md animate__animated ${
            animateOut ? "animate__bounceOutUp" : "animate__fadeInDown"
          }`}
        >
          {navLinks.map(({ label, id }, i) => (
            <a
              key={id}
              onClick={() => {
                handleScroll(id);
                toggleNav();
              }}
              className="text-xl font-semibold cursor-pointer hover:text-teal-700 transition duration-200 animate__animated animate__fadeIn animate__faster"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Nav;
