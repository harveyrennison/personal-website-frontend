import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from './components/header';
import AboutMe from "./components/aboutMe";
import Contact from "./components/contact";
import NotFound from "./components/notFound";
import Home from "./components/home";


function App() {
  return (
    <div className="Website">
        <Header />
        <Router>
            <Routes>
                <Route index element={<Navigate to="/home" />} />
                <Route path="home" element={<Home />} />
                <Route path="about_me" element={<AboutMe />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
