import { useEffect, useRef } from "react";
import aboutImage from "../../../assets/aboutImage.png";

export default function About() {
  const ref = useRef(null);
  useEffect(() => {
    const els = ref.current?.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
    }, { threshold: 0.15 });
    els?.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const facts = [
    { icon: "⚙️", label: "Backend Systems",   val: "Node · Express · NestJS · Django · Rails" },
    { icon: "🎨", label: "Frontend",           val: "React · Next.js · Vue · Tailwind" },
    { icon: "🔒", label: "Cybersecurity",      val: "PenTest · Threat Modeling · Audits" },
    { icon: "☁️", label: "Cloud & DevOps",     val: "AWS · Docker · CI/CD · Jenkins" },
    { icon: "📋", label: "Project Management", val: "Agile · Scrum · Jira · Asana" },
  ];

  return (
    <section id="about" className="py-28 relative" ref={ref}
      style={{ background: "linear-gradient(180deg, var(--bg) 0%, var(--bg2) 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="section-label mb-4 reveal">01 / About</div>
        <h2 className="font-display font-extrabold mb-16 reveal"
          style={{ fontSize: "clamp(2.5rem,5vw,4rem)", fontFamily:"var(--font-display)", animationDelay:"0.1s" }}>
          Who I Am
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Image side */}
          <div className="reveal">
            <div className="relative inline-block">
              <div className="absolute -inset-3 rounded-2xl" style={{ background:"linear-gradient(135deg,rgba(0,212,255,0.15),transparent 60%,rgba(0,255,136,0.1))", filter:"blur(20px)" }} />
              <img
                src={aboutImage}
                alt="Tijani Oladele"
                className="relative rounded-2xl w-full max-w-md object-cover"
                style={{ border:"1px solid rgba(0,212,255,0.15)", filter:"contrast(1.05) brightness(0.95)" }}
              />
              {/* Corner accents */}
              {["top-0 left-0","top-0 right-0","bottom-0 left-0","bottom-0 right-0"].map((pos,i) => (
                <div key={i} className={`absolute ${pos} w-6 h-6`} style={{
                  borderTop: i<2 ? "2px solid var(--cyan)" : "none",
                  borderBottom: i>=2 ? "2px solid var(--cyan)" : "none",
                  borderLeft: i%2===0 ? "2px solid var(--cyan)" : "none",
                  borderRight: i%2===1 ? "2px solid var(--cyan)" : "none",
                }}/>
              ))}
            </div>
          </div>

          {/* Text side */}
          <div>
            <p className="text-lg leading-relaxed mb-6 reveal"
              style={{ color:"rgba(232,237,245,0.7)", fontFamily:"var(--font-body)", animationDelay:"0.15s" }}>
              I'm a <span style={{ color:"var(--cyan)" }}>tech polyglot</span> based in Lagos, Nigeria — building 
              secure, scalable systems at the intersection of engineering and leadership. My work spans 
              full-stack development, cybersecurity, and technical project delivery.
            </p>
            <p className="text-lg leading-relaxed mb-10 reveal"
              style={{ color:"rgba(232,237,245,0.7)", fontFamily:"var(--font-body)", animationDelay:"0.2s" }}>
              When I'm not in the terminal, I'm exploring astronomy, composing electronic music, 
              or designing generative art. Every dimension of my work is connected — 
              <span style={{ color:"var(--green)" }}> code, coordination, and protection.</span>
            </p>

            {/* Fact list */}
            <div className="space-y-4">
              {facts.map(({ icon, label, val }, i) => (
                <div key={label}
                  className="reveal flex items-start gap-4 p-4 rounded-xl card-border"
                  style={{ animationDelay: `${0.1*i + 0.25}s` }}>
                  <span style={{ fontSize:"1.2rem", lineHeight:1 }}>{icon}</span>
                  <div>
                    <div className="font-mono text-xs mb-1" style={{ color:"var(--cyan)", letterSpacing:"0.1em" }}>{label}</div>
                    <div className="text-sm" style={{ color:"rgba(232,237,245,0.55)", fontFamily:"var(--font-body)" }}>{val}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick stats */}
            <div className="flex gap-8 mt-10 reveal" style={{ animationDelay:"0.6s" }}>
              {[["3+","Years"], ["10+","Projects"], ["Lagos","Based"]].map(([n,l]) => (
                <div key={l} className="text-center">
                  <div className="stat-number text-2xl">{n}</div>
                  <div className="font-mono text-xs mt-1" style={{ color:"var(--muted)", letterSpacing:"0.1em" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
