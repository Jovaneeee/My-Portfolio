import React from "react";
import van from "./assets/van.png";
import { motion } from "framer-motion";


const About: React.FC = () => {
    return (
            <section id="about" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 align-middle pt-16 px-6 pb-16">
             <div className="relative min-h-screen flex items-center justify-center px-6 z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} 
              transition={{ duration: 1, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
            className="flex justify-center"
          >
            <img
              src={van}
              alt="About"
              className="rounded-2xl md:w-96 shadow-xl  border border-gray-700 border-4 border-white object-cover w-full h-auto"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0}}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white inline-block after:content-[''] after:block after:w-20 after:h-1 after:bg-blue-500  after:mt-2">
              About Me
            </h2>

            <p className="text-gray-300 leading-relaxed mb-4">
              I am an IT graduate passionate about building modern and
              user-friendly web applications. I specialize in frontend
              development using React, TypeScript, and Tailwind CSS.
            </p>

            <p className="text-gray-400 leading-relaxed">
              I enjoy creating clean UI designs, interactive experiences, and
              continuously learning new technologies to improve my skills.
            </p>
          </motion.div>
          </div>
        </div>
      </section>
    );

};

export default About;