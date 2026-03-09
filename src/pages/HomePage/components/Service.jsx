import { useEffect, useRef } from "react";
import { services } from "../../../data";

const SERVICE_ICONS = {
  "Full Stack Web Development": "🌐",
  "Backend Development": "⚙️",
  "Frontend Development": "🎨",
  "API Integration": "🔗",
  "Project Management": "📋",
  "Technical Consultation": "💡",
  "Cybersecurity": "🔒",
  "AI Integration": "🤖",
  "Infrastructure Development": "🏗️",
  "DevOps Practices": "♾️",
  "Cloud Computing Solutions": "☁️",
};

export default function Service() {
  const ref = useRef(null);
  useEffect(() => {
    const els = ref.current?.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(e => {
      e.forEach(en => { if (en.isIntersecting) en.target.classList.add("visible"); });
    }, { threshold: 0.1 });
    els?.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="service" className="py-28 relative" ref={ref}
      style={{ background:"linear-gradient(180deg,var(--bg2) 0%,var(--bg) 100%)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="section-label mb-4 reveal">03 / Services</div>
        <h2 className="font-display font-extrabold mb-4 reveal"
          style={{ fontSize:"clamp(2.5rem,5vw,4rem)", fontFamily:"var(--font-display)", animationDelay:"0.1s" }}>
          What I Do
        </h2>
        <p className="mb-16 reveal" style={{ color:"var(--muted)", maxWidth:"480px", fontFamily:"var(--font-body)", animationDelay:"0.15s" }}>
          Full-cycle digital services — from architecture to deployment, security to strategy.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc, i) => (
            <div key={svc.id}
              className="reveal group relative p-6 rounded-2xl transition-all duration-400 hover:-translate-y-1 cursor-default"
              style={{
                background:"var(--surface)",
                border:"1px solid rgba(0,212,255,0.08)",
                animationDelay:`${i*0.06}s`,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "rgba(0,212,255,0.25)";
                e.currentTarget.style.boxShadow = "0 0 30px rgba(0,212,255,0.07)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "rgba(0,212,255,0.08)";
                e.currentTarget.style.boxShadow = "none";
              }}>
              <div className="text-3xl mb-4" style={{ lineHeight:1 }}>{SERVICE_ICONS[svc.title] || "◆"}</div>
              <h3 className="font-display font-bold mb-3 text-base"
                style={{ color:"var(--white)", fontFamily:"var(--font-display)" }}>
                {svc.title}
              </h3>
              <p className="text-sm leading-relaxed"
                style={{ color:"rgba(232,237,245,0.5)", fontFamily:"var(--font-body)" }}>
                {svc.description}
              </p>
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden rounded-tr-2xl">
                <div className="absolute top-0 right-0 w-px h-12 transition-all duration-300 group-hover:h-8"
                  style={{ background:"linear-gradient(var(--cyan),transparent)" }}/>
                <div className="absolute top-0 right-0 h-px w-12 transition-all duration-300 group-hover:w-8"
                  style={{ background:"linear-gradient(90deg,transparent,var(--cyan))" }}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
