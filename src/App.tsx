import { useState } from "react";
import {motion} from "framer-motion";


type SkillProps = {
  name: string;
  level: number;
};


const Skill: React.FC<SkillProps> = ({ name, level }) => {
  const getColor = () => {
    switch (name.toLowerCase()) {
      case "reactjs":
        return "from-cyan-400 to-blue-500";
      case "nodejs":
        return "from-green-400 to-green-600";
      case "mongodb":
        return "from-green-500 to-emerald-700";
      case "mysql":
        return "from-blue-400 to-blue-700";
      case "laravel":
        return "from-red-500 to-red-700";
      case "tailwind css":
        return "from-sky-400 to-cyan-500";
      case "bootstrap":
        return "from-purple-500 to-indigo-600";
      case "git & github":
        return "from-gray-400 to-gray-700";
      default:
        return "from-pink-500 to-indigo-500";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="flex justify-between mb-1">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-gray-400">{level}%</span>
      </div>
      <motion.div
        className="w-full bg-gray-700 rounded-full h-3"
        initial={{ backgroundColor: "#374151" }}
        whileHover={{ scale: 1.03, boxShadow: "0 0 8px #60a5fa" }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className={`bg-gradient-to-r ${getColor()} h-3 rounded-full transition-all duration-700`}
          style={{ width: `${level}%` }}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </motion.div>
    </motion.div>
  );
};


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
    image: "../src/assets/julies.png",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    demo: "#",
    github: "#",
  },
  {
    title: "University Guidance Management System",
    description: "Manages student counseling records, appointments, and guidance services, helping counselors track cases and support student well-being efficiently.",
    image: "../src/assets/guidance.png",
    tech: ["NodeJS", "MongoDB", "ExpressJS", "React", "Bootstrap"],
    demo: "#",
    github: "#",
  },
  {
    title: "Depression Detection System",
    description: "AI-powered system for detecting signs of depression in users.",
    image: "../src/assets/depression.png",
    tech: ["Laravel", "MySQL", "Tensorlow.js", "Bootstrap", "Python"],
    demo: "#",
    github: "#",
  },
   {
    title: "Covert Court Management System",
    description: "Manages court cases, schedules, and documents for efficient legal proceedings.",
    image: "../src/assets/court.png",
    tech: ["Laravel", "MySQL", "Bootstrap", "Multitenancy"],
    demo: "#",
    github: "#",
  },
   {
    title: "LYDO and SK President Profiling",
    description: "Designed a profiling system for LYDO and SK Presidents to streamline data collection and reporting processes.",
    image: "../src/assets/image.png",
    tech: ["Laravel", "MySQL", "Bootstrap"],
    demo: "#",
    github: "#",
  },
];


