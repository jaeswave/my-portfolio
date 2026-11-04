import { handleScroll } from "../utils";

export default function Footer() {
  return (
    <footer style={{ background:"rgba(8, 15, 24, 0.96)", borderTop:"1px solid rgba(125, 211, 252, 0.08)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="font-display font-extrabold text-lg glow"
            style={{ color:"var(--cyan)", fontFamily:"'Rubik Wet Paint',cursive" }}>
            TO
          </span>
          <p className="font-mono text-xs mt-1" style={{ color:"var(--muted)", letterSpacing:"0.05em" }}>
            Tijani Oladele · Lagos, Nigeria
          </p>
        </div>
        <div className="flex gap-6">
          {[["Home","home"],["About","about"],["Projects","project"],["Contact","contact"]].map(([l,id]) => (
            <a key={id} onClick={() => handleScroll(id)}
              className="font-mono text-xs transition-colors cursor-pointer"
              style={{ color:"var(--muted)", letterSpacing:"0.08em", fontFamily:"var(--font-mono)" }}
              onMouseEnter={e => e.target.style.color="var(--cyan)"}
              onMouseLeave={e => e.target.style.color="var(--muted)"}>
              {l}
            </a>
          ))}
        </div>
        <p className="font-mono text-xs" style={{ color:"var(--muted)", fontFamily:"var(--font-mono)" }}>
          © {new Date().getFullYear()} · Built with React & Tailwind
        </p>
      </div>
    </footer>
  );
}
