import { useEffect, useRef, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../assets/logo.png";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScroll = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const current = window.pageYOffset || document.documentElement.scrollTop;
      setHidden(current > lastScroll.current && current > 80);
      lastScroll.current = Math.max(current, 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", open);
  }, [open]);

  return (
    <header className={`${hidden ? "is-hidden" : ""}`}>
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <a href="/" className="text-xl font-bold text-brand hover:brightness-95 transition">
                <img src={Logo} alt="logo" className="h-30 w-30 mt-3"/>
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="nav-link">Home</a>
              <a href="/#projects" className="nav-link">Projects</a>
              <a href="/#contact" className="nav-link">Contact</a>
            </div>

            <button
              className="md:hidden flex items-center p-2 rounded-lg transition-colors"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <FiX className="text-brand w-6 h-6" /> : <FiMenu className="text-brand w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile overlay */}
        <div
          className={`md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-all ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
          onClick={() => setOpen(false)}
        />

        {/* Mobile drawer */}
        <div className={`md:hidden fixed right-0 top-0 w-[min(75vw,320px)] h-full z-50 bg-black shadow-xl transform transition-all duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex justify-between items-center px-6 py-4 border-b border-gray-800">
            <span className="text-lg font-semibold text-slate-200">Menu</span>
            <button onClick={() => setOpen(false)} className="p-2 text-brand hover:brightness-95 rounded-lg">
              <FiX className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col p-8 space-y-6">
            <a href="/" className="nav-link" onClick={() => setOpen(false)}>Home</a>
            <a href="/#projects" className="nav-link" onClick={() => setOpen(false)}>Projects</a>
            <a href="/#contact" className="nav-link" onClick={() => setOpen(false)}>Contact</a>
          </div>
        </div>
      </nav>
    </header>
  );
}