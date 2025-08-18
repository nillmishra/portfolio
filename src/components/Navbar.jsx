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
    return () => document.body.classList.remove("no-scroll");
  }, [open]);

  const closeMenu = () => setOpen(false);

  // Only show the underline on md+ (desktop)
  const underline =
    "nav-link relative rounded-lg md:after:content-[''] md:after:absolute md:after:left-0 md:after:-bottom-1 md:after:h-[1.5px] md:after:w-0 md:after:bg-brand md:after:transition-[width] md:after:duration-200 hover:md:after:w-full focus-visible:md:after:w-full";

  return (
    <header className={hidden ? "is-hidden" : ""}>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur border-b border-slate-800">
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
              <Link to="/" className={underline}>Home</Link>
              <a href="/#about-me" className={underline}>About Me</a>
              <a href="/#skills" className={underline}>Skills</a>
              <a href="/#projects" className={underline}>Projects</a>
              <a href="/#contact" className={underline}>Contact</a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden flex items-center p-2 rounded-lg transition-colors"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? (
                <FiX className="text-brand w-6 h-6" />
              ) : (
                <FiMenu className="text-brand w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile layer (no full-screen blur or black) */}
      <div
        className={`md:hidden fixed inset-0 z-[90] ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div className="h-full w-full flex justify-end">
          {/* Transparent click-catcher to close when tapping outside the drawer */}
          <button
            className="flex-1 h-full bg-transparent"
            onClick={closeMenu}
            aria-label="Close menu"
            tabIndex={-1}
          />
          {/* Drawer: only this area is dark + blurred */}
          <aside
            className={`h-full w-[min(75vw,320px)] transform transition-transform duration-300 
              ${open ? "translate-x-0" : "translate-x-full"}
              bg-black/60 backdrop-blur-xl border-l border-slate-800 shadow-2xl
            `}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile menu"
          >
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-800">
              <span className="text-lg font-semibold text-slate-200">Menu</span>
              <button
                onClick={closeMenu}
                className="p-2 text-brand hover:brightness-95 rounded-lg"
                aria-label="Close menu"
              >
                <FiX className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col p-8 space-y-6">
              {/* No underline class on mobile items */}
              <Link to="/" className="text-brand font-medium" onClick={closeMenu}>
                Home
              </Link>
              <a href="/#about-me" className="text-brand font-medium" onClick={closeMenu}>
                About Me
              </a>
              <a href="/#skills" className="text-brand font-medium" onClick={closeMenu}>
                Skills
              </a>
              <a href="/#projects" className="text-brand font-medium" onClick={closeMenu}>
                Projects
              </a>
              <a href="/#contact" className="text-brand font-medium" onClick={closeMenu}>
                Contact
              </a>
            </div>
          </aside>
        </div>
      </div>
    </header>
  );
}