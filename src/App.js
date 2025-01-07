import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import Home from "./components/HomePage";
import Contact from "./components/Contact";
import About from "./components/AboutSection";
import Features from "./components/Features";
// import Home from "./components/HomePage";

function App() {
  return (
    <>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
