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
import ScrollToTop from "./ScrollTop";
import { useEffect, useState } from "react";
import { BsArrowUp } from "react-icons/bs";

const App = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  // console.log(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showBackToTop]);

  const handleBackToTop = () => {
    window.scrollTo(0, 0);
    console.log("call scroll");
  };

  return (
    <div className="w-screen h-screen mx-auto overflow-x-hidden bg-black text-white">
      <ScrollToTop />
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
      {showBackToTop && (
        <button
          className="fixed z-[9999999] border bottom-4 right-4 p-2 bg-white cursor-pointer backToTop"
          onClick={handleBackToTop}
        >
          <BsArrowUp />
        </button>
      )}
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
