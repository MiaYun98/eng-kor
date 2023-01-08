import { React } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// page and component import 
import Home from "./pages/Home"
import Navbar from "./components/navbar";
import "./style.css"
import About from "./pages/About";
import Contact from "./pages/Contact";

// style
import bootstrap from "bootstrap/dist/js/bootstrap.bundle"

function App() {

  return (
    <div className="App">
      <Router basename="/">
        {/* NavBar will go over here */}
        <Navbar/>
        <Routes>
          {/* Home route */}
          <Route path="/" element={<Home />}></Route>
          {/* About route */}
          <Route path="about" element={<About/>}></Route>
          {/* Contact route? */}
          <Route path="contact" element={<Contact/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
