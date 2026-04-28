import React from "react";
import { motion } from "framer-motion";
import vandel from "./assets/vandel.png";
import Header from "./components/Header";

const Home: React.FC = () => {

    return (
<section id="home" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
      <Header />
       <div className="relative min-h-screen flex items-center justify-center px-6 z-10">
          <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center md:text-left"
            >
              <h1 className="animate-pulse text-4xl md:text-5xl font-bold leading-tight">
                Jovanne Diel Jabay
              </h1>

              <p className="mt-4 text-xl md:text-2xl font-medium h-8">
                Frontend Developer
              </p>

              <div className="mb-4 mt-6 flex justify-center md:justify-start gap-4">
                <a href="#projects" className="bg-blue-600 px-4 py-2 rounded-lg text-sm hover:bg-blue-500 inline-flex items-center align-items gap-1">
                  My Projects
                </a>

                <a href="#contact" className="outline outline-blue-600 px-4 py-2 rounded-lg text-sm hover:bg-blue-600 inline-flex items-center align-items gap-1">
                  Contact Me
                </a>
              </div>
            </motion.div>

            {/* Right */}
            <motion.div
              initial={{ opacity: 0, x: 50, y: 0 }}
              animate={{
                opacity: 1,
                x: 0,
                y: [0, -12, 0]
              }}
              transition={{
                opacity: { duration: 1 },
                x: { duration: 1, ease: "easeOut" },
                y: {
                  delay: 1,
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              className="flex justify-center md:justify-space-around"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
               className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-pink-500 to-indigo-500 blur-2xl opacity-40 rounded-full"></div>

                <img
                  src={vandel}
                  alt="Hero"
                  className="relative w-72 md:w-96 md:h-96 rounded-full border-4 border-white shadow-2xl object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
    </section>
    );


};

export default Home;