import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css'

function Home() {
  return (
    <main>
      <div className="container">
        <h1>Welcome Home!</h1>
        <p>This is the home page. Explore our site using the navigation above.</p>
      </div>
    </main>
  );
}

function About() {
  return (
    <main>
      <div className="container">
        <h1>Learn More About Us</h1>
        <p>We are a company dedicated to providing the best services.</p>
      </div>
    </main>
  );
}


function Contact() {
  return (
    <main>
      <div className="container">
        <h1>Get in Touch</h1>
        <p>Contact us at contact@company.com or call us at (123) 456-7890.</p>
      </div>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <footer>
        &copy; 2024 Your Company. All rights reserved.
      </footer>
      
    </BrowserRouter>
  );
}

export default App;
