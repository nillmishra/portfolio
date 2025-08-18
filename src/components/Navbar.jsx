import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
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

  const closeMenu = () => setOpen(false);

  return (
    <header className={hidden ? "is-hidden" : ""}>
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link
                to="/"
                aria-label="Go to home"
                className="text-xl font-bold text-brand hover:brightness-95 transition inline-flex items-center"
                onClick={closeMenu}
              >
                <img src={Logo} alt="Logo" className="h-30 w-30 mt-3" />
              </Link>
            </div>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="nav-link">Home</Link>
              <a href="/#about-me" className="nav-link">About Me</a>
              <a href="/#skills" className="nav-link">Skills</a>
              <a href="/#projects" className="nav-link">Projects</a>
              <a href="/#contact" className="nav-link">Contact</a>
            </div>

            {/* Mobile menu button */}
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
          onClick={closeMenu}
        />

        {/* Mobile drawer */}
        <div
          className={`md:hidden fixed right-0 top-0 w-[min(75vw,320px)] h-full z-50 bg-black shadow-xl transform transition-all duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center px-6 py-4 border-b border-gray-800">
            <span className="text-lg font-semibold text-slate-200">Menu</span>
            <button onClick={closeMenu} className="p-2 text-brand hover:brightness-95 rounded-lg" aria-label="Close menu">
              <FiX className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col p-8 space-y-6">
            <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
            <a href="/#about-me" className="nav-link" onClick={closeMenu}>About Me</a>
            <a href="/#skills" className="nav-link" onClick={closeMenu}>Skills</a>
            <a href="/#projects" className="nav-link" onClick={closeMenu}>Projects</a>
            <a href="/#contact" className="nav-link" onClick={closeMenu}>Contact</a>
          </div>
        </div>
      </nav>
    </header>
  );
}