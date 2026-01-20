import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Leadership from "./sections/Leadership";
import Achievements from "./sections/Achievements";
import Contact from "./sections/Contact";


import CustomCursor from "./components/CustomCursor";

import Experience from "./sections/Experience";

// ... existing imports

function App() {
  return (
    <div className="text-primary min-h-screen font-sans selection:bg-white selection:text-black">
      <CustomCursor />
      <Background />
      <Navbar />

      <main className="relative z-10 w-full flex flex-col">
        <div id="hero">
          <Hero />
        </div>
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
        <Leadership />
        <Contact />
      </main>

      <footer className="relative z-10 text-center py-8 text-white/30 text-sm">
        <p>© {new Date().getFullYear()} Joshua. Built with ❤️.</p>
      </footer>
    </div>
  );
}

export default App;
