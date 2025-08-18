import { projects } from "../data/projects";
import { FaGithub } from "react-icons/fa";
import { SiVercel } from "react-icons/si";

export default function Projects() {
  return (
    <section id="projects" className="section-container">
      <h2 className="section-title text-brand">Things I've worked on</h2>

      <div className="space-y-24">
        {projects.map((project) => (
          <div key={project.title} className="relative grid md:grid-cols-12 gap-4 items-center">
            {/* Left: image + buttons */}
            <div className="md:col-span-7 relative">
              <div className="relative h-[300px] rounded overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} project image`}
                  loading="lazy"
                  className="w-full h-full object-cover brightness-80 hover:brightness-100 transition-all duration-300"
                />
              </div>

              {/* Action buttons under image */}
              <div className="mt-3 flex flex-wrap gap-3">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded bg-brand text-black font-medium px-4 py-2 hover:brightness-95 transition"
                    aria-label={`Open live demo of ${project.title}`}
                  >
                    <SiVercel className="h-4 w-4" />
                    <span>Demo</span>
                  </a>
                )}
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded border border-brand text-brand px-4 py-2 hover:bg-brand/10 transition"
                    aria-label={`Open source code of ${project.title} on GitHub`}
                  >
                    <FaGithub className="h-4 w-4" />
                    <span>Code</span>
                  </a>
                )}
              </div>
            </div>

            {/* Right: content */}
            <div className="md:col-span-5 md:pl-6">
              <p className="text-brand font-mono mb-2">Featured Project</p>
              <h3 className="text-2xl font-bold text-lightest-slate mb-4">{project.title}</h3>
              <div className="p-6 rounded-lg shadow-xl mb-3 bg-light-navy/30 border border-slate-800">
                <ul className="list-disc ml-4 mt-2">
                  {project.description.map((d, i) => (
                    <li key={i} className="text-slate">{d}</li>
                  ))}
                </ul>
              </div>
              <ul className="flex flex-wrap gap-3 text-sm font-mono text-brand">
                {project.techStack.map((t) => <li key={t}>{t}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}