import ProductCard from "../../../shared/ui/cards/ProductCard";
import Button from "../../../shared/ui/buttons/Button";
import { useNavigate } from "react-router-dom";
import { useCoffeeStore } from "../../../store/coffeeStore";

function TopSelling(){

    const navigate = useNavigate();

    const coffees = useCoffeeStore((state) => state.coffees);
    const topCoffees = coffees.filter((coffee) => coffee.star >= 4.9);
    const addCartItem = useCoffeeStore((state) => state.addCartItem);
    const openCartFunc =  useCoffeeStore((state) => state.openCart);
    return (
        <section id="top-selling" className="relative flex flex-col items-center justify-center pt-32 ">
            <div className="w-full max-w-[1536px] pb-20">
                <div className="text-center mb-10 sm:mb-16">
                    <h2 className="sectionHeader">Our Best Sellers</h2>
                    <p className="sectionText">Handpicked favorites that defining our passion for coffee and comfort.</p>
                </div>
                <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {topCoffees.map((coffee) => (
                            <ProductCard 
                                key={coffee.id}
                                badge_price = {coffee.price} 
                                image = {coffee.image} 
                                badge_star = {coffee.star}
                                product_name = {coffee.name} 
                                product_content = {coffee.content}
                                onClick={() => {addCartItem(coffee.id);openCartFunc();}}
                            />    
                    ))}
            
                </div>
            </div>
            <Button content = "View Full Menu →" variant ="viewFullBtn1" onClick={()=>navigate("/product")}/>
        </section>
    );
}
export default TopSelling;