import { useEffect, useRef, useState } from "react";
import { projects } from "../../../data";

export default function Project() {
  const ref = useRef(null);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(e => {
      e.forEach(en => { if (en.isIntersecting) en.target.classList.add("visible"); });
    }, { threshold: 0.1 });
    els?.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const allTechs = ["All", "React", "Node.js", "Next.js", "Vue", "Python"];
  const filtered = filter === "All"
    ? projects
    : projects.filter(p => p.techStack.some(t => t.toLowerCase().includes(filter.toLowerCase())));

  return (
    <section id="project" className="py-28 grid-bg" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="section-label mb-4 reveal">04 / Projects</div>
        <h2 className="font-display font-extrabold mb-4 reveal"
          style={{ fontSize:"clamp(2.5rem,5vw,4rem)", fontFamily:"var(--font-display)", animationDelay:"0.1s" }}>
          Selected Work
        </h2>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-12 reveal" style={{ animationDelay:"0.15s" }}>
          {allTechs.map(t => (
            <button key={t} onClick={() => setFilter(t)}
              className="font-mono text-xs px-4 py-2 rounded transition-all duration-200"
              style={{
                fontFamily:"var(--font-mono)", fontSize:"0.7rem", letterSpacing:"0.08em",
                border: filter===t ? "1px solid var(--cyan)" : "1px solid rgba(255,255,255,0.1)",
                background: filter===t ? "rgba(0,212,255,0.1)" : "transparent",
                color: filter===t ? "var(--cyan)" : "var(--muted)",
                cursor:"none",
              }}>
              {t}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <div key={project.id}
              className="reveal project-card group"
              style={{ animationDelay:`${i*0.08}s` }}
              onMouseMove={e => {
                const rect = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
                e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
              }}>
              {/* Image */}
              <div className="relative overflow-hidden" style={{ height:"200px" }}>
                {project.image ? (
                  <img src={project.image} alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ filter:"brightness(0.85) contrast(1.05)" }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center"
                    style={{ background:"linear-gradient(135deg, var(--surface), rgba(0,212,255,0.05))" }}>
                    <span style={{ fontSize:"3rem" }}>⚙️</span>
                  </div>
                )}
                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background:"rgba(5,8,16,0.85)" }}>
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer"
                      className="btn-cyber text-xs" style={{ cursor:"none" }}>
                      Live Preview ↗
                    </a>
                  )}
                </div>
                {/* Number badge */}
                <div className="absolute top-3 left-3 font-mono text-xs px-2 py-1 rounded"
                  style={{ background:"rgba(5,8,16,0.8)", color:"var(--cyan)", fontFamily:"var(--font-mono)", fontSize:"0.65rem", border:"1px solid rgba(0,212,255,0.2)" }}>
                  {String(i+1).padStart(2,"0")}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display font-bold text-lg mb-2"
                  style={{ fontFamily:"var(--font-display)", color:"var(--white)" }}>
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4"
                  style={{ color:"rgba(232,237,245,0.5)", fontFamily:"var(--font-body)" }}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.slice(0,4).map((t,j) => (
                    <span key={j} className="skill-tag">{t}</span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="skill-tag" style={{ color:"var(--muted)", borderColor:"rgba(255,255,255,0.08)" }}>
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
