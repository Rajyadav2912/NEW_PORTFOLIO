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
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
