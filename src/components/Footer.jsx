import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiStackoverflow } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-black">
      {/* Mobile footer icons */}
      <div className="footer lg:hidden block w-full max-w-[270px] mx-auto mb-[10px] bg-black">
        <ul className="flex justify-between items-center p-0 m-0 list-none">
          <li><a className="text-slate-400 hover:text-brand hover:-translate-y-1 transition" href="https://github.com/darshn20" target="_blank" rel="noreferrer"><FaGithub className="h-5 w-5" /></a></li>
          <li><a className="text-slate-400 hover:text-brand hover:-translate-y-1 transition" href="https://www.linkedin.com/in/darshan-bhuva-805170190" target="_blank" rel="noreferrer"><FaLinkedin className="h-5 w-5" /></a></li>
          <li><a className="text-slate-400 hover:text-brand hover:-translate-y-1 transition" href="https://x.com/darshn208" target="_blank" rel="noreferrer"><FaXTwitter className="h-5 w-5" /></a></li>
          <li><a className="text-slate-400 hover:text-brand hover:-translate-y-1 transition" href="https://www.instagram.com/darshn20" target="_blank" rel="noreferrer"><FaInstagram className="h-5 w-5" /></a></li>
          <li><a className="text-slate-400 hover:text-brand hover:-translate-y-1 transition" href="https://stackoverflow.com/users/15195602/darshn20" target="_blank" rel="noreferrer"><SiStackoverflow className="h-6 w-6" /></a></li>
        </ul>
      </div>
      <div className="p-8 text-center">
        <p className="text-lightest-slate">Made with ❤️ by Darshan Bhuva</p>
      </div>
    </footer>
  );
}