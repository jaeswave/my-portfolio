import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const LINES = [
  "> Initializing JaeSwave portfolio...",
  "> Loading modules: engineering, security, leadership",
  "> System check: all clear",
  "> Welcome, visitor.",
];

export default function Landing() {
  const [lines, setLines]       = useState([]);
  const [current, setCurrent]   = useState("");
  const [lineIdx, setLineIdx]   = useState(0);
  const [charIdx, setCharIdx]   = useState(0);
  const [done, setDone]         = useState(false);
  const [exiting, setExiting]   = useState(false);
  const navigate = useNavigate();

  // Terminal typewriter
  useEffect(() => {
    if (lineIdx >= LINES.length) { setDone(true); return; }
    const target = LINES[lineIdx];
    if (charIdx < target.length) {
      const t = setTimeout(() => {
        setCurrent(target.slice(0, charIdx + 1));
        setCharIdx(c => c + 1);
      }, charIdx === 0 ? 300 : 28);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setLines(l => [...l, target]);
        setCurrent("");
        setCharIdx(0);
        setLineIdx(i => i + 1);
      }, 400);
      return () => clearTimeout(t);
    }
  }, [lineIdx, charIdx]);

  const enter = () => {
    setExiting(true);
    setTimeout(() => navigate("/home"), 800);
  };

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.section
          className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
          style={{ background: "var(--bg)", cursor: "none" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Grid */}
          <div className="absolute inset-0 grid-bg opacity-60" />
          {/* Glow */}
          <div className="absolute" style={{
            width:"500px", height:"500px", borderRadius:"50%",
            background:"radial-gradient(circle,rgba(0,212,255,0.06) 0%,transparent 70%)",
            top:"50%", left:"50%", transform:"translate(-50%,-50%)", pointerEvents:"none",
          }}/>

          <div className="relative z-10 w-full max-w-2xl px-6">
            {/* Terminal window */}
            <div className="rounded-2xl overflow-hidden" style={{
              border:"1px solid rgba(0,212,255,0.2)",
              background:"rgba(8,13,26,0.95)",
              boxShadow:"0 0 60px rgba(0,212,255,0.08)",
            }}>
              {/* Title bar */}
              <div className="flex items-center gap-2 px-5 py-3" style={{ borderBottom:"1px solid rgba(0,212,255,0.1)", background:"rgba(0,0,0,0.3)" }}>
                <span style={{ width:10, height:10, borderRadius:"50%", background:"#ff5f56" }}/>
                <span style={{ width:10, height:10, borderRadius:"50%", background:"#ffbd2e" }}/>
                <span style={{ width:10, height:10, borderRadius:"50%", background:"#27c93f" }}/>
                <span className="ml-4 font-mono text-xs" style={{ color:"var(--muted)", fontFamily:"var(--font-mono)", letterSpacing:"0.1em" }}>
                  jaeswave@portfolio ~ zsh
                </span>
              </div>
              {/* Terminal body */}
              <div className="p-8 min-h-[240px]">
                {lines.map((l, i) => (
                  <p key={i} className="font-mono text-sm mb-2" style={{
                    fontFamily:"var(--font-mono)",
                    color: l.includes("Welcome") ? "var(--green)" : "rgba(232,237,245,0.7)",
                    fontSize:"0.82rem",
                  }}>
                    {l}
                  </p>
                ))}
                {lineIdx < LINES.length && (
                  <p className="font-mono text-sm" style={{ fontFamily:"var(--font-mono)", color:"var(--cyan)", fontSize:"0.82rem" }}>
                    {current}
                    <span style={{
                      display:"inline-block", width:"8px", height:"14px",
                      background:"var(--cyan)", marginLeft:"2px", verticalAlign:"middle",
                      animation:"blink 1s step-start infinite",
                    }}/>
                  </p>
                )}
                {done && (
                  <p className="font-mono text-sm mt-2" style={{ fontFamily:"var(--font-mono)", color:"rgba(232,237,245,0.4)", fontSize:"0.82rem" }}>
                    _
                    <span style={{
                      display:"inline-block", width:"8px", height:"14px",
                      background:"rgba(232,237,245,0.4)", marginLeft:"2px", verticalAlign:"middle",
                      animation:"blink 1s step-start infinite",
                    }}/>
                  </p>
                )}
              </div>
            </div>

            {/* CTA */}
            <motion.div
              className="text-center mt-10"
              initial={{ opacity:0, y:20 }}
              animate={{ opacity: done ? 1 : 0, y: done ? 0 : 20 }}
              transition={{ duration:0.6 }}
            >
              <button className="btn-cyber text-base px-10 py-4" onClick={enter} style={{ cursor:"none" }}>
                Enter Portfolio →
              </button>
              <p className="font-mono text-xs mt-4" style={{ color:"var(--muted)", fontFamily:"var(--font-mono)", letterSpacing:"0.1em" }}>
                Tijani Oladele · Full Stack · Cybersecurity · PM
              </p>
            </motion.div>
          </div>
          <style>{`@keyframes blink{0%,100%{opacity:1}50%{opacity:0}}`}</style>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
