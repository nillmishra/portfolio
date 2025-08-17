export default function About() {
  return (
    <section
      id="about-me"
      className="max-w-6xl mx-auto px-4 py-12 md:py-16 scroll-mt-28"
    >
      <h2 className="section-title mb-6" data-aos="fade-up" data-aos-delay="100">
        About Me
      </h2>

      <div className="max-w-3xl">
        <p className="text-slate text-lg mb-4" data-aos="fade-up" data-aos-delay="200">
          Hi there! I’m Nill Mishra, a full‑stack developer specializing in .NET, Angular, and SQL Server.
          I love building efficient web applications, managing databases, and shipping reliable deployments.
        </p>
        <p className="text-slate text-lg" data-aos="fade-up" data-aos-delay="250">
          I’m always sharpening my skills and bringing energy to every project. I care about scalable,
          user‑centric experiences and clean delivery with modern tooling.
        </p>
      </div>
    </section>
  );
}