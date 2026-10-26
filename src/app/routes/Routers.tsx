import { Routes, Route } from "react-router-dom";
import { Layout } from "../../layout/Layout";

import DesignSystem from "../../pages/designSystem/DesignSystem";
import Home from "../../pages/homePage/Home";
import Product from "../../pages/Product";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import Booking from "../../pages/Booking";

export const Routers =  () => {
    return (
        <Routes>
            <Route element={<Layout/>} path="">
                <Route path="/" element={<Home />}/>
                <Route path="/product" element={<Product />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/contact" element={<Contact />}/>
                <Route path="/booking" element={<Booking />}/>
                <Route path="/designsystem" element={<DesignSystem />}/>
            </Route>
        </Routes>
    )
}