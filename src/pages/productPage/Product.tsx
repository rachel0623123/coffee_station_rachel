import { useState } from "react";
import NavFilter from "./section/NavFilter";
import Products from "./section/Products";

function Product() {
    const [selectedCategory, setSelectedCategory] = useState("All")
    return (
        <main className="mainSection">
            <NavFilter
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
            />

            <Products
                selectedCategory={selectedCategory}
            />
        </main>
    )
}
export default Product;
