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

          <div className="space-y-5 max-w-3xl">
            <p className="text-slate text-lg">
              I’m <span className="text-brand font-semibold">Nill Mishra</span>, an AIML engineering student
              focused on building practical tech that improves everyday life. I enjoy turning ideas into real products,
              learning fast, and collaborating in teams to deliver meaningful impact.
            </p>

            <p className="text-slate text-lg">
              My core stack spans <span className="text-brand">C, C++, JavaScript, and Python</span> with hands‑on work across{" "}
              <span className="text-brand">React.js, Next.js, Node.js, Flask</span> and databases like{" "}
              <span className="text-brand">SQL</span> and <span className="text-brand">MongoDB</span>. I’m comfortable with{" "}
              <span className="text-brand">Docker</span>, <span className="text-brand">Git/GitHub</span>, and write code with solid{" "}
              <span className="text-brand">OOP</span> foundations.
            </p>

            <p className="text-slate text-lg">
              In AI/ML, I work with tools like <span className="text-brand">TensorFlow</span> and{" "}
              <span className="text-brand">OpenCV</span>. I’m driven by performance, accessibility, and developer experience—always aiming for clean delivery and
              scalable, user‑centric solutions. I’m excited to contribute, grow, and take on opportunities where I can
              learn and ship value quickly.
            </p>
          </div>
        </div>

        {/* Right: Avatar (crisp, smooth, no seam) */}
        <div className="md:col-span-4">
          <CrispTiltCard size={270} />
        </div>
      </div>

      {/* Social links */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold text-lightest-slate text-center md:text-left">FIND ME ON</h3>
        <p className="text-slate text-center md:text-left">
          Feel free to <span className="text-brand">connect</span> with me
        </p>
        <ul className="mt-4 flex flex-wrap items-center gap-4 justify-center md:justify-start">
          <li>
            <a
              href="https://github.com/nillmishra"
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
              href="https://twitter.com/inillmishra"
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
              href="https://www.linkedin.com/in/nillotpal-mishra-955098248"
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
              href="https://www.instagram.com/nillmishra?igsh=YndmcTg1cno1eG9q"
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