import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Research from "./sections/Research";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Achievements from "./sections/Achievements";
import Leadership from "./sections/Leadership";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="text-stone-900 min-h-screen font-sans bg-[#f2f0ea]">
      <Background />
      <Navbar />

      <main className="relative z-10 w-full flex flex-col">
        <div id="hero">
          <Hero />
        </div>
        <About />
        <Research />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Leadership />
        <Contact />
      </main>

      <footer className="relative z-10 border-t border-[#dedbd2] py-12 px-5 sm:px-8 bg-[#f2f0ea] text-xs font-mono text-stone-500">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-600" />
            <span className="text-stone-800 font-semibold uppercase tracking-wider">
              Joshua Vinu Koshy
            </span>
            <span className="text-stone-400">•</span>
            <span>Stuttgart, Germany</span>
          </div>
          <p>© {new Date().getFullYear()} Joshua Vinu Koshy</p>
        </div>
      </footer>
    </div>
  );
}

export default App;