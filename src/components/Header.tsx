import React, { useState } from "react";


const Header: React.FC = () => {

    const [open, setOpen] = useState(false);
    
  return (
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
  );
}

export default Header;