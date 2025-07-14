import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import AnimatedSection from "./components/AnimatedSection";
import { portfolioData } from "./data/portfolioData";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading time
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "works", "about-me", "education", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (
          element &&
          scrollPosition >= element.offsetTop &&
          scrollPosition < element.offsetTop + element.offsetHeight
        ) {
          setActiveSection(sectionId);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-secondary">Loading Portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="font-mono bg-background text-text-main">
      <Header
        activeSection={activeSection}
        navItems={portfolioData.navItems}
        scrollToSection={scrollToSection}
      />
      <main>
        <Hero data={portfolioData.hero} scrollToSection={scrollToSection} />
        <AnimatedSection id="works" className="py-24 px-4 sm:px-6 lg:px-8">
          <Projects data={portfolioData.projects} />
        </AnimatedSection>
        <AnimatedSection id="about-me" className="py-24 px-4 sm:px-6 lg:px-8">
          <About data={portfolioData.about} />
        </AnimatedSection>
        <AnimatedSection id="education" className="py-24 px-4 sm:px-6 lg:px-8">
          <Education data={portfolioData.education} />
        </AnimatedSection>
        <AnimatedSection id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
          <Contact data={portfolioData.contact} />
        </AnimatedSection>
      </main>
      <Footer data={portfolioData} />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
