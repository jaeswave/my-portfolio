import { useEffect, useRef } from "react";
import { skills } from "../../../data/skillsData";

const ICONS = {
  "HTML":"🌐","CSS":"🎨","JavaScript":"⚡","TypeScript":"📘","Python":"🐍","Ruby on Rails":"💎",
  "React":"⚛️","Vue":"💚","Node.js":"🟢","Next.js":"▲","Nest.js":"🔴","Django":"🎯",
  "Tailwind CSS":"🌊","Bootstrap":"🅱️","Redux":"🔄","Axios":"📡","MongoDB":"🍃",
  "PostgreSQL":"🐘","Redis":"🔴","MySQL":"🐬","Docker":"🐳","AWS":"☁️","CI/CD":"🔁",
  "Jenkins":"⚙️","Git":"📌","GitHub":"🐙","Jira":"📋","Trello":"📌","Asana":"🗂️","Slack":"💬",
  "GraphQL":"🔮","REST APIs":"🔗","WebSockets":"🔌","Network Security":"🛡️",
  "Penetration Testing":"🔍","Secure Coding":"🔐",
};

export default function Skills() {
  const ref = useRef(null);
  useEffect(() => {
    const els = ref.current?.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(e => {
      e.forEach(en => { if (en.isIntersecting) en.target.classList.add("visible"); });
    }, { threshold: 0.1 });
    els?.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const colors = [
    { bg:"rgba(0,212,255,0.07)", border:"rgba(0,212,255,0.2)", hdr:"var(--cyan)" },
    { bg:"rgba(0,255,136,0.07)", border:"rgba(0,255,136,0.2)", hdr:"var(--green)" },
    { bg:"rgba(255,107,53,0.07)", border:"rgba(255,107,53,0.2)", hdr:"var(--orange)" },
    { bg:"rgba(180,100,255,0.07)", border:"rgba(180,100,255,0.2)", hdr:"#b464ff" },
    { bg:"rgba(255,200,0,0.07)", border:"rgba(255,200,0,0.2)", hdr:"#ffc800" },
  ];

  return (
    <section id="skills" className="py-28 grid-bg" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="section-label mb-4 reveal">02 / Skills</div>
        <h2 className="font-display font-extrabold mb-4 reveal"
          style={{ fontSize:"clamp(2.5rem,5vw,4rem)", fontFamily:"var(--font-display)", animationDelay:"0.1s" }}>
          Tech Arsenal
        </h2>
        <p className="mb-16 reveal" style={{ color:"var(--muted)", fontFamily:"var(--font-body)", maxWidth:"480px", animationDelay:"0.15s" }}>
          Languages, frameworks, tools & platforms I deploy every day.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((cat, i) => {
            const c = colors[i % colors.length];
            return (
              <div key={cat.title}
                className="reveal rounded-2xl p-6 group transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: c.bg, border:`1px solid ${c.border}`,
                  animationDelay:`${i*0.08}s`,
                  backdropFilter:"blur(12px)",
                }}>
                <h3 className="font-display font-bold text-lg mb-5"
                  style={{ color: c.hdr, fontFamily:"var(--font-display)" }}>
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map(skill => (
                    <span key={skill.name}
                      className="flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded transition-all duration-200 hover:scale-105"
                      style={{
                        fontFamily:"var(--font-mono)", fontSize:"0.68rem",
                        background:"rgba(0,0,0,0.3)",
                        border:"1px solid rgba(255,255,255,0.07)",
                        color:"rgba(232,237,245,0.8)",
                        cursor:"default",
                      }}>
                      <span style={{ fontSize:"0.85rem" }}>{ICONS[skill.name] || "◆"}</span>
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
