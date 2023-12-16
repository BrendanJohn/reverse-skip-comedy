import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Pilot from "./pages/Pilot";
import NoPage from "./pages/NoPage";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <div>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="about" element={<About />} />
        <Route path="pilot" element={<Pilot />} />
        <Route path="contact" element={<Contact />} />
        <Route index element={<Home />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);