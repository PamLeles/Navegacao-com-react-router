import './Content.css'
import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../../Views/Exemples/Home.jsx";
import About from "../../Views/Exemples/About.jsx";
import Param from "../../Views/Exemples/Param.jsx";
import NotFound from "../../Views/Exemples/NotFound.jsx";

const Content = (props) => {
    return (
        <main className="Content">
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/param/:id" element={<Param />} />
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </main>
    )
};
export default Content;