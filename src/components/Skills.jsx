export default function Skills() {
  const frontends = [
    { name: 'HTML', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/html5/html5-original.svg' },
    { name: 'CSS', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/css3/css3-original.svg' },
    { name: 'Angular Material', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/angularmaterial/angularmaterial-original.svg' },
    { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/bootstrap/bootstrap-original.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/typescript/typescript-original.svg' },
    { name: 'Tailwind', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Nextjs', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/nextjs/nextjs-original.svg' },
  ];
  const backends = [
     { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/nodejs/nodejs-original.svg' },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/python/python-original.svg' },
    { name: 'Flask', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/flask/flask-original.svg', invert: true },
    { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/express/express-original.svg', invert: true },
  ];
  const databases = [
    { name: 'MS SQL', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/mongodb/mongodb-original.svg' },
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/postgresql/postgresql-original.svg' },
    { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/mysql/mysql-original.svg' },
  ];
  const opss = [
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/git/git-original.svg' },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/docker/docker-original.svg' },
    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
    { name: 'Vercel', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/vercel/vercel-original.svg', invert: true },
    { name: 'Netlify', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/netlify/netlify-original.svg' },
    { name: 'Railway', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/railway/railway-original.svg' },
    { name: 'Github', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/github/github-original.svg' },
    { name: 'Nginx', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/nginx/nginx-original.svg' },
  ];

  const Grid = ({ data }) => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {data.map((item) => (
        <div key={item.name} className="p-4 rounded-lg shadow-md text-center flex flex-col items-center bg-light-navy/30 border border-slate-800">
          <img src={item.logo} alt={item.name}
               className={`h-10 w-10 mb-2 transition-transform duration-300 transform hover:scale-110 ${item.invert ? "invert" : ""}`} />
          <span className="font-semibold text-lightest-slate">{item.name}</span>
        </div>
      ))}
    </div>
  );

  return (
    <section id="skills" className="section-container scroll-mt-0">
      <h2 className="text-4xl font-bold text-white mb-6 mt-0">Skills</h2>

      <h4 className="text-xl font-semibold mb-4 text-brand">Front-end</h4>
      <Grid data={frontends} />

      <h4 className="text-xl font-semibold mb-4 mt-8 text-brand">Back-end</h4>
      <Grid data={backends} />

      <h4 className="text-xl font-semibold mb-4 mt-8 text-brand">Database</h4>
      <Grid data={databases} />

      <h4 className="text-xl font-semibold mb-4 mt-8 text-brand">Ops</h4>
      <Grid data={opss} />
    </section>
  );
}