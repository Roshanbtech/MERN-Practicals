// Navbar.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Navbar = () => {
    const Home = () => <h1 className="text-3xl">Home</h1>;
    const About = () => <h1 className="text-3xl">About</h1>;
    const Contact = () => <h1 className="text-3xl">Contact</h1>;
    const Service = () => <h1 className="text-3xl">Service</h1>;

    return (
        <Router>
            <nav className="bg-slate-800 p-4">
                <ul className="flex space-x-4">
                    <li><Link className="text-white hover:text-violet-300" to="/">Home</Link></li>
                    <li><Link className="text-white hover:text-violet-300" to="/about">About</Link></li>
                    <li><Link className="text-white hover:text-violet-300" to="/contact">Contact</Link></li>
                    <li><Link className="text-white hover:text-violet-300" to="/service">Service</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/service" element={<Service />} />
            </Routes>
        </Router>
    );
};

export default Navbar;
