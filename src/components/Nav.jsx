import { useState, useEffect } from "react";
import { handleScroll } from "../utils";

const navLinks = [
  { label: "Home",     id: "home" },
  { label: "About",    id: "about" },
  { label: "Skills",   id: "skills" },
  { label: "Services", id: "service" },
  { label: "Projects", id: "project" },
  { label: "Contact",  id: "contact" },
];

export default function Nav() {
  const [scrolled, setScrolled]   = useState(false);
  const [active,   setActive]     = useState("home");
  const [open,     setOpen]       = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = navLinks.map(l => document.getElementById(l.id)).filter(Boolean);
      for (let i = sections.length - 1; i >= 0; i--) {
        if (window.scrollY >= sections[i].offsetTop - 120) {
          setActive(navLinks[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(6, 19, 29, 0.88)" : "rgba(6, 19, 29, 0.28)",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(125, 211, 252, 0.08)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center h-16">
        {/* Logo */}
        <a
          onClick={() => handleScroll("home")}
          className="cursor-pointer flex items-center gap-2"
        >
          <span
            className="font-display font-extrabold tracking-wider text-xl glow"
            style={{ color: "var(--cyan)", fontFamily: "'Rubik Wet Paint', cursive" }}
          >
            TO
          </span>
          <span
            className="font-mono text-[10px] px-2 py-0.5 rounded-full"
            style={{ background: "rgba(125,211,252,0.12)", color: "var(--cyan)", border: "1px solid rgba(125,211,252,0.25)", letterSpacing:"0.14em" }}
          >
            PORTFOLIO
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(({ label, id }) => (
            <a
              key={id}
              onClick={() => handleScroll(id)}
              className="cursor-pointer relative px-4 py-2 text-sm transition-colors duration-200"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                letterSpacing: "0.08em",
                color: active === id ? "var(--cyan)" : "var(--muted)",
              }}
            >
              {active === id && (
                <span
                  className="absolute inset-0 rounded"
                  style={{ background: "rgba(0,212,255,0.07)", border: "1px solid rgba(0,212,255,0.15)" }}
                />
              )}
              <span className="relative">{label}</span>
            </a>
          ))}
          <a
            onClick={() => handleScroll("contact")}
            className="btn-cyber ml-4 cursor-pointer"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          style={{ cursor: "none" }}
        >
          <span className="block w-6 h-px transition-all" style={{ background: open ? "var(--cyan)" : "var(--white)", transform: open ? "rotate(45deg) translateY(4px)" : "none" }} />
          <span className="block w-4 h-px transition-all" style={{ background: open ? "transparent" : "var(--white)", opacity: open ? 0 : 1 }} />
          <span className="block w-6 h-px transition-all" style={{ background: open ? "var(--cyan)" : "var(--white)", transform: open ? "rotate(-45deg) translateY(-4px)" : "none" }} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: open ? "400px" : "0",
          background: "rgba(5,8,16,0.98)",
          borderBottom: open ? "1px solid rgba(0,212,255,0.1)" : "none",
        }}
      >
        <div className="px-8 py-6 flex flex-col gap-5">
          {navLinks.map(({ label, id }) => (
            <a
              key={id}
              onClick={() => { handleScroll(id); setOpen(false); }}
              className="cursor-pointer text-lg transition-colors"
              style={{
                fontFamily: "var(--font-mono)",
                color: active === id ? "var(--cyan)" : "var(--white)",
              }}
            >
              <span style={{ color: "var(--cyan)", marginRight: "0.5rem", fontSize: "0.7rem" }}>
                {String(navLinks.findIndex(l=>l.id===id)+1).padStart(2,"0")}.
              </span>
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
