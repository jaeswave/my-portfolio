import { useEffect, useRef, useState } from "react";
import homeImage from "../../../assets/homeImage.png";
import Resume from "../../../assets/My_Resume.pdf";
import { handleScroll } from "../../../utils";

const ROLES = [
  "Full Stack Engineer",
  "Cybersecurity Specialist",
  "Project Manager",
  "Backend Architect",
  "System Designer",
];

export default function Home() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const canvasRef = useRef(null);

  // Typewriter
  useEffect(() => {
    const target = ROLES[roleIdx];
    let timeout;
    if (typing) {
      if (displayed.length < target.length) {
        timeout = setTimeout(
          () => setDisplayed(target.slice(0, displayed.length + 1)),
          65,
        );
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      } else {
        setRoleIdx((i) => (i + 1) % ROLES.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIdx]);

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.5 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,212,255,${p.opacity})`;
        ctx.fill();
      });
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 110) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(0,212,255,${0.06 * (1 - d / 110)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen grid-bg flex items-center justify-center overflow-hidden mt-16"
      style={{ paddingTop: "5rem", paddingBottom: "4rem" }}
    >
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.6 }}
      />

      {/* Radial glow */}
      <div
        className="absolute"
        style={{
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,212,255,0.07) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          pointerEvents: "none",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        {/* ── MOBILE: image on top, text below ── */}
        <div className="flex flex-col items-center gap-8 lg:hidden">
          {/* Profile image — mobile */}
          <div className="relative flex-shrink-0">
            <div
              className="absolute spin-slow"
              style={{
                inset: "-18px",
                borderRadius: "50%",
                border: "1px dashed rgba(0,212,255,0.25)",
              }}
            />
            <div
              className="relative"
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                background:
                  "linear-gradient(135deg, rgba(0,212,255,0.25), rgba(0,255,136,0.12))",
                padding: "3px",
              }}
            >
              <img
                src={homeImage}
                alt="Tijani Oladele"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  objectFit: "cover",
                  background: "var(--surface)",
                }}
              />
            </div>
            {/* Badges — mobile, smaller */}
            <div
              className="absolute font-mono px-2 py-1 rounded"
              style={{
                top: "5%",
                right: "-50px",
                background: "var(--surface)",
                border: "1px solid rgba(0,212,255,0.3)",
                color: "var(--cyan)",
                fontSize: "0.6rem",
                letterSpacing: "0.05em",
                whiteSpace: "nowrap",
                boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
              }}
            >
              ⚡ Full Stack
            </div>
            <div
              className="absolute font-mono px-2 py-1 rounded"
              style={{
                bottom: "5%",
                left: "-45px",
                background: "var(--surface)",
                border: "1px solid rgba(0,255,136,0.3)",
                color: "var(--green)",
                fontSize: "0.6rem",
                letterSpacing: "0.05em",
                whiteSpace: "nowrap",
                boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
              }}
            >
              🔒 Cybersec
            </div>
          </div>

          {/* Text — mobile, centered */}
          <div className="text-center w-full">
            <p
              className="section-label justify-center mb-5"
              style={{ fontSize: "0.6rem" }}
            >
              Available for work
            </p>
            <h1
              className="font-display font-extrabold leading-none mb-4"
              style={{
                fontSize: "clamp(2.6rem, 12vw, 4rem)",
                fontFamily: "var(--font-display)",
              }}
            >
              <span className="glitch glow" data-text="Tijani">
                Tijani
              </span>
              <br />
              <span style={{ color: "var(--white)", opacity: 0.9 }}>
                Oladele
              </span>
            </h1>

            {/* Typewriter */}
            <div
              className="flex items-center justify-center gap-2 mb-6"
              style={{ minHeight: "2rem" }}
            >
              <span
                className="font-mono"
                style={{
                  color: "var(--cyan)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "clamp(0.85rem, 3.5vw, 1.1rem)",
                }}
              >
                {displayed}
                <span
                  style={{
                    display: "inline-block",
                    width: "2px",
                    height: "1em",
                    background: "var(--cyan)",
                    marginLeft: "2px",
                    verticalAlign: "middle",
                    animation: "blink 1s step-start infinite",
                  }}
                />
              </span>
            </div>

            <p
              className="text-sm leading-relaxed mb-8 mx-auto"
              style={{
                color: "rgba(232,237,245,0.55)",
                fontFamily: "var(--font-body)",
                maxWidth: "340px",
              }}
            >
              Secure, scalable apps & cross-functional team leadership. Based in{" "}
              <span style={{ color: "var(--cyan)" }}>Lagos, Nigeria</span>.
            </p>

            {/* Stats — mobile */}
            <div className="flex justify-center gap-8 mb-8">
              {[
                ["5+", "Years"],
                ["10+", "Projects"],
                ["5+", "Stacks"],
              ].map(([num, label]) => (
                <div key={label}>
                  <div className="stat-number" style={{ fontSize: "2rem" }}>
                    {num}
                  </div>
                  <div
                    className="font-mono text-xs mt-0.5"
                    style={{ color: "var(--muted)", letterSpacing: "0.1em" }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>

            {/* Buttons — mobile stacked */}
            <div className="flex flex-col items-center gap-3">
              <button
                className="btn-cyber w-full max-w-xs"
                onClick={() => handleScroll("project")}
              >
                View Work
              </button>
              <div className="flex gap-3 w-full max-w-xs">
                <button
                  className="btn-ghost flex-1"
                  onClick={() => window.open(Resume, "_blank")}
                >
                  Download CV
                </button>
                <button
                  className="btn-ghost flex-1"
                  onClick={() => handleScroll("contact")}
                >
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ── DESKTOP: side by side ── */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="section-label mb-6">Available for work</p>
            <h1
              className="font-display font-extrabold leading-none mb-4"
              style={{
                fontSize: "clamp(3rem, 7vw, 5.5rem)",
                fontFamily: "var(--font-display)",
              }}
            >
              <span className="glitch glow" data-text="Tijani">
                Tijani
              </span>
              <br />
              <span style={{ color: "var(--white)", opacity: 0.9 }}>
                Oladele
              </span>
            </h1>
            <div
              className="flex items-center gap-3 mb-8"
              style={{ height: "2.5rem" }}
            >
              <span
                className="font-mono text-lg"
                style={{ color: "var(--cyan)", fontFamily: "var(--font-mono)" }}
              >
                {displayed}
                <span
                  style={{
                    display: "inline-block",
                    width: "2px",
                    height: "1.2em",
                    background: "var(--cyan)",
                    marginLeft: "2px",
                    verticalAlign: "middle",
                    animation: "blink 1s step-start infinite",
                  }}
                />
              </span>
            </div>
            <p
              className="text-lg leading-relaxed mb-10 max-w-lg"
              style={{
                color: "rgba(232,237,245,0.6)",
                fontFamily: "var(--font-body)",
              }}
            >
              I build secure, scalable applications and lead cross-functional
              teams. Based in{" "}
              <span style={{ color: "var(--cyan)" }}>Lagos, Nigeria</span> —
              working globally.
            </p>
            <div className="flex gap-10 mb-10">
              {[
                ["3+", "Years Exp."],
                ["10+", "Projects"],
                ["5+", "Tech Stacks"],
              ].map(([num, label]) => (
                <div key={label}>
                  <div className="stat-number">{num}</div>
                  <div
                    className="font-mono text-xs mt-1"
                    style={{ color: "var(--muted)", letterSpacing: "0.1em" }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <button
                className="btn-cyber"
                onClick={() => handleScroll("project")}
              >
                View Work
              </button>
              <button
                className="btn-ghost"
                onClick={() => window.open(Resume, "_blank")}
              >
                Download CV
              </button>
              <button
                className="btn-ghost"
                onClick={() => handleScroll("contact")}
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* Image — desktop */}
          <div className="flex justify-end">
            <div className="relative">
              <div
                className="absolute spin-slow"
                style={{
                  inset: "-24px",
                  borderRadius: "50%",
                  border: "1px dashed rgba(0,212,255,0.2)",
                }}
              />
              <div
                className="relative float"
                style={{
                  width: "320px",
                  height: "320px",
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, rgba(0,212,255,0.2), rgba(0,255,136,0.1))",
                  padding: "3px",
                }}
              >
                <img
                  src={homeImage}
                  alt="Tijani Oladele"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    objectFit: "cover",
                    background: "var(--surface)",
                  }}
                />
              </div>
              <div
                className="absolute font-mono text-xs px-3 py-2 rounded"
                style={{
                  top: "10%",
                  right: "-60px",
                  background: "var(--surface)",
                  border: "1px solid rgba(0,212,255,0.25)",
                  color: "var(--cyan)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.05em",
                  whiteSpace: "nowrap",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
                }}
              >
                ⚡ Full Stack
              </div>
              <div
                className="absolute font-mono text-xs px-3 py-2 rounded"
                style={{
                  bottom: "15%",
                  left: "-55px",
                  background: "var(--surface)",
                  border: "1px solid rgba(0,255,136,0.25)",
                  color: "var(--green)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.05em",
                  whiteSpace: "nowrap",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
                }}
              >
                🔒 Cybersec
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint — hidden on mobile */}
      <div
        className="hidden md:flex absolute bottom-8 left-1/2 flex-col items-center gap-2"
        style={{ transform: "translateX(-50%)" }}
      >
        <span
          className="font-mono text-xs"
          style={{ color: "var(--muted)", letterSpacing: "0.15em" }}
        >
          SCROLL
        </span>
        <div
          style={{
            width: "1px",
            height: "40px",
            background: "linear-gradient(var(--cyan),transparent)",
          }}
        />
      </div>

      <style>{`@keyframes blink{0%,100%{opacity:1}50%{opacity:0}}`}</style>
    </section>
  );
}
