import React from "react";

const Hero = ({ data, scrollToSection }) => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl font-semibold mb-4 text-text-main">
            {data.name} is a <span className="text-primary">Software Engineering Student</span>{" "}
            and{" "}
            <span className="block overflow-hidden whitespace-nowrap border-r-4 border-r-primary pr-2 text-primary animate-typing">
              and an aspiring developer
            </span>
          </h1>
          <p className="text-secondary text-base mb-6">{data.subtitle}</p>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-6 py-2 border border-primary text-text-main font-medium hover:bg-primary/20 transition-all duration-300 transform hover:scale-105 shadow-primary-light hover:shadow-primary"
          >
            Contact me !!
          </button>
        </div>
        <div className="relative flex justify-center group animate-float">
          <img
            src={data.heroImage}
            alt="Elias"
            className="z-10 max-w-sm w-full rounded-full"
          />
          <div className="absolute inset-0 rounded-full bg-primary/10 shadow-primary animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
