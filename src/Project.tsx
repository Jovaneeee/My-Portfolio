import React from "react";
import { motion } from "framer-motion";
import julies from "./assets/julies.png";
import guidance from "./assets/guidance.png";
import depression from "./assets/depression.png";
import court from "./assets/court.png";
import image from "./assets/image.png";


type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  demo: string;
  github: string;
};

const projects: Project[] = [
  {
    title: "E commerce Website Food Ordering System",
    description: "Julie’s Bakeshop ordering system that manages orders, products, and sales with a simple and efficient user interface.",
    image: julies,
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    demo: "#",
    github: "#",
  },
  {
    title: "University Guidance Management System",
    description: "Manages student counseling records, appointments, and guidance services, helping counselors track cases and support student well-being efficiently.",
    image: guidance,
    tech: ["NodeJS", "MongoDB", "ExpressJS", "React", "Bootstrap"],
    demo: "#",
    github: "#",
  },
  {
    title: "Depression Detection System",
    description: "AI-powered system for detecting signs of depression in users.",
    image: depression,
    tech: ["Laravel", "MySQL", "Tensorlow.js", "Bootstrap", "Python"],
    demo: "#",
    github: "#",
  },
   {
    title: "Covert Court Management System",
    description: "Manages court cases, schedules, and documents for efficient legal proceedings.",
    image: court,
    tech: ["Laravel", "MySQL", "Bootstrap", "Multitenancy"],
    demo: "#",
    github: "#",
  },
   {
    title: "LYDO and SK President Profiling",
    description: "Designed a profiling system for LYDO and SK Presidents to streamline data collection and reporting processes.",
    image: image,
    tech: ["Laravel", "MySQL", "Bootstrap"],
    demo: "#",
    github: "#",
  },
];


const Project : React.FC = () => {

    return (

        <section id="projects" className="py-16 bg-gray-900 text-white">
              <div className="max-w-6xl mx-auto px-4">
                
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white inline-block after:content-[''] after:block after:w-20 after:h-1 after:bg-blue-500  after:mt-2">
                  My Projects
                </h2>
        
                {/* GRID */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projects.map((project, index) => (
                    <motion.div
                      key={index}
                      className="bg-gray-900 border border-gray-700 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
                      whileHover={{ scale: 1.05, boxShadow: "0 4px 24px #3b82f6" }}
                    >
                      {/* IMAGE */}
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-fit-cover"
                        initial={{ scale: 1, opacity: 0.7 }}
                        whileHover={{ scale: 1.04, opacity: 1 }}
                        transition={{ duration: 0.4 }}
                      />
        
                      <div className="p-5">
                        {/* TITLE */}
                        <motion.h3
                          className="text-xl font-semibold mb-2"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                        >
                          {project.title}
                        </motion.h3>
        
                        {/* DESCRIPTION */}
                        <motion.p
                          className="text-gray-400 text-sm mb-4"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                          {project.description}
                        </motion.p>
        
                        {/* TECH BADGES */}
                        <motion.div
                          className="flex flex-wrap gap-2 mb-4"
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          variants={{
                            hidden: {},
                            visible: { transition: { staggerChildren: 0.08 } }
                          }}
                        >
                          {project.tech.map((tech, i) => (
                            <motion.span
                              key={i}
                              className="bg-gray-700 border border-gray-600 text-xs px-2 py-1 rounded-md"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.4, delay: i * 0.08 }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </motion.div>
        
                        {/* BUTTONS */}
                        <div className="flex gap-3 justify-center">
                          <motion.a
                            href={project.demo}
                            target="_blank"
                            className="bg-blue-600 px-4 py-2 rounded-lg text-sm hover:bg-blue-700 inline-flex items-center align-items gap-1"
                            whileHover={{ scale: 1.08 }}
                            transition={{ duration: 0.2 }}
                          >
                            <svg width="15px" height="15px" viewBox="0 -4 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>view_simple [#815]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-260.000000, -4563.000000)" fill="#ffffff"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M216,4409.00052 C216,4410.14768 215.105,4411.07682 214,4411.07682 C212.895,4411.07682 212,4410.14768 212,4409.00052 C212,4407.85336 212.895,4406.92421 214,4406.92421 C215.105,4406.92421 216,4407.85336 216,4409.00052 M214,4412.9237 C211.011,4412.9237 208.195,4411.44744 206.399,4409.00052 C208.195,4406.55359 211.011,4405.0763 214,4405.0763 C216.989,4405.0763 219.805,4406.55359 221.601,4409.00052 C219.805,4411.44744 216.989,4412.9237 214,4412.9237 M214,4403 C209.724,4403 205.999,4405.41682 204,4409.00052 C205.999,4412.58422 209.724,4415 214,4415 C218.276,4415 222.001,4412.58422 224,4409.00052 C222.001,4405.41682 218.276,4403 214,4403" id="view_simple-[#815]"> </path> </g> </g> </g> </g></svg>
                            Live Demo
                          </motion.a>
                          <motion.a
                            href={project.github}
                            target="_blank"
                            className="outline outline-blue-700 px-4 py-2 rounded-lg fw text-sm hover:bg-blue-700"
                            whileHover={{ scale: 1.08 }}
                            transition={{ duration: 0.2 }}
                          >
                            GitHub
                          </motion.a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
        
              </div>
            </section>

    );

};


export default Project;