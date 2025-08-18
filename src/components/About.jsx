import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import CrispTiltCard from "../components/CrispTiltCard";

export default function About() {
  return (
    <section id="about-me" className="section-container scroll-mt-15">
      <div className="grid md:grid-cols-12 items-center gap-10">
        {/* Left: Text */}
        <div className="md:col-span-8">
          <h2 className="section-title mb-4">
            LET ME <span className="text-brand">INTRODUCE</span> MYSELF
          </h2>

          text

          <div className="space-y-5 max-w-3xl">
            <p className="text-slate text-lg">
              Hi! I’m <span className="text-brand font-semibold">Nill Mishra</span>, a full‑stack developer
              specializing in <span className="text-brand">.NET, Angular, and SQL Server</span>.
              I love building efficient, dependable web apps and clean deployments.
            </p>

            <p className="text-slate text-lg">
              I fell in love with programming and I keep learning every day. I’m fluent in
              <i> <b className="text-brand"> C++, JavaScript, and Go</b> </i>.
              My interests include building new <b className="text-brand">Web Technologies & Products</b> and
              exploring <b className="text-brand">Blockchain</b>.
            </p>

            <p className="text-slate text-lg">
              Whenever possible, I apply my passion for developing with <b className="text-brand">Node.js</b> and
              <i> <b className="text-brand"> modern JavaScript libraries/frameworks</b> </i> like
              <i> <b className="text-brand"> React.js</b> </i> and <i> <b className="text-brand"> Next.js</b> </i>.
            </p>

            <p className="text-slate text-lg">
              I focus on performance, accessibility, developer experience, and shipping scalable,
              user‑centric solutions with modern tooling.
            </p>
          </div>
        </div>

        {/* Right: Avatar (crisp, smooth, no seam) */}
        <div className="md:col-span-4">
          <CrispTiltCard size={270} />
        </div>
      </div>

      text

      {/* Social links */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold text-lightest-slate text-center md:text-left">FIND ME ON</h3>
        <p className="text-slate text-center md:text-left">
          Feel free to <span className="text-brand">connect</span> with me
        </p>
        <ul className="mt-4 flex flex-wrap items-center gap-4 justify-center md:justify-start">
          <li>
            <a
              href="https://github.com/yourhandle"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-slate-300 hover:text-brand transition transform hover:-translate-y-1 text-2xl p-2"
            >
              <AiFillGithub />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/yourhandle"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="text-slate-300 hover:text-brand transition transform hover:-translate-y-1 text-2xl p-2"
            >
              <AiOutlineTwitter />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/yourhandle"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-slate-300 hover:text-brand transition transform hover:-translate-y-1 text-2xl p-2"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/yourhandle"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="text-slate-300 hover:text-brand transition transform hover:-translate-y-1 text-2xl p-2"
            >
              <AiFillInstagram />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}