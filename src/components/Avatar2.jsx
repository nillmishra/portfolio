import { useEffect, useRef } from "react";
import "../styles/avatar2.css";

export default function Avatar2() {
  const wrapRef = useRef(null);
  const faceRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const face = faceRef.current;
    if (!wrap || !face) return;

    const svg = wrap.querySelector("svg");
    if (!svg) return;

    const media = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    const reduceMotion = !!media?.matches;

    // Smooth spring movement in user units (vector crisp)
    let raf = 0;
    let target = { x: 0, y: 0 };
    let current = { x: 0, y: 0 };

    const tick = () => {
      raf = 0;
      const k = 0.18; // spring stiffness
      current.x += (target.x - current.x) * k;
      current.y += (target.y - current.y) * k;
      face.setAttribute("transform", `translate(${current.x} ${current.y})`);

      if (Math.abs(target.x - current.x) > 0.02 || Math.abs(target.y - current.y) > 0.02) {
        raf = requestAnimationFrame(tick);
      }
    };

    const onMove = (e) => {
      if (reduceMotion) return;

      const rect = wrap.getBoundingClientRect();
      const vb = svg.viewBox?.baseVal || { width: rect.width, height: rect.height };
      const nx = (e.clientX - rect.left) / rect.width - 0.5;  // [-0.5..0.5]
      const ny = (e.clientY - rect.top) / rect.height - 0.5;

      // amplitude directly in user units (fraction of viewBox)
      const ampX = vb.width * 0.0065;  // ~0.65% of width
      const ampY = vb.height * 0.0065; // ~0.65% of height

      target.x = nx * ampX;
      target.y = ny * ampY;

      if (!raf) raf = requestAnimationFrame(tick);
    };

    const onLeave = () => {
      target.x = 0;
      target.y = 0;
      if (!raf) raf = requestAnimationFrame(tick);
    };

    wrap.addEventListener("mousemove", onMove);
    wrap.addEventListener("mouseleave", onLeave);

    return () => {
      wrap.removeEventListener("mousemove", onMove);
      wrap.removeEventListener("mouseleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={wrapRef} className="avatar2 inline-block">
      <svg
        width="217"
        height="237"
        viewBox="0 0 217 237"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        aria-label="Avatar"
      >
        <defs>
          <circle id="path-1" cx="108" cy="108" r="108" />
          <path id="path-3" d="M0,144 L0,0 L237.6,0 L237.6,144 L226.8,144 C226.8,203.646753 178.446753,252 118.8,252 C59.153247,252 10.8,203.646753 10.8,144 L10.8,144 L0,144 Z" />
          <path id="path-5" d="M90,0 C117.835151,0 140.4,22.5648486 140.4,50.4 L140.400938,55.9494825 C145.50836,56.8068094 149.4,61.2489341 149.4,66.6 L149.4,79.2 C149.4,84.6471857 145.367296,89.1524828 140.124546,89.8932318 C138.264968,107.718065 127.114,122.779595 111.600867,130.149444 L111.6,146.7 L115.2,146.7 C150.988052,146.7 180,175.711948 180,211.5 L180,219.6 L0,219.6 L0,211.5 C0,175.711948 29.0119482,146.7 64.8,146.7 L68.4,146.7 L68.4001308,130.149918 C52.8864784,122.78024 41.7350715,107.718447 39.8746409,89.8932685 C34.6327044,89.1524828 30.6,84.6471857 30.6,79.2 L30.6,66.6 C30.6,61.2485843 34.4921486,56.8062286 39.6000641,55.9493144 L39.6,50.4 C39.6,22.5648486 62.1648486,0 90,0 Z" />
          <path id="path-7" d="M140.401336,11.7639465 C156.691257,13.5869406 169.2,18.5974066 169.2,31.5692308 L169.194195,31.1796307 C192.467264,41.0099495 208.8,64.0473854 208.8,90.8995362 L208.8,99 L28.8,99 L28.8,90.8995362 C28.8,64.0473854 45.1327357,41.0099495 68.4058046,31.1796307 C68.6525649,18.4964574 81.0734584,13.568361 97.199665,11.7638345 L97.2,28.8 C97.2,40.7293506 106.870649,50.4 118.8,50.4 C130.729351,50.4 140.4,40.7293506 140.4,28.8 L140.4,28.8 Z" />
          <path id="path-9" d="M31.6060596,13.6152695 C32.5581409,22.1578223 39.8033886,28.8 48.6,28.8 C57.4237849,28.8 64.6866067,22.1167224 65.6025833,13.5360492 C65.6763017,12.8454714 64.9050687,11.7 63.9384903,11.7 C50.5338783,11.7 40.2641292,11.7 33.3781419,11.7 C32.4059551,11.7 31.5108052,12.7605992 31.6060596,13.6152695 Z" />
          <rect id="path-11" x="0" y="0" width="237.6" height="252" />
          <path id="path-13" d="M118.134982,20.9283675 C115.651186,18.3903589 112.767321,16.2361467 109.962327,14.0758953 C109.34341,13.5996978 108.714559,13.134975 108.109489,12.6406597 C107.971919,12.528329 106.562799,11.5191649 106.394222,11.147749 C105.988434,10.2542371 106.223538,10.9499625 106.27953,9.8837271 C106.350272,8.53545721 109.099576,4.72738744 107.048059,3.85410714 C106.145572,3.47000876 104.535665,4.49215737 103.669903,4.82975328 C101.976612,5.49045082 100.262549,6.05391591 98.5120609,6.53977621 C99.3507296,4.86870665 100.949799,1.52354791 97.944319,2.41887158 C95.6029101,3.11640875 93.421047,4.90977378 91.068199,5.75346159 C91.8466618,4.47736113 94.9599107,0.523140708 92.1467884,0.302102957 C91.2713941,0.233255133 88.7240809,1.87533613 87.781557,2.22561453 C84.9585007,3.27493992 82.0749374,3.95315138 79.1109992,4.48732594 C69.0328266,6.30364025 57.2475146,5.78577175 47.9231203,10.3741169 C40.7345316,13.9113248 33.6362518,19.399825 29.4835474,26.3887851 C25.4810568,33.1253031 23.9840362,40.4977576 23.1462706,48.2171688 C22.531568,53.8823181 22.4815971,59.7383087 22.7690804,65.4239915 C22.8630017,67.2868082 23.0725183,75.8737625 25.7787751,73.2732473 C27.1270871,71.9775192 27.1171531,66.7453865 27.4567146,64.9743669 C28.1325262,61.4507473 28.7830513,57.9114256 29.9098054,54.5004387 C31.8953972,48.4895405 34.2377091,45.6866929 39.1842288,41.5467645 C42.3585867,38.890386 44.5877115,35.3000323 47.625402,32.6201006 C48.9899695,31.4164715 47.9487079,31.5417866 50.1426122,31.6997139 C57.9901549,31.9735954 99.3263462,29.9465101 100.727639,30.7802331 C106.438172,37.4642093 109.032145,39.3052847 111.576147,41.2819419 C116.880892,45.4034505 119.559153,46.9800218 121.170264,53.4209169 C122.775354,59.8379568 122.325315,65.791335 124.312111,72.106311 C126.93739,73.0964515 126.882603,66.269634 126.882603,70.3374051 C127.912727,63.2175395 127.899903,59.1232077 127.849209,46.6744341 127.446733,30.4417478 118.134982,20.9283675 Z" />

          {/* clipPaths to avoid alpha mask seams */}
          <clipPath id="clip-2" clipPathUnits="userSpaceOnUse"><use xlinkHref="#path-1" /></clipPath>
          <clipPath id="clip-4" clipPathUnits="userSpaceOnUse"><use xlinkHref="#path-3" /></clipPath>
          <clipPath id="clip-6" clipPathUnits="userSpaceOnUse"><use xlinkHref="#path-5" /></clipPath>
          <clipPath id="clip-8" clipPathUnits="userSpaceOnUse"><use xlinkHref="#path-7" /></clipPath>
          <clipPath id="clip-10" clipPathUnits="userSpaceOnUse"><use xlinkHref="#path-9" /></clipPath>
          <clipPath id="clip-12" clipPathUnits="userSpaceOnUse"><use xlinkHref="#path-11" /></clipPath>
          <clipPath id="clip-14" clipPathUnits="userSpaceOnUse"><use xlinkHref="#path-13" /></clipPath>
        </defs>

        <g id="Website" fill="none" fillRule="evenodd">
          <g id="mf-avatar" transform="translate(-10, -15)">
            {/* Themed circle */}
            <g id="Circle" transform="translate(10.8, 36)">
              <use id="Circle-Background" fill="#972dc2" xlinkHref="#path-1" />
              <g id="🖍-Circle-Color" clipPath="url(#clip-2)" fill="#8a4ca8">
                <rect id="🖍Color" x="0" y="0" width="216.445361" height="216" />
              </g>
            </g>

            <g id="Avataaar" clipPath="url(#clip-4)">
              {/* Body */}
              <g id="Body" transform="translate(28.8, 32.4)">
                <use fill="#D0C6AC" xlinkHref="#path-5" />
                <g id="Skin" clipPath="url(#clip-6)" fill="#FFDBB4">
                  <g transform="translate(-28.8, 0)"><rect x="0" y="0" width="238.383871" height="220.354839" /></g>
                </g>
                <path id="Neck-Shadow" fillOpacity="0.1" fill="#000"
                  d="M39.6,84.6 C39.6,112.435151 62.1648486,135 90,135 C117.835151,135 140.4,112.435151 140.4,84.6 L140.4,84.6 L140.4,91.8 C140.4,119.635151 117.835151,142.2 90,142.2 C62.1648486,142.2 39.6,119.635151 39.6,91.8 Z" />
              </g>

              {/* Clothing */}
              <g className="clothing-wrap" transform="translate(0, 153)">
                <g className="clothing-anim" clipPath="url(#clip-8)">
                  <use id="Hoodie" fill="#B7C1DB" fillRule="evenodd" xlinkHref="#path-7" />
                  <g id="Color/Palette/Slate" fill="#293347" fillRule="evenodd">
                    <rect id="🖍Color" x="0" y="0" width="238.490722" height="99" />
                  </g>
                  <path id="Straps" fill="#F4F4F4" fillRule="evenodd"
                    d="M91.7997922,55.5650565 L91.8,99 L85.5,99 L85.4989717,52.3346251 C87.4825877,53.5136414 89.5915786,54.5944735 91.7997922,55.5650565 Z M152.101479,52.334357 L152.1,88.65 C152.1,90.389697 150.689697,91.8 148.95,91.8 C147.210303,91.8 145.8,90.389697 145.8,88.65 L145.80121,55.5646162 C148.009227,54.594073 150.118032,53.5132992 152.101479,52.334357 Z" />
                  <path id="Shadow" fillOpacity="0.16" fill="#000" fillRule="evenodd"
                    d="M155.733313,11.4514328 C169.280438,14.0134155 178.65,19.1179672 178.65,29.0769231 C178.65,46.8180086 148.916087,61.2 118.8,61.2 C88.6839126,61.2 58.95,46.8180086 58.95,29.0769231 C58.95,19.1179672 68.3195623,14.0134155 81.8666868,11.4514328 C73.6891467,14.4655041 68.4,19.534193 68.4,27.9692308 C68.4,46.3220778 93.4390843,61.2 118.8,61.2 C144.160916,61.2 169.2,46.3220778 169.2,27.9692308 C169.2,19.7104496 164.129585,14.6788022 156.241116,11.6422715 Z" />
                </g>
              </g>

              {/* Face */}
              <g className="face-wrap" transform="translate(68.4, 73.8)">
                <g className="face-parallax" ref={faceRef}>
                  {/* Eyes */}
                  <g className="eyes-wrap" transform="translate(0, 7.2)" fill="#000" fillOpacity="0.6">
                    <g className="eyes-anim">
                      <path d="M14.5441507,20.2025804 C16.2060084,16.7836572 19.9479802,14.4 24.2978223,14.4 C28.6323089,14.4 32.3632095,16.7668578 34.0338166,20.1664118 C34.5300845,21.1762779 33.8238934,22.0027335 33.1115463,21.3903205 C30.9055557,19.493805 27.7728447,18.3094095 24.2978223,18.3094095 C20.9314855,18.3094095 17.8863826,19.4208767 15.6937852,21.2144771 C14.8921136,21.8702649 14.0580911,21.202546 14.5441507,20.2025804 Z" />
                      <path d="M66.7441507,20.2025804 C68.4060084,16.7836572 72.1479802,14.4 76.4978223,14.4 C80.8323089,14.4 84.5632095,16.7668578 86.2338166,20.1664118 C86.7300845,21.1762779 86.0238934,22.0027335 85.3115463,21.3903205 C83.1055557,19.493805 79.9728447,18.3094095 76.4978223,18.3094095 C73.1314855,18.3094095 70.0863826,19.4208767 67.8937852,21.2144771 C67.0921136,21.8702649 66.2580911,21.202546 66.7441507,20.2025804 Z" />
                    </g>
                  </g>

                  {/* Nose */}
                  <g id="Nose/Default" transform="translate(25.2, 36)" fill="#000" fillOpacity="0.16">
                    <path id="Nose" d="M14.4,7.2 C14.4,11.1764502 19.2353247,14.4 25.2,14.4 L25.2,14.4 C31.1646753,14.4 36,11.1764502 36,7.2" />
                  </g>

                  {/* Mouth */}
                  <g className="mouth-wrap" transform="translate(1.8, 46.8)">
                    <g className="mouth-anim" clipPath="url(#clip-10)">
                      <use id="Mouth" fillOpacity="0.7" fill="#000" fillRule="evenodd" xlinkHref="#path-9" />
                      <path id="Teeth" fill="#FFF" fillRule="evenodd"
                        d="M39.6,1.8 L58.5,1.8 C60.9852814,1.8 63,3.81471863 63,6.3 L63,11.7 C63,14.1852814 60.9852814,16.2 58.5,16.2 L39.6,16.2 C37.1147186,16.2 35.1,14.1852814 35.1,11.7 L35.1,6.3 C35.1,3.81471863 37.1147186,1.8 39.6,1.8 Z" />
                      <g id="Tongue" fillRule="evenodd" fill="#FF4F6D">
                        <g transform="translate(34.2, 21.6)">
                          <circle cx="9.9" cy="9.9" r="9.9" />
                          <circle cx="18.9" cy="9.9" r="9.9" />
                        </g>
                      </g>
                    </g>
                  </g>

                  {/* Eyebrows */}
                  <g className="brows-anim" fill="#000" fillOpacity="0.6">
                    <path
                      d="M23.4351841,5.58911128 C18.2497998,6.28511594 10.1636382,10.8047231 10.839834,16.03603 C10.8620533,16.2072489 11.1210572,16.2606121 11.2328169,16.1176444 C13.4706637,13.2483016 30.7735176,9.03289328 37.0748406,9.91324359 C37.6515471,9.99400182 38.0322596,9.39873091 37.6389451,9.02718599 C34.2689096,5.84536884 28.0803412,4.96102342 23.4351841,5.58911128"
                      transform="translate(24.3, 10.8) rotate(5) translate(-24.3, -10.8)" />
                    <path
                      d="M76.5351841,5.58911128 C71.3497998,6.28511594 63.2636382,10.8047231 63.939834,16.03603 C63.9620533,16.2072489 64.2210572,16.2606121 64.3328169,16.1176444 C66.5706637,13.2483016 83.8735176,9.03289328 90.1748406,9.91324359 C90.7515471,9.99400182 91.1322596,9.39873091 90.7389451,9.02718599 C87.3689096,5.84536884 81.1803412,4.96102342 76.5351841,5.58911128"
                      transform="translate(77.4, 10.8) scale(-1, 1) rotate(5) translate(-77.4, -10.8)" />
                  </g>
                </g>
              </g>

              {/* Hair */}
              <g id="Top">
                <g clipPath="url(#clip-12)">
                  <g transform="translate(43, 15)">
                    <g clipPath="url(#clip-14)">
                      <use id="Short-Hair" fill="#1F3140" fillRule="evenodd" xlinkHref="#path-13" />
                      <g id="Color/Hair/Brown-Dark" fill="none" fillRule="evenodd">
                        <g transform="translate(-43.1, -15)" fill="#4A312C" id="Color">
                          <rect x="0" y="0" width="239.106977" height="252.406452" />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>

            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}