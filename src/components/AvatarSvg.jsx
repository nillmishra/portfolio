import { useEffect, useRef } from "react";
import "../styles/avatar.css";

export default function AvatarSvg() {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const container = ref.current;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const q = (sel) => container.querySelector(sel);

    const me = q(".me");
    const head = q(".head");
    const hair = q(".hair");
    const shadow = q(".shadow");
    const glasses = q(".glasses");
    const eyebrowRight = q(".eyebrow-right");
    const eyebrowLeft = q(".eyebrow-left");
    const eyeRight = q(".eye-right");
    const eyeLeft = q(".eye-left");
    const eyeRight2 = q(".eye-right-2");
    const eyeLeft2 = q(".eye-left-2");
    const face = q(".face");
    const innerFace = q(".inner-face");
    const hairFront = q(".hair-front");
    const hairBack = q(".hair-back");
    const ears = container.querySelectorAll(".ear");
    const bodyGroup = q(".body"); // only move this as a group!

    if (!reduceMotion && me) {
      // intro animations
      me.animate(
        [{ opacity: 0, transform: "translateY(100%)" }, { opacity: 1, transform: "translateY(0)" }],
        { duration: 1000, easing: "cubic-bezier(0.25,0.46,0.45,0.94)", fill: "forwards", delay: 300 }
      );
      [head, hair, shadow].forEach((el) => {
        el?.animate([{ transform: "translateY(20%)" }, { transform: "translateY(0)" }],
          { duration: 900, easing: "cubic-bezier(0.25,0.46,0.45,0.94)", fill: "forwards", delay: 400 });
      });
      glasses?.animate([{ transform: "translateY(-10%)" }, { transform: "translateY(0)" }],
        { duration: 1000, easing: "cubic-bezier(0.25,0.46,0.45,0.94)", fill: "forwards", delay: 550 });
      [eyebrowRight, eyebrowLeft].forEach((el) => {
        el?.animate([{ transform: "translateY(300%)" }, { transform: "translateY(0)" }],
          { duration: 1000, easing: "cubic-bezier(0.25,0.46,0.45,0.94)", fill: "forwards" });
      });
      [eyeRight, eyeLeft].forEach((el) => el?.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 10, fill: "forwards", delay: 650 }));
      [eyeRight2, eyeLeft2].forEach((el) => el?.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 10, fill: "forwards", delay: 650 }));

      const blink = () => {
        const a = [{ opacity: 1 }, { opacity: 0, offset: 0.5 }, { opacity: 1 }];
        const b = [{ opacity: 0 }, { opacity: 1, offset: 0.5 }, { opacity: 0 }];
        [eyeRight, eyeLeft].forEach((el) => el && el.animate(a, { duration: 150, iterations: 1 }));
        [eyeRight2, eyeLeft2].forEach((el) => el && el.animate(b, { duration: 150, iterations: 1 }));
        setTimeout(blink, Math.random() * 5000 + 2000);
      };
      const blinkTimer = setTimeout(blink, 1000);

      const setTransform = (el, tx = 0, ty = 0, rot = 0) => {
        if (!el) return;
        el.style.transform = `translate(${tx}%, ${ty}%) rotate(${rot}deg)`;
      };

      const onMove = (e) => {
        // Viewport-relative move
        const x = (e.clientX / window.innerWidth) * 2 - 1;
        const y = (e.clientY / window.innerHeight) * 2 - 1;
        const moveX = Math.max(-1, Math.min(1, x)) * 8;
        const moveY = Math.max(-1, Math.min(1, y)) * 8;

        // Move ONLY .body group, not its children!
        setTransform(bodyGroup, -moveX / 7, -moveY / 7, 0);

        // Face layers for some parallax (optional)
        setTransform(face, moveX / 3.2, moveY / 3.2, 0);
        setTransform(innerFace, moveX / 4.0, moveY / 4.0, 0);
        setTransform(hairFront, moveX / 4.6, moveY / 4.6, 0);
        if (hairBack)
          hairBack.style.transform = `translate(${-moveX / 12}%, ${-moveY / 12}%) rotate(${moveX / 40}deg)`;

        ears.forEach((el, index) => {
          const direction = index === 0 ? -1 : 1;
          setTransform(el, -moveX / 8, -moveY / 8, (direction * moveX) / 18);
        });
        [eyebrowRight, eyebrowLeft].forEach((el) => {
          if (el) el.style.transform = `translateY(${moveY * 2.2}%)`;
        });

        // DO NOT transform .neck, .top, .shoulder separately! They’re grouped in .body.
      };

      const onLeave = () => {
        [face, innerFace, hairFront, hairBack, eyebrowRight, eyebrowLeft, bodyGroup].forEach((el) => {
          if (el) el.style.transform = "";
        });
        ears.forEach((el) => (el.style.transform = ""));
      };

      window.addEventListener("pointermove", onMove, { passive: true });
      window.addEventListener("mousemove", onMove, { passive: true });
      window.addEventListener("blur", onLeave);

      return () => {
        clearTimeout(blinkTimer);
        window.removeEventListener("pointermove", onMove);
        window.removeEventListener("mousemove", onMove);
        window.removeEventListener("blur", onLeave);
      };
    }
  }, []);

  return (
    <div ref={ref} className="avatar-container">
      <svg viewBox="0 10 211.73 180" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <clipPath id="background-clip">
            <path d="M39 153.73s31.57 19.71 77.26 15.21 90.18-37.23 90.36-72.33-8.82-80.28-33.59-86.29C136.84-6.57 114.13-5.82 88-2.82S34.73 11.45 16.71 48.24C-1.5 66.64-4.88 125.2 39 153.73z" fill="none" />
          </clipPath>
        </defs>

        <path className="bg" d="M39 153.73s31.57 19.71 77.26 15.21 100.18-37.23 90.36-72.33-10.51-57-35.28-63-50.22 17-76.31 20-60.12-15.88-78.32 2.51S-4.88 125.2 39 153.73z" />

        <g clipPath="url(#background-clip)">
          <g className="me">
            <g className="">
              <g className="body">
              <path className="shadow" d="M130,40c6,4,14,10,18,20s4,16,4,16-3,8-6,12-7,9-7,9-4-7-8-8.5c-4-2.5-7,6-10,7s-12,3-16,2-14-4-18-5c-4-1.5-7-2-9-5s-3-7-2-9,2-6,2-6l-5-3c-3-2.5-3,6-3,6s-4-4-6-6c-2.5-2.5-2-9,1.5-11.5s7-5,13-6.5,16-9,16-9,11-9,22-9S125,43,127,40Z" opacity="0.12" style={{ isolation: "isolate" }} />
              <path className="hair-back hair" d="M125,40c6,4,14,10,18,20s4,16,4,16-3,8-6,12-7,9-7,9-4-7-8-8.5c-4-2.5-7,6-10,7s-12,3-16,2-14-4-18-5c-4-1.5-7-2-9-5s-3-7-2-9,2-6,2-6l-5-3c-3-2.5-3,6-3,6s-4-4-6-6c-2.5-2.5-2-9,1.5-11.5s7-5,13-6.5,16-9,16-9,11-9,22-9S125,43,127,40Z" fill="#3C2A17" />
              <path className="neck" d="M114.26 143.16v-5a9.22 9.22 0 10-18.43 0v5c-15.27 2.84-24.74 15.08-24.74 27.33H139c0-12.24-9.5-24.49-24.74-27.33z" fill="#e9d0c2" />
              <path className="top" d="M112.61 160c-35.17 0-30.36-35-30.36 20.84h15.35l30-2.14c-.05-55.79 5.17-18.7-29.99-18.7z" strokeWidth="1" />
              <path className="shoulder" d="M90.82 142.87c-21 1.84-34.37 19.5-34.37 40h34.37z" />
              <path className="shoulder" d="M119.23 142.67c20.76 1.85 34 19.6 34 40.2h-34z" />
            </g>

            </g>
            

            <path className="shadow" d="M95.82 122.36h18.41v14.31s-10.5 5.54-18.41 0z" fill="#e9d0c2" />

            <g className="head">
              <g className="ear-left ear">
                <path d="M63.52 98.14c1.5-4 5.5-7.14 8.5-7.14s7 3.14 8.5 7.14c1 2.5 1 5 0 7.5-1.5 4-5.5 7.14-8.5 7.14s-7-3.14-8.5-7.14c-1-2.5-1-5 0-7.5z" fill="#e4e2d8" />
                <path d="M67.54 99.48c2.5-.5 5.5-1 7.5 0a.4.4 0 00.5-.6c-1.5-2.5-6-2-8-1.5a.3.3 0 00-.2.4c.1.2.2.2.2.3z" fill="#b5aa9a" />
              </g>
              <g className="ear-right ear">
                <path d="M144.37 98.24c-1.5-4-5.5-7.14-8.5-7.14s-7 3.14-8.5 7.14c-1 2.5-1 5 0 7.5 1.5 4 5.5 7.14 8.5 7.14s7-3.14 8.5-7.14c1-2.5 1-5 0-7.5z" fill="#e4e2d8" />
                <path d="M139.6 99.48c-2.5-.5-6.5-1-8 1.5a.4.4 0 00.5.6c2-.9 5-.5 7.5 0a.3.3 0 00.2-.4.3.3 0 00-.2-.3z" fill="#b5aa9a" />
              </g>

              <g className="face">
                <rect x="73.99" y="48.26" width="61.54" height="80.49" rx="26.08" transform="rotate(180 104.76 88.5)" fill="#f2ddd0" />
                <g className="inner-face">
                  <path className="eyebrow-right" d="M120.73 79a9 9 0 00-4-1.22 9.8 9.8 0 00-4.19.87" fill="none" stroke="#3C2A17" strokeWidth="3" />
                  <path className="eyebrow-left" d="M97.12 79.41a9.53 9.53 0 00-4-1.11 10.58 10.58 0 00-4.2.76" fill="none" stroke="#3C2A17" strokeWidth="3" />
                  <path className="mouth" d="M98 107.52s6.06 3.62 12 1.59" fill="none" stroke="#b5aa9a" strokeWidth="1.04" />
                  <g className="eyes">
                    <path className="eye-left eye" d="M89.48 87.37c-.07 2.08 1.25 3.8 2.94 3.85s3.1-1.59 3.16-3.67-1.25-3.8-2.94-3.85-3.1 1.59-3.16 3.67z" fill="#2b343b" />
                    <path className="eye-right eye" d="M113.67 87.37c-.07 2.08 1.25 3.8 2.94 3.85s3.1-1.59 3.16-3.67-1.25-3.8-2.94-3.85-3.1 1.59-3.16 3.67z" fill="#2b343b" />
                    <path className="eye-right-2 eye" d="M114.11 88a5.72 5.72 0 002.48.72 6.46 6.46 0 002.59-.45" opacity="0" fill="none" stroke="#282828" strokeWidth="1.04" />
                    <path className="eye-left-2 eye" d="M89.85 88a5.77 5.77 0 002.56.3 6.48 6.48 0 002.49-.87" fill="none" opacity="0" stroke="#282828" strokeWidth="1.04" />
                  </g>
                  <path className="nose" d="M102.39 98.13s3.09 1.55 5.78 0" fill="none" stroke="#d2c8b8" />
                  <path className="glasses" d="M133.54 81.76c-4.7-1.42-15.29-2.42-19.83-.45-5.82 2.17-3.18 1.57-8.55 1.17-5.36.4-2.74 1-8.55-1.18-7.3-2.55-15.58-.24-22.25.72v2.75c2.46.24 1.26 6.78 3.06 10.32 2.13 7.23 12.69 9.55 18.19 5.49 3.9-2 7.08-10.32 7.21-12.86 0-1.64 4.15-2.57 4.61.24.11 2.53 3.42 10.69 7.28 12.62 5.5 4 16 1.74 18.17-5.49 1.8-3.54 1.69-9.92 2.88-10.32s.74-2.67 0-2.75-1.02-.1-2.22-.26zM97.25 97.49C90.94 104.81 79 101.2 78 92.3c-.7-2.62-1 -7.3 1.27-9.12s6.88-1.87 9.23-2c11.14-.26 16.62 5.6 8.75 16.31zm35.12-5.19c-3.71 17.2-27.26 7.42-22.09-7.36 1.87-3.11 9.09-3.84 11.55-3.73 8.07-.04 12.7 1.79 10.54 11.09z" fill="#000" opacity=".58" />
                </g>

                <path className="hair-front hair" d="M130,50c-10-5-8.5-8-12-9s-10-12-19.5-5.5-8.5,8-20,9-6,20-4.5,25c0.5,1,4-1.5,8-3,2.5-0.5,5-1.5,6-2.5,1,2,1,4,1.5,8.5,3-2,9-2.5,17.6-2.5s1.5,1,2,5.5c2-0.5,6-1.5,7-2s5,0,2.5,0.5,3.5,1,5,1.5c0-3,0-7,0.5-8.5,0.5-1.5,1.5,1.5,2.5,5,2.5,1.5,5,2.5,7,2.5,0-2.5,1-5,0.5-7,0,0,2.5,3.5,2,6.5,2,3,4.5,6,4.5,-1s1.5-7.5-2.5-13.5c-4-5.5-8.5-8.5-10-9.5Z" fill="#3C2A17"></path>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}