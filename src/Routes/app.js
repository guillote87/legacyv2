import React, { useState } from "react"

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Portfolio from "../pages/Portfolio";
import { Navbar } from "../components/Navbar/Navbar";



export default function App() {

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (

        <BrowserRouter>
            <Navbar toggle={toggle} />
            <Routes>
                <Route index element={<Home />} />
                <Route path="portfolio" element={<Portfolio />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>

    );

};

