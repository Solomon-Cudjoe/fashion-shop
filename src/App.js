import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import Home from "./components/HomePage";
import Contact from "./components/Contact";
import About from "./components/AboutSection";
// import Home from "./components/HomePage";

function App() {
  return (
    <>
      <div className="App">
        {/* <Navbar /> */}
        <NavigationBar />
        <h1>Fashion Shop</h1>
        <Footer />
      </div>

      {/* <Routes>
        <Route path="/" Component={<Home />} />
        <Route path="/contact" Component={<Contact />} />
        <Route path="/about" Component={<About />} />
      </Routes> */}
    </>
  );
}

export default App;
