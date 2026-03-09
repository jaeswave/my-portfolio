import { useEffect } from "react";
import AppRouters from "./router/AppRoutes";

export default function App() {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.id = "cursor";
    const ring = document.createElement("div");
    ring.id = "cursor-ring";
    document.body.append(cursor, ring);

    let rx = 0,
      ry = 0;
    const move = (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
      const animate = () => {
        rx += (e.clientX - rx) * 0.18;
        ry += (e.clientY - ry) * 0.18;
        ring.style.left = rx + "px";
        ring.style.top = ry + "px";
      };
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      cursor.remove();
      ring.remove();
    };
  }, []);

  return <AppRouters />;
}
