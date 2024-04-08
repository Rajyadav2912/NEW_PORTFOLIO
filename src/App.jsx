import { Route, Routes } from "react-router-dom";
// import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Education from "./Pages/Education";
// import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Project from "./Pages/Project";
import Main from "./Pages/Main";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 15, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 0, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  opacity: 1,
};

function App() {
  return (
    <div className="w-screen h-screen mx-auto overflow-x-hidden bg-black text-white">
      <div className="relative flex justify-center mx-auto">
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Main option={defaultOptions} />} />
        <Route path="/about" element={<About option={defaultOptions} />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Project />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
