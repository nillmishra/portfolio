import AvatarSvg from "./AvatarSvg.jsx";

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-80px)] flex items-center px-4 sm:px-6 lg:px-8 pt-12 md:pt-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <p className="text-brand font-mono mb-5">Hi, my name is</p>
            <h1 className="text-5xl sm:text-7xl font-extrabold text-lightest-slate mb-4">Nill Mishra</h1>
            <h2 className="text-3xl sm:text-5xl font-bold text-slate mb-6">Building the web, better.</h2>
            <p className="text-slate max-w-xl text-lg mx-auto md:mx-0 mb-10">
              I craft reliable, user‑friendly web experiences with performance and polish.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="#projects" className="inline-block px-6 py-3 rounded bg-brand text-black font-semibold hover:brightness-95 transition">View Projects</a>
              <a href="#contact" className="inline-block px-6 py-3 rounded border border-brand text-brand hover:bg-brand/10 transition">Get In Touch</a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end w-full">
            <AvatarSvg />
          </div>
        </div>
      </div>
    </section>
  );
}