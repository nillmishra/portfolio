import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="section-container">
      <h2 className="section-title" data-aos="fade-up">Things I've worked on</h2>

      <div className="space-y-24">
        {projects.map((project) => (
          <div key={project.title} className="relative grid md:grid-cols-12 gap-4 items-center">
            <div className="md:col-span-7 relative" data-aos={project.aosImage}>
              <div className="relative h-[300px] rounded overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} project image`}
                  loading="lazy"
                  className="w-full h-full object-cover brightness-50 hover:brightness-100 transition-all duration-300"
                />
              </div>
            </div>
            <div className="md:col-span-5 md:pl-6" data-aos="fade-up">
              <p className="text-brand font-mono mb-2">Featured Project</p>
              <h3 className="text-2xl font-bold text-lightest-slate">{project.title}</h3>
              <div className="p-6 rounded-lg shadow-xl mb-3 bg-light-navy/30 border border-slate-800">
                <ul className="list-disc ml-4 mt-2">
                  {project.description.map((d, i) => (
                    <li key={i} className="text-slate">{d}</li>
                  ))}
                </ul>
              </div>
              <ul className="flex flex-wrap gap-3 text-sm font-mono text-slate">
                {project.techStack.map((t) => <li key={t}>{t}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}