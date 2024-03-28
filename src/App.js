import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Pages/Home";
import Project from "./Pages/Project";
import About from "./Pages/About";
import Education from "./Components/Education/Education";
import Skill from "./Components/Skill/Skill";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="w-screen h-screen mx-auto overflow-x-hidden bg-black text-white">
      <div className="relative flex justify-center mx-auto ">
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skill />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
