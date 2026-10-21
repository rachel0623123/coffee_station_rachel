import { Routes, Route } from "react-router-dom";
import { DesignSystem } from "../pages/designSystem/DesignSystem";
import { Layout } from "../layout/Layout";
import { Home } from "../pages/Home";
import { Product } from "../pages/Product";
export const Routers =  () => {
    return (
        <Routes>
            <Route element={<Layout/>} path="">
                <Route path="/" element={<Home />}/>
                <Route path="/product" element={<Product />}/>
                <Route path="/designsystem" element={<DesignSystem />}/>
            </Route>
        </Routes>
    )
}