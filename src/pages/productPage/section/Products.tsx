import ProductCard from "../../../shared/ui/cards/ProductCard";
import { useCoffeeStore } from "../../../store/coffeeStore";

type ProductsProps = {
    selectedCategory: string;
};

function Products({selectedCategory} : ProductsProps){
    const coffees = useCoffeeStore((state) => state.coffees);
    const showCoffees = selectedCategory === "All" ? coffees : coffees.filter((coffee) => coffee.category === selectedCategory);
 
    return (
        <section className="relative flex flex-col items-center justify-center ">
            <div className="w-full max-w-[1536px] pb-20">
                <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    { showCoffees.length == 0 ? (
                        <p className="sectionText text-center">
                            No items in {selectedCategory} yet. Check back soon!
                        </p>
                        ) : (
                            showCoffees.map((coffee) => (
                                <ProductCard 
                                    key={coffee.id}
                                    badge_price = {`$ ${coffee.price.toFixed(1)}`} 
                                    image = {coffee.image} 
                                    badge_star = {`${coffee.star.toFixed(1)}`} 
                                    product_name = {coffee.name} 
                                    product_content = {coffee.content}
                                />  
                            )
                        ) 
                    )}
                </div>
            </div>
        </section>
    );
}
export default Products;