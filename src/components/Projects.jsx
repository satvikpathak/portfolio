import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div className="text-center">
        <motion.p
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl text-neutral-500"
        >
        </motion.p>
      </div>
      { 
      <div>
        {PROJECTS.map((project, index) => (
  <div key={index} className="flex flex-wrap mb-8 lg:justify-center">
    <motion.div
      whileInView={{ x: 0, opacity: 1 }}
      initial={{ x: -100, opacity: 0 }}
      transition={{ duration: 1 }}
      className="lg:w-1/4"
    >
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        <img
          src={project.image}
          width={150}
          height={150}
          alt={project.title}
          className="rounded mb-6 lg:w-1/2 w-full"
        />
      </a>
    </motion.div>
    <motion.div
      whileInView={{ x: 0, opacity: 1 }}
      initial={{ x: 100, opacity: 0 }}
      transition={{ duration: 1 }}
      className="w-full max-w-xl lg:w-3/4"
    >
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        <h6 className="mb-2 font-semibold">{project.title}</h6>
      </a>
      <p className="text-neutral-400 mb-4">{project.description}</p>
      {project.technologies.map((tech, index) => (
        <span
          key={index}
          className="mr-2 rounded bg-neutral-900 px-2 py-1 text-small font-medium text-purple-900"
        >
          {tech}
        </span>
      ))}
    </motion.div>
  </div>
))}

      </div>
      }
    </div>
  );
};

export default Projects;
