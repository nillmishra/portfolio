import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiStackoverflow } from "react-icons/si";

export default function Sidebar() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Left Social Sidebar */}
      <div className={`hidden lg:block fixed bottom-0 left-10 z-10 transition-opacity ${show ? "opacity-100" : "opacity-0 pointer-events-none"}`} data-aos="fade-up" data-aos-delay="1000">
        <ul className="flex flex-col items-center m-0 p-0 after:content-[''] after:block after:w-px after:h-24 after:bg-slate-400 dark:after:bg-slate-500">
          <li><a href="https://github.com/darshn20" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-slate-500 dark:text-slate-400 p-1 hover:text-brand hover:-translate-y-1 transition"><FaGithub className="h-5 w-5" /></a></li>
          <li><a href="https://www.linkedin.com/in/darshan-bhuva-805170190" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-slate-500 dark:text-slate-400 p-1 hover:text-brand hover:-translate-y-1 transition"><FaLinkedin className="h-5 w-5" /></a></li>
          <li><a href="https://x.com/darshn208" target="_blank" rel="noreferrer" aria-label="X" className="text-slate-500 dark:text-slate-400 p-1 hover:text-brand hover:-translate-y-1 transition"><FaXTwitter className="h-5 w-5" /></a></li>
          <li><a href="https://www.instagram.com/darshn20" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-slate-500 dark:text-slate-400 p-1 hover:text-brand hover:-translate-y-1 transition"><FaInstagram className="h-5 w-5" /></a></li>
          <li><a href="https://stackoverflow.com/users/15195602/darshn20" target="_blank" rel="noreferrer" aria-label="Stack Overflow" className="text-slate-500 dark:text-slate-400 p-1 hover:text-brand hover:-translate-y-1 transition"><SiStackoverflow className="h-6 w-6" /></a></li>
        </ul>
      </div>

      {/* Right Email Sidebar */}
      <div className={`hidden lg:block fixed bottom-0 right-10 z-10 transition-opacity ${show ? "opacity-100" : "opacity-0 pointer-events-none"}`} data-aos="fade-up" data-aos-delay="1000">
        <div className="flex flex-col items-center after:content-[''] after:block after:w-px after:h-24 after:bg-slate-400 dark:after:bg-slate-500">
          <a href="mailto:darshanbhuva57@gmail.com" className="text-slate-500 dark:text-slate-400 p-1 hover:text-brand hover:-translate-y-1 transition vertical-text">
            darshanbhuva57@gmail.com
          </a>
        </div>
      </div>
    </>
  );
}