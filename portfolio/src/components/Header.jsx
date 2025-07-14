import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Header = ({ activeSection, navItems, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isMenuOpen ? "glassmorphism" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <span
            className="text-2xl font-bold text-white cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            Abid
          </span>
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-base font-medium transition-colors duration-200 ${
                  activeSection === item.id
                    ? "text-white"
                    : "text-secondary hover:text-white"
                }`}
              >
                <span className="text-primary">#</span>
                {item.label.substring(1)}
              </button>
            ))}
          </nav>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-secondary hover:text-white focus:outline-none z-50"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`md:hidden fixed inset-0 bg-background transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                scrollToSection(item.id);
                setIsMenuOpen(false);
              }}
              className={`text-3xl font-medium transition-colors duration-200 ${
                activeSection === item.id
                  ? "text-primary"
                  : "text-secondary hover:text-primary"
              }`}
            >
              <span className="text-primary">#</span>
              {item.label.substring(1)}
            </button>
          ))}
        </nav>
      </div>
    </motion.header>
  );
};
export default Header;
