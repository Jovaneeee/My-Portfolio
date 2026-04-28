import React from "react";
import About from "./About";
import Skills from "./Skills";
import Footer from "./components/Footer";
import Contact from "./Contact";
import Project from "./Project";
import Home from "./Home";


const App: React.FC = () => {
  return (

     <div className="text-white">
      <Home/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