const App: React.FC = () => {

  const [open, setOpen] = useState(false);

  return (

     <div className="text-white">
    <section id="home" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
      <header className="absolute top-0 left-0 w-full z-20 flex items-center justify-between px-6 md:px-12 py-4 text-white fixed">
        <h1 className="text-xl md:text-2xl font-bold">JDJ</h1>

        <nav className="hidden md:flex gap-8 text-sm md:text-base">
          <a href="#home" className="relative text-gray-300 hover:text-white transition
                 after:content-[''] after:absolute after:left-0 after:-bottom-1
                 after:w-0 after:h-[2px] after:bg-blue-500
                 after:transition-all after:duration-300
                 hover:after:w-full">Home</a>
          <a href="#about" className="relative text-gray-300 hover:text-white transition
                 after:content-[''] after:absolute after:left-0 after:-bottom-1
                 after:w-0 after:h-[2px] after:bg-blue-500
                 after:transition-all after:duration-300
                 hover:after:w-full">About</a>
          <a href="#skills" className="relative text-gray-300 hover:text-white transition
                 after:content-[''] after:absolute after:left-0 after:-bottom-1
                 after:w-0 after:h-[2px] after:bg-blue-500
                 after:transition-all after:duration-300
                 hover:after:w-full">Skills</a>
          <a href="#projects" className="relative text-gray-300 hover:text-white transition
                 after:content-[''] after:absolute after:left-0 after:-bottom-1
                 after:w-0 after:h-[2px] after:bg-blue-500
                 after:transition-all after:duration-300
                 hover:after:w-full">Projects</a>
          <a href="#contact" className="relative text-gray-300 hover:text-white transition
                 after:content-[''] after:absolute after:left-0 after:-bottom-1
                 after:w-0 after:h-[2px] after:bg-blue-500
                 after:transition-all after:duration-300
                 hover:after:w-full">Contact</a>
        </nav>

 <button
  className="md:hidden text-2xl transition-all duration-200"
  onClick={() => setOpen(!open)}
>
  {open ? "✕" : "☰"}
</button>

{open && (
  <div className="absolute top-full left-0 w-full bg-gray-900 z-50 flex flex-col items-center gap-6 py-6 md:hidden
  transition-all duration-300 ease-in-out">
    <a href="#home" onClick={() => setOpen(false)} className="relative text-gray-300 hover:text-white transition
                 after:content-[''] after:absolute after:left-0 after:-bottom-1
                 after:w-0 after:h-[2px] after:bg-blue-500
                 after:transition-all after:duration-300
                 hover:after:w-full">Home</a>
    <a href="#about" onClick={() => setOpen(false)} className="relative text-gray-300 hover:text-white transition
                 after:content-[''] after:absolute after:left-0 after:-bottom-1
                 after:w-0 after:h-[2px] after:bg-blue-500
                 after:transition-all after:duration-300
                 hover:after:w-full">About</a>
    <a href="#skills" onClick={() => setOpen(false)} className="relative text-gray-300 hover:text-white transition
                 after:content-[''] after:absolute after:left-0 after:-bottom-1
                 after:w-0 after:h-[2px] after:bg-blue-500
                 after:transition-all after:duration-300
                 hover:after:w-full">Skills</a>
    <a href="#projects" onClick={() => setOpen(false)} className="relative text-gray-300 hover:text-white transition
                 after:content-[''] after:absolute after:left-0 after:-bottom-1
                 after:w-0 after:h-[2px] after:bg-blue-500
                 after:transition-all after:duration-300
                 hover:after:w-full">Projects</a>
    <a href="#contact" onClick={() => setOpen(false)} className="relative text-gray-300 hover:text-white transition
                 after:content-[''] after:absolute after:left-0 after:-bottom-1
                 after:w-0 after:h-[2px] after:bg-blue-500
                 after:transition-all after:duration-300
                 hover:after:w-full">Contact</a>
  </div>
)}

        
      </header>
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
                  src="../src/assets/IMG_7468.JPG"
                  alt="Hero"
                  className="relative w-72 md:w-96 md:h-96 rounded-full border-4 border-white shadow-2xl object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
    </section>
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
              src="../src/assets/IMG_1852.JPG"
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
      <section
  id="skills"
  className="relative min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 pt-16 px-6 pb-16"
>
  <div className="max-w-6xl mx-auto">
    
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white inline-block after:content-[''] after:block after:w-20 after:h-1 after:bg-blue-500  after:mt-2">
      My Skills
    </h2>

    <div className="grid md:grid-cols-2 gap-10">

      {/* LEFT COLUMN */}
      <div className="space-y-6">

        <Skill name="ReactJS" level={80} />
        <Skill name="NodeJS" level={75} />
        <Skill name="Tailwind CSS" level={70} />
        <Skill name="Bootstrap" level={80} />

      </div>

      {/* RIGHT COLUMN */}
      <div className="space-y-6">

        <Skill name="MongoDB" level={80} />
        <Skill name="MySQL" level={85} />
        <Skill name="Laravel" level={90} />
        <Skill name="Git & GitHub" level={95} />

      </div>

    </div>
  </div>
</section>
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
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
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
                      className="bg-gray-700 text-xs px-3 py-2 rounded-md"
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
<section id="contact" className=" bg-gradient-to-br from-gray-900 to-gray-800 pt-16 px-6 pb-16">

  <div className="max-w-6xl mx-auto">

    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white inline-block after:content-[''] after:block after:w-20 after:h-1 after:bg-blue-500  after:mt-2">
  Get in Touch
</h2>


    <div className="grid md:grid-cols-2 gap-10">

      {/* LEFT - FORM CARD */}
      <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
               className="bg-gray-900 p-8 rounded-md shadow-md border border-gray-700 flex flex-col gap-4">

<label className="text-gray-300 text-sm" htmlFor="name">Name:</label>
        <input
          className="p-2 rounded-md bg-gray-800 text-sm text-white placeholder-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          id="name"
          placeholder="Your Name"
        />
<label className="text-gray-300 text-sm" htmlFor="email">Email Address:</label>        <input
          className="w-full p-2 text-sm rounded-md bg-gray-800 text-white placeholder-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="email"
          id="email"
          placeholder="Your Email"
        />
<label className="text-gray-300 text-sm" htmlFor="message">Message:</label>
        <textarea
          className="w-full p-2 text-sm rounded-md bg-gray-800 text-white placeholder-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="message"
          placeholder="Your Message"
          rows={5}
        />

        <button className="mt-4 bg-blue-600 hover:bg-blue-700 transition text-white py-2 rounded-lg flex items-center justify-center gap-2">
          <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M22 2L2 8.66667L11.5833 12.4167M22 2L15.3333 22L11.5833 12.4167M22 2L11.5833 12.4167" stroke="#ffffff" stroke-width="1.3679999999999999" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
          Send Message
        </button>

      </motion.div>

      {/* RIGHT - INFO */}
      <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            className="flex flex-col justify-center text-gray-300">

          <div className="mb-4 space-y-4">

            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="bg-gray-800 w-12 h-12 flex items-center justify-center rounded-full text-white">
                <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 64 64" enable-background="new 0 0 64 64"  fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#ffffff" d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24 C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24 C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"></path> </g></svg>
              </div>
              <div>
                <h3 className="font-semibold text-sm">Location</h3>
                <p className="text-gray-600">Bukidnon, Philippines</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-gray-800 w-12 h-12 flex items-center justify-center rounded-full text-white">
                <svg width="20px" height="20px" viewBox="0 -4 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"  fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>mail</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Icon-Set" transform="translate(-412.000000, -259.000000)" fill="#ffffff"> <path d="M442,279 C442,279.203 441.961,279.395 441.905,279.578 L433,270 L442,263 L442,279 L442,279 Z M415.556,280.946 L424.58,271.33 L428,273.915 L431.272,271.314 L440.444,280.946 C440.301,280.979 415.699,280.979 415.556,280.946 L415.556,280.946 Z M414,279 L414,263 L423,270 L414.095,279.578 C414.039,279.395 414,279.203 414,279 L414,279 Z M441,261 L428,271 L415,261 L441,261 L441,261 Z M440,259 L416,259 C413.791,259 412,260.791 412,263 L412,279 C412,281.209 413.791,283 416,283 L440,283 C442.209,283 444,281.209 444,279 L444,263 C444,260.791 442.209,259 440,259 L440,259 Z" id="mail"> </path> </g> </g> </g></svg>
              </div>
              <div>
                <h3 className="font-semibold text-sm">Email</h3>
                <p className="text-gray-600">jovannediel@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-gray-800 w-12 h-12 flex items-center justify-center rounded-full text-white">
                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.1007 13.359L15.5719 12.8272H15.5719L16.1007 13.359ZM16.5562 12.9062L17.085 13.438H17.085L16.5562 12.9062ZM18.9728 12.5894L18.6146 13.2483L18.9728 12.5894ZM20.8833 13.628L20.5251 14.2869L20.8833 13.628ZM21.4217 16.883L21.9505 17.4148L21.4217 16.883ZM20.0011 18.2954L19.4723 17.7636L20.0011 18.2954ZM18.6763 18.9651L18.7459 19.7119H18.7459L18.6763 18.9651ZM8.81536 14.7266L9.34418 14.1947L8.81536 14.7266ZM4.00289 5.74561L3.2541 5.78816L3.2541 5.78816L4.00289 5.74561ZM10.4775 7.19738L11.0063 7.72922H11.0063L10.4775 7.19738ZM10.6342 4.54348L11.2346 4.09401L10.6342 4.54348ZM9.37326 2.85908L8.77286 3.30855V3.30855L9.37326 2.85908ZM6.26145 2.57483L6.79027 3.10667H6.79027L6.26145 2.57483ZM4.69185 4.13552L4.16303 3.60368H4.16303L4.69185 4.13552ZM12.0631 11.4972L12.5919 10.9654L12.0631 11.4972ZM16.6295 13.8909L17.085 13.438L16.0273 12.3743L15.5719 12.8272L16.6295 13.8909ZM18.6146 13.2483L20.5251 14.2869L21.2415 12.9691L19.331 11.9305L18.6146 13.2483ZM20.8929 16.3511L19.4723 17.7636L20.5299 18.8273L21.9505 17.4148L20.8929 16.3511ZM18.6067 18.2184C17.1568 18.3535 13.4056 18.2331 9.34418 14.1947L8.28654 15.2584C12.7186 19.6653 16.9369 19.8805 18.7459 19.7119L18.6067 18.2184ZM9.34418 14.1947C5.4728 10.3453 4.83151 7.10765 4.75168 5.70305L3.2541 5.78816C3.35456 7.55599 4.14863 11.144 8.28654 15.2584L9.34418 14.1947ZM10.7195 8.01441L11.0063 7.72922L9.9487 6.66555L9.66189 6.95073L10.7195 8.01441ZM11.2346 4.09401L9.97365 2.40961L8.77286 3.30855L10.0338 4.99296L11.2346 4.09401ZM5.73263 2.04299L4.16303 3.60368L5.22067 4.66736L6.79027 3.10667L5.73263 2.04299ZM10.1907 7.48257C9.66189 6.95073 9.66117 6.95144 9.66045 6.95216C9.66021 6.9524 9.65949 6.95313 9.659 6.95362C9.65802 6.95461 9.65702 6.95561 9.65601 6.95664C9.65398 6.95871 9.65188 6.96086 9.64972 6.9631C9.64539 6.96759 9.64081 6.97245 9.63599 6.97769C9.62634 6.98816 9.61575 7.00014 9.60441 7.01367C9.58174 7.04072 9.55605 7.07403 9.52905 7.11388C9.47492 7.19377 9.41594 7.2994 9.36589 7.43224C9.26376 7.70329 9.20901 8.0606 9.27765 8.50305C9.41189 9.36833 10.0078 10.5113 11.5343 12.0291L12.5919 10.9654C11.1634 9.54499 10.8231 8.68059 10.7599 8.27309C10.7298 8.07916 10.761 7.98371 10.7696 7.96111C10.7748 7.94713 10.7773 7.9457 10.7709 7.95525C10.7677 7.95992 10.7624 7.96723 10.7541 7.97708C10.75 7.98201 10.7451 7.98759 10.7394 7.99381C10.7365 7.99692 10.7335 8.00019 10.7301 8.00362C10.7285 8.00534 10.7268 8.00709 10.725 8.00889C10.7241 8.00979 10.7232 8.0107 10.7223 8.01162C10.7219 8.01208 10.7212 8.01278 10.7209 8.01301C10.7202 8.01371 10.7195 8.01441 10.1907 7.48257ZM11.5343 12.0291C13.0613 13.5474 14.2096 14.1383 15.0763 14.2713C15.5192 14.3392 15.8763 14.285 16.1472 14.1841C16.28 14.1346 16.3858 14.0763 16.4658 14.0227C16.5058 13.9959 16.5392 13.9704 16.5663 13.9479C16.5799 13.9367 16.5919 13.9262 16.6024 13.9166C16.6077 13.9118 16.6126 13.9073 16.6171 13.903C16.6194 13.9008 16.6215 13.8987 16.6236 13.8967C16.6246 13.8957 16.6256 13.8947 16.6266 13.8937C16.6271 13.8932 16.6279 13.8925 16.6281 13.8923C16.6288 13.8916 16.6295 13.8909 16.1007 13.359C15.5719 12.8272 15.5726 12.8265 15.5733 12.8258C15.5735 12.8256 15.5742 12.8249 15.5747 12.8244C15.5756 12.8235 15.5765 12.8226 15.5774 12.8217C15.5793 12.82 15.581 12.8183 15.5827 12.8166C15.5862 12.8133 15.5895 12.8103 15.5926 12.8074C15.5988 12.8018 15.6044 12.7969 15.6094 12.7929C15.6192 12.7847 15.6265 12.7795 15.631 12.7764C15.6403 12.7702 15.6384 12.773 15.6236 12.7785C15.5991 12.7876 15.501 12.8189 15.3038 12.7886C14.8905 12.7253 14.02 12.3853 12.5919 10.9654L11.5343 12.0291ZM9.97365 2.40961C8.95434 1.04802 6.94996 0.83257 5.73263 2.04299L6.79027 3.10667C7.32195 2.578 8.26623 2.63181 8.77286 3.30855L9.97365 2.40961ZM4.75168 5.70305C4.73201 5.35694 4.89075 4.9954 5.22067 4.66736L4.16303 3.60368C3.62571 4.13795 3.20329 4.89425 3.2541 5.78816L4.75168 5.70305ZM19.4723 17.7636C19.1975 18.0369 18.9029 18.1908 18.6067 18.2184L18.7459 19.7119C19.4805 19.6434 20.0824 19.2723 20.5299 18.8273L19.4723 17.7636ZM11.0063 7.72922C11.9908 6.7503 12.064 5.2019 11.2346 4.09401L10.0338 4.99295C10.4373 5.53193 10.3773 6.23938 9.9487 6.66555L11.0063 7.72922ZM20.5251 14.2869C21.3429 14.7315 21.4703 15.7769 20.8929 16.3511L21.9505 17.4148C23.2908 16.0821 22.8775 13.8584 21.2415 12.9691L20.5251 14.2869ZM17.085 13.438C17.469 13.0562 18.0871 12.9616 18.6146 13.2483L19.331 11.9305C18.2474 11.3414 16.9026 11.5041 16.0273 12.3743L17.085 13.438Z" fill="#ffffff"></path> </g></svg>
              </div>
              <div>
                <h3 className="font-semibold text-sm">Phone</h3>
                <p className="text-gray-600">+63 965 658 4965</p>
              </div>
            </div>
          </div>


            <h1 className="text-white text-2xl font-bold">Let's Talk About Your Project</h1>
            <br />
            <p className="mb-6 leading-relaxed">
              I'm currently available for freelance work or full-time positions. If you have a project that you want to get started, think you need my help with something, or just want to say hi, then get in touch.        </p>

                    {/* SOCIAL BUTTONS */}
                    <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }} className="flex gap-4">

                      <a href="https://github.com/Jovaneeee" className="rounded-full bg-gray-800 hover:bg-gray-700 transition flex items-center justify-center w-12 h-12">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
            </svg>
                      </a>

                      <a href="https://www.linkedin.com/in/jovanne-diel-jabay-661b013b4/" className="rounded-full bg-gray-800 hover:bg-gray-700 transition flex items-center justify-center w-12 h-12">
                  <svg fill="white" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="-271 283.9 256 235.1"  width="20px" height="20px"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <rect x="-264.4" y="359.3" width="49.9" height="159.7"></rect> <path d="M-240.5,283.9c-18.4,0-30.5,11.9-30.5,27.7c0,15.5,11.7,27.7,29.8,27.7h0.4c18.8,0,30.5-12.3,30.4-27.7 C-210.8,295.8-222.1,283.9-240.5,283.9z"></path> <path d="M-78.2,357.8c-28.6,0-46.5,15.6-49.8,26.6v-25.1h-56.1c0.7,13.3,0,159.7,0,159.7h56.1v-86.3c0-4.9-0.2-9.7,1.2-13.1 c3.8-9.6,12.1-19.6,27-19.6c19.5,0,28.3,14.8,28.3,36.4V519h56.6v-88.8C-14.9,380.8-42.7,357.8-78.2,357.8z"></path> </g> </g></svg>

                      </a>

                      <a href="https://www.facebook.com/jabaaay.github.io" className="rounded-full transparent bg-gray-800 hover:bg-gray-700 transition flex items-center justify-center w-12 h-12">
                      <svg fill="white" height="20" width="20" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="-337 273 123.5 256" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M-260.9,327.8c0-10.3,9.2-14,19.5-14c10.3,0,21.3,3.2,21.3,3.2l6.6-39.2c0,0-14-4.8-47.4-4.8c-20.5,0-32.4,7.8-41.1,19.3 c-8.2,10.9-8.5,28.4-8.5,39.7v25.7H-337V396h26.5v133h49.6V396h39.3l2.9-38.3h-42.2V327.8z"></path> </g></svg>
                      </a>

                    </motion.div>

            </motion.div>

    </div>

  </div>

</section>

<footer className="bg-gray-900 text-gray-500 text-sm text-center py-6">

  <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
</footer>
    </div>
  );
};

export default App;
