import React from "react";
import { motion } from "framer-motion";
import { FaUniversity } from "react-icons/fa";

const Education = ({ data }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold text-text-main mb-12">
        <span className="text-primary">#</span>education
      </h2>
      <div className="relative border-l-2 border-primary/30 ml-4">
        {data.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: index * 0.2 }}
            className="mb-10 ml-8"
          >
            <span className="absolute flex items-center justify-center w-8 h-8 bg-background-light rounded-full -left-4 ring-4 ring-background border border-primary/50">
              <FaUniversity className="w-4 h-4 text-primary" />
            </span>
            <h3 className="text-lg font-semibold text-text-main">
              {edu.institution}
            </h3>
            <p className="text-md text-primary">{edu.degree}</p>
            <time className="block mb-2 text-sm font-normal leading-none text-secondary">
              {edu.years}
            </time>
            <p className="text-base font-normal text-secondary">
              {edu.details}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default Education;
