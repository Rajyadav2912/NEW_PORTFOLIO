import { Route, Routes } from "react-router-dom";
// import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
// import Skill from "./Components/Skill";
// import Footer from "./Components/Footer";
import Education from "./Components/Experience/Education";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
// import Education from "./Pages/Education";

import Project from "./Pages/Project";
import Main from "./Pages/Main";

function App() {
  return (
    <div className="w-screen h-screen mx-auto overflow-x-hidden bg-black text-white">
      <div className="relative flex justify-center mx-auto">
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <div className="mt-[45rem]">
        <Footer />
      </div> */}
    </div>
  );
}

export default App;
