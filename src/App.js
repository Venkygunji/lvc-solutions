import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Home from './components/home';
import About from './components/aboutus';
import Service from "./components/whatwedo"
import Insight from "./components/insight"
// import Footer from './components/footer';
import Header from './components/header';
import Contact from './components/contact';


  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
 

function App() {
  return (
    <Router>
        <Header/>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Service />} />
          <Route path="/about" element={<About />} />
          <Route path="/insight" element={<Insight />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
