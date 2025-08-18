import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiStackoverflow } from "react-icons/si";

export default function Sidebar() {
  return (
    <>
      <div className="hidden lg:block fixed bottom-0 left-10 z-10">
        <ul className="flex flex-col items-center m-0 p-0 after:content-[''] after:block after:w-px after:h-24 after:bg-slate-500">
          <li><a href="https://github.com/nillmishra" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-slate-400 p-1 hover:text-brand hover:-translate-y-1 transition"><FaGithub className="h-5 w-5" /></a></li>
          <li><a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-slate-400 p-1 hover:text-brand hover:-translate-y-1 transition"><FaLinkedin className="h-5 w-5" /></a></li>
          <li><a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X" className="text-slate-400 p-1 hover:text-brand hover:-translate-y-1 transition"><FaXTwitter className="h-5 w-5" /></a></li>
          <li><a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-slate-400 p-1 hover:text-brand hover:-translate-y-1 transition"><FaInstagram className="h-5 w-5" /></a></li>
          <li><a href="https://stackoverflow.com" target="_blank" rel="noreferrer" aria-label="Stack Overflow" className="text-slate-400 p-1 hover:text-brand hover:-translate-y-1 transition"><SiStackoverflow className="h-6 w-6" /></a></li>
        </ul>
      </div>

      <div className="hidden lg:block fixed bottom-0 right-10 z-10">
        <div className="flex flex-col items-center after:content-[''] after:block after:w-px after:h-24 after:bg-slate-500">
          <a href="mailto:your@email.com" className="text-slate-400 p-1 hover:text-brand hover:-translate-y-1 transition vertical-text">
            inillmishra09@gmail.com
          </a>
        </div>
      </div>
    </>
  );
}