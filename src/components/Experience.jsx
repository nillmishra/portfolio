export default function Experience() {
  const items = [
    {
      role: "Software Engineer",
      company: "Fibre2Fashion",
      url: "https://www.fibre2fashion.com",
      period: "January 2024 - Present",
      bullets: [
        "Designed and implemented a robust backend webhook for in-app purchases for Android, reducing transaction disputes by 20%.",
        "Developed RESTful APIs optimized for large datasets, enhancing data accessibility and system responsiveness.",
      ],
    },
    {
      role: "Software Engineer",
      company: "Maruti Tech labs",
      url: "https://www.marutitech.com",
      period: "December 2021 - December 2023",
      bullets: [
        "Crafted a comprehensive project solution using Angular, .NET Core, and SQL Server, increasing efficiency by 40%.",
        "Led full project lifecycle: development, deployment, database, and client communication.",
        "Set up CI/CD pipelines for efficient and error-free updates.",
        "Implemented modular architecture to decouple front/back-end for better maintainability.",
      ],
    },
  ];

  return (
    <section id="experience" className="section-container">
      <h2 className="section-title" data-aos="fade-up">Experience</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div data-aos="fade-up" data-aos-duration="800">
          <h3 className="text-2xl font-semibold mb-4">Experience</h3>
          {items.map((job) => (
            <div key={job.company} className="p-6 rounded-lg shadow-md bg-light-navy/30 border border-slate-800 mb-6">
              <h4 className="font-semibold text-lightest-slate">{job.role}</h4>
              <p className="text-slate">
                <a className="text-brand hover:underline" href={job.url} target="_blank" rel="noreferrer">
                  {job.company}
                </a> • {job.period}
              </p>
              <ul className="list-disc ml-4 mt-2 text-slate">
                {job.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}