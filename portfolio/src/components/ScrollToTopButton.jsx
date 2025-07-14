import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.pageYOffset > 300);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 p-3 rounded-full bg-primary/80 text-white shadow-lg hover:bg-primary backdrop-blur-sm transition-all duration-300 transform hover:scale-110 ${
        isVisible
          ? "opacity-100"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      aria-label="Go to top"
    >
      <FaArrowUp />
    </button>
  );
};
export default ScrollToTopButton;
