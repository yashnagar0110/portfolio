import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Hero from "../components/Hero";
import Skill from "../components/Skill/Skill";

export default function Index() {
  return (
    <div>
        <Header />
        <Hero />
        <About />
        <Skill />
        <Projects />
        <Education />
        <Contact />
        <Footer />
    </div>
  );
}