import { useState, useRef, useEffect } from "react";
import { handleFormSubmit } from "../../../services/email/email";

export default function Contact() {
  const [formData, setFormData] = useState({ name:"", email:"", message:"" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const els = ref.current?.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(e => {
      e.forEach(en => { if (en.isIntersecting) en.target.classList.add("visible"); });
    }, { threshold: 0.1 });
    els?.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = e => { e.preventDefault(); handleFormSubmit(formData, setIsSubmitting, setFormData); };

  const contacts = [
    { icon:"✉️", label:"Email",    val:"oladeletijani89@gmail.com",  href:"mailto:oladeletijani89@gmail.com" },
    { icon:"📞", label:"Phone",    val:"+234 802 244 0045",          href:"tel:+2348022440045" },
    { icon:"📍", label:"Location", val:"Lagos, Nigeria",             href:null },
  ];

  return (
    <section id="contact" className="py-28 relative" ref={ref}
      style={{ background:"linear-gradient(180deg,var(--bg) 0%,var(--bg2) 100%)" }}>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2"
        style={{ width:"600px", height:"300px", borderRadius:"50%",
          background:"radial-gradient(ellipse,rgba(142,245,209,0.07) 0%,transparent 70%)",
          pointerEvents:"none" }}/>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="section-label mb-4 reveal">05 / Contact</div>
        <h2 className="font-display font-extrabold mb-4 reveal"
          style={{ fontSize:"clamp(2.5rem,5vw,4rem)", fontFamily:"var(--font-display)", animationDelay:"0.1s" }}>
          Let’s build something remarkable
        </h2>
        <p className="mb-16 reveal" style={{ color:"var(--muted)", maxWidth:"520px", fontFamily:"var(--font-body)", animationDelay:"0.15s" }}>
          Open to full-time roles, freelance partnerships, product consulting, and technical collaborations.
        </p>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <div className="space-y-5 mb-10">
              {contacts.map(({ icon, label, val, href }) => (
                <div key={label} className="reveal card-border p-5 flex items-center gap-5" style={{ animationDelay:"0.2s" }}>
                  <span style={{ fontSize:"1.5rem" }}>{icon}</span>
                  <div>
                    <div className="font-mono text-xs mb-0.5" style={{ color:"var(--cyan)", letterSpacing:"0.1em" }}>{label}</div>
                    {href ? (
                      <a href={href} className="text-sm hover:underline transition-colors"
                        style={{ color:"rgba(232,237,245,0.8)", fontFamily:"var(--font-body)", cursor:"none" }}>
                        {val}
                      </a>
                    ) : (
                      <span className="text-sm" style={{ color:"rgba(232,237,245,0.8)", fontFamily:"var(--font-body)" }}>{val}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal" style={{ animationDelay:"0.35s" }}>
              <div className="font-mono text-xs mb-4" style={{ color:"var(--muted)", letterSpacing:"0.15em" }}>FIND ME ONLINE</div>
              <div className="flex flex-wrap gap-4">
                {[ ["GitHub","https://github.com/jaeswave"],["LinkedIn","https://www.linkedin.com"],["X / Twitter","https://x.com"] ].map(([name, url]) => (
                  <a key={name} href={url} target="_blank" rel="noopener noreferrer"
                    className="btn-ghost text-xs" style={{ cursor:"none", padding:"0.55rem 1rem" }}>
                    {name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="reveal premium-panel p-6 rounded-3xl" style={{ animationDelay:"0.25s" }}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label>Your Name</label>
                <input type="text" name="name" placeholder="e.g. John Doe"
                  value={formData.name} onChange={handleChange} required />
              </div>
              <div>
                <label>Email Address</label>
                <input type="email" name="email" placeholder="you@example.com"
                  value={formData.email} onChange={handleChange} required />
              </div>
              <div>
                <label>Message</label>
                <textarea name="message" rows="5" placeholder="Tell me about your project..."
                  value={formData.message} onChange={handleChange} required
                  style={{ resize:"vertical", minHeight:"120px" }} />
              </div>
              <button type="submit" disabled={isSubmitting}
                className="btn-cyber w-full" style={{ cursor:"none" }}>
                {isSubmitting ? "Transmitting..." : "Send Message →"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
