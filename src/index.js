import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Social from "./pages/Social";
import Show from "./pages/Show";
import NoPage from "./pages/NoPage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
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
        <Route path="show" element={<Show />} />
        <Route path="contact" element={<Contact />} />
        <Route path="social" element={<Social />} />
        <Route index element={<Home />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);