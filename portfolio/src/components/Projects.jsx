import React from "react";
import { motion } from "framer-motion";

const Projects = ({ data }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-semibold text-text-main mb-12">
        <span className="text-primary">#</span>projects
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((project, index) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="bg-background-light border border-slate-700 flex flex-col group transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-primary rounded-lg"
          >
            <div className="p-6 flex-grow flex flex-col">
              <h3 className="text-xl font-medium text-text-main mb-3">
                {project.title}
              </h3>
              <p className="text-secondary text-sm mb-4 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="bg-background text-secondary text-xs font-semibold px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-auto">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm border border-primary text-text-main hover:bg-primary/20 transition-all duration-300 rounded"
                >
                  View Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default Projects;
