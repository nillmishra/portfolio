import { useEffect, useRef } from "react";
import { PiSparkleFill } from "react-icons/pi";
import AvatarSvg from "./AvatarSvg.jsx";
import FloatingIcons from "./FloatingIcons.jsx";
import "../styles/hero-orbit.css";
import Type from "./Type";
import Resume from "../assets/resume2.pdf";

export default function Hero() {
  const stageRef = useRef(null);

  useEffect(() => {
    let rafId;
    const target = { rx: 0, ry: 0 };
    const current = { rx: 0, ry: 0 };

    const animate = () => {
      // smooth lerp for nicer feel
      current.rx += (target.rx - current.rx) * 0.12;
      current.ry += (target.ry - current.ry) * 0.12;
      if (stageRef.current) {
        stageRef.current.style.transform =
          `rotateX(${current.rx.toFixed(2)}deg) rotateY(${current.ry.toFixed(2)}deg) translateZ(0)`;
      }
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);

    const handleMove = (e) => {
      if (!stageRef.current) return;
      const rect = stageRef.current.getBoundingClientRect();

      // Cursor distance from hero center
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);

      // Direction normalized to hero size
      const nx = Math.max(-1, Math.min(1, dx / (rect.width / 2)));
      const ny = Math.max(-1, Math.min(1, dy / (rect.height / 2)));

      // Falloff so it reacts across the desktop but stays subtle far away
      const falloff = 0.15 + 0.85 * Math.exp(-dist / 600);

      const MAX_X = 12; // rotateX
      const MAX_Y = 18; // rotateY

      target.rx = -ny * MAX_X * falloff;
      target.ry =  nx * MAX_Y * falloff;
    };

    const reset = () => {
      target.rx = 0;
      target.ry = 0;
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    window.addEventListener("mousemove", handleMove, { passive: true }); // fallback
    window.addEventListener("blur", reset);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("blur", reset);
    };
  }, []);

  return (
   <section className="min-h-[calc(100vh-80px)] flex items-center px-4 sm:px-6 lg:px-8 pt-12 md:pt-22 mt-[80px] md:mt-0">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Intro */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-brand font-mono mb-5">
              <PiSparkleFill className="animate-pulse" />
              <span>Hi, my name is</span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-extrabold text-lightest-slate mb-4">
              Nill Mishra
            </h1>
            <h2 className="text-3xl sm:text-5xl font-bold text-slate mb-6 text-brand">
              <Type/>
            </h2>
            <p className="text-slate max-w-xl text-lg mx-auto md:mx-0 mb-10">
              I craft reliable, user‑friendly web experiences with 
              <br />
              performance and polish.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="#projects" className="inline-block px-6 py-3 rounded bg-brand text-black font-semibold hover:brightness-95 transition">View Projects</a>
              <a
  href={Resume}
  download="Nill_Mishra_Resume.pdf"
  aria-label="Download Nill Mishra's resume"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block px-6 py-3 rounded border border-brand text-brand hover:bg-brand/10 transition"
>
  Resume
</a>
            </div>
          </div>

          {/* Right: hero orbit */}
          <div className="flex justify-center md:justify-end w-full">
            <div className="hero-tilt">
              <div className="hero-stage" ref={stageRef}>
                <FloatingIcons />
                <div className="absolute inset-0 grid place-items-center z-[1] pointer-events-none">
                  <AvatarSvg />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}