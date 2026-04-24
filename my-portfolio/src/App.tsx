import React from "react";

const App: React.FC = () => {
  return (

     <div className="text-white">
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
      <header className="absolute top-0 left-0 w-full z-20 flex items-center justify-between px-6 md:px-12 py-4 text-white fixed">
        <h1 className="text-xl md:text-2xl font-bold">MyPortfolio</h1>

        <nav className="hidden md:flex gap-8 text-sm md:text-base">
          <a href="#" className="hover:text-white-300 transition">Home</a>
          <a href="#" className="hover:text-white-300 transition">About</a>
          <a href="#" className="hover:text-white-300 transition">Projects</a>
          <a href="#" className="hover:text-white-300 transition">Contact</a>
        </nav>

        <button className="md:hidden text-xl">☰</button>
      </header>
       <div className="relative min-h-screen flex items-center justify-center px-6 z-10">
          <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left */}
            <div
              className="text-center md:text-left"
            >
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Jovanne Diel Jabay
              </h1>

              <p className="mt-4 text-xl md:text-2xl font-medium h-8">
                Frontend Developer
              </p>
           </div>

            {/* Right */}
            <div
              className="flex justify-center md:justify-end"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-pink-500 to-indigo-500 blur-2xl opacity-40 rounded-full"></div>

                <img
                  src="https://via.placeholder.com/400"
                  alt="Hero"
                  className="relative w-72 md:w-96 rounded-full border-4 border-white shadow-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
    </section>
<section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
       <div className="relative min-h-screen flex items-center justify-center px-6 z-10">
          <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left */}
            <div
              className="text-center md:text-left"
            >
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Your Name
              </h1>

              <p className="mt-4 text-xl md:text-2xl font-medium h-8">
                Frontend Developer
              </p>
           </div>

            {/* Right */}
            <div
              className="flex justify-center md:justify-end"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-pink-500 to-indigo-500 blur-2xl opacity-40 rounded-full"></div>

                <img
                  src="https://via.placeholder.com/400"
                  alt="Hero"
                  className="relative w-72 md:w-96 rounded-full border-4 border-white shadow-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
    </section>

    <section id="about" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 align-middle">
             <div className="relative min-h-screen flex items-center justify-center px-6 z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div
            className="flex justify-center"
          >
            <img
              src="https://via.placeholder.com/350"
              alt="About"
              className="rounded-2xl shadow-xl"
            />
          </div>

          {/* Text */}
          <div
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
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

            <div className="mt-6 flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-gradient-to-r from-pink-500 to-indigo-500 text-white rounded-full text-sm">
                React
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-pink-500 to-indigo-500 text-white rounded-full text-sm">
                TypeScript
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-pink-500 to-indigo-500 text-white rounded-full text-sm">
                Tailwind CSS
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-pink-500 to-indigo-500 text-white rounded-full text-sm">
                JavaScript
              </span>
            </div>
          </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default App;
