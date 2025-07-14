import React from "react";
import { motion } from "framer-motion";

const Hero = ({ data, scrollToSection }) => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center md:text-left"
        >
          <h1 className="text-3xl sm:text-4xl font-semibold mb-4 text-text-main">
            {data.name} is a{" "}
            <span className="text-primary">Software Engineering Student</span>{" "}
            and{" "}
            <span className="block overflow-hidden whitespace-nowrap border-r-4 border-r-primary pr-2 text-primary animate-typing">
              an aspiring developer
            </span>
          </h1>
          <p className="text-secondary text-base mb-6">{data.subtitle}</p>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-6 py-2 border border-primary text-text-main font-medium hover:bg-primary/20 transition-all duration-300 transform hover:scale-105 shadow-primary-light hover:shadow-primary"
          >
            Contact me !!
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative flex justify-center items-center group mt-12 md:mt-0"
        >
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute w-80 h-80 md:w-[28rem] md:h-[28rem] rounded-3xl bg-primary/10 shadow-primary rotate-45 "
          ></motion.div>
          <img
            src={data.heroImage}
            alt={data.name}
            className="relative z-10 h-[360px] md:h-[420px] w-auto fade-out-bottom"
          />
        </motion.div>
      </div>
    </section>
  );
};
export default Hero;
