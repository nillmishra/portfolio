import { useRef, useEffect } from "react";
import Avatar2 from "./Avatar2";
import "../styles/crisp-tilt.css";

export default function CrispTiltCard({ size = 270 }) {
  const rootRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    const card = cardRef.current;
    if (!root || !card) return;

    const media = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    const reduce = !!media?.matches;

    let raf = 0;
    let target = { x: 0, y: 8 };  // shadow offsets
    let current = { x: 0, y: 8 };

    const apply = () => {
      raf = 0;
      // simple spring/lerp for smooth shadow motion
      const k = 0.18; // stiffness
      const dx = target.x - current.x;
      const dy = target.y - current.y;
      current.x += dx * k;
      current.y += dy * k;

      root.style.setProperty("--sx", `${current.x.toFixed(2)}px`);
      root.style.setProperty("--sy", `${current.y.toFixed(2)}px`);

      // keep animating while difference is noticeable
      if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
        raf = requestAnimationFrame(apply);
      }
    };

    const onMove = (e) => {
      if (reduce) return;
      const rect = card.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5; // [-0.5..0.5]
      const ny = (e.clientY - rect.top) / rect.height - 0.5;

      target.x = Math.max(-1e3, Math.min(1e3, Math.round(nx * 14))); // px
      target.y = Math.max(-1e3, Math.min(1e3, Math.round(ny * 14)));

      if (!raf) raf = requestAnimationFrame(apply);
    };

    const onLeave = () => {
      target.x = 0;
      target.y = 8;
      if (!raf) raf = requestAnimationFrame(apply);
    };

    root.addEventListener("mousemove", onMove);
    root.addEventListener("mouseleave", onLeave);
    return () => {
      root.removeEventListener("mousemove", onMove);
      root.removeEventListener("mouseleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="crisp-tilt select-none"
      style={{
        "--sx": "0px",
        "--sy": "8px",
        "--avatar-size": `${size}px`,
      }}
    >
      <div ref={cardRef} className="rounded-xl crisp-tilt-card bg-white/0">
        {/* Static content wrapper (no outer translate to avoid any compositor seams) */}
        <Avatar2 />
      </div>
    </div>
  );
}