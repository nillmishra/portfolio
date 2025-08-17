import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
// import Experience from "../components/Experience.jsx"; // removed
import Skills from "../components/Skills.jsx";
import Projects from "../components/Projects.jsx";
import Contact from "../components/Contact.jsx";

export default function Home() {
  return (
    <main id="content" className="lg:px-[150px] py-0 sm:px-2 md:px-2">
      <Hero />
      <About />
      {/* <Experience /> */}
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}