import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../../components/Button";
import { Link } from "react-router-dom"; // or your routing solution

const Landing = ({ onExplore }) => {
  const [typedText, setTypedText] = useState("");
  const [showLanding, setShowLanding] = useState(true);
  const fullText =
    "A journey through engineering, leadership, digital architecture, and defense";

  // Typewriter effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 40);
    return () => clearInterval(interval);
  }, []);

  const handleBegin = () => {
    setShowLanding(false);
    setTimeout(() => {
      onExplore?.(); // trigger content change if provided
    }, 3000);
  };

  return (
    <AnimatePresence>
      {showLanding && (
        <motion.section
          id="enter"
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
        >
          {/* Mature Portfolio Background */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Base Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800" />

            {/* Subtle Grid Pattern */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            {/* Geometric Accents */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-b from-indigo-900/10 to-transparent" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/3 bg-gradient-to-r from-purple-900/10 to-transparent" />

            {/* Floating Abstract Elements */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
                initial={{
                  opacity: 0,
                  x: `${10 + Math.random() * 80}%`,
                  y: `${10 + Math.random() * 80}%`,
                  rotate: Math.random() * 360,
                  width: `${100 + Math.random() * 200}px`,
                  height: `${100 + Math.random() * 200}px`,
                }}
                animate={{
                  opacity: [0, 0.1, 0],
                  rotate: 360,
                  x: `${Math.random() * 100}%`,
                  y: `${Math.random() * 100}%`,
                }}
                transition={{
                  duration: 60 + Math.random() * 120,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear",
                }}
              />
            ))}

            {/* Subtle Light Effects */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-indigo-900/10 blur-[100px]" />
            <div className="absolute bottom-1/3 -right-20 w-96 h-96 rounded-full bg-purple-900/10 blur-[100px]" />

            {/* Thin Border Accents */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>

          {/* Content */}
          <motion.div
            className="container mx-auto px-6 z-10 text-center"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <h1 className="text-5xl md:text-8xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300">
              Exploring My Professional Dimensions
            </h1>

            <h2 className="text-xl md:text-2xl mb-12 text-indigo-200 h-8">
              {typedText}
              <span className="ml-1 animate-blink">|</span>
            </h2>

            <div className="mt-16 md:mt-14">
              <Link to="/home" className="inline-block">
                <Button
                  title="Begin Exploration"
                  onClick={handleBegin} // This will still trigger first
                  className="font-bold text-lg"
                />
              </Link>
            </div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Landing;
