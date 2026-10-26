import { FiShoppingBag } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import IconButton from "./buttons/IconButton";
import CartCard from "./cards/CartCard";
import { useNavigate } from "react-router-dom";
import { useCoffeeStore } from "../../store/coffeeStore";
function CartSideBar() {
    const navigate = useNavigate();
    const cartItems = useCoffeeStore((state) => state.cart);
    const coffee = useCoffeeStore((state) => state.coffees);
    const totalPrice = useCoffeeStore((state) =>
        state.cart.reduce((sum, item) => {
            const matchedCoffee = coffee.find((c) => item.id === c.id);
            if (!matchedCoffee) {
                return sum;
            }
            return sum + matchedCoffee.price * item.quantity;
        }, 0)
    );

    const isOpen = useCoffeeStore((state) => state.isCartOpen);
    const closeCartFunc = useCoffeeStore((state) => state.closeCart);
    const addCartItem = useCoffeeStore((state) => state.addCartItem);
    const decreaseItem = useCoffeeStore((state) => state.decreaseCartItem);
    const removeItem = useCoffeeStore((state) => state.removeCartItem);
    if (!isOpen) {
        return null;
    }
    return (
        <div className="fixed top-0 right-0 z-50">
            {isOpen && (
                <div>
                    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40" onClick={closeCartFunc}></div>
                    <div className="fixed top-0 right-0 h-screen w-full max-w-md glass z-50 shadow-2xl flex flex-col border-l border-white/30 ">
                        <div className="p-6 flex items-center justify-between border-b border-white/10 text-2xl font-serif font-bold">
                            <div className="flex gap-3 items-center">
                                <FiShoppingBag />
                                <h2 className="">Your Order</h2>
                            </div>
                            <IconButton content="" variant="p-2 bg-transparent rounded-full transition-colors " icon={RxCross1} onClick={closeCartFunc} />
                        </div>
                        <div className="flex-1 overflow-y-auto p-6 space-y-4">
                            {
                                cartItems.length === 0 && <div className="h-full flex flex-col items-center justify-center text-center text-coffee-800/60">
                                    <FiShoppingBag className="text-4xl" />
                                    <p className="text-lg">Your cart is empty</p>
                                    <button className="mt-4 text-primary font-bold hover:underline" onClick={() => { closeCartFunc(); navigate("/product"); }}>Browse Menu</button>
                                </div>
                            }
                            {
                                cartItems.map((item) => {
                                    const matchedCoffee = coffee.find((coffee) => item.id === coffee.id);
                                    if (!matchedCoffee)
                                        return null;

                                    return <CartCard
                                        key={item.id}
                                        price={matchedCoffee.price}
                                        image={matchedCoffee.image}
                                        cart_name={matchedCoffee.name}
                                        count={item.quantity}
                                        increase={() => addCartItem(item.id)}
                                        decrease={() => decreaseItem(item.id)}
                                        remove={() => removeItem(item.id)}
                                    />
                                })
                            }
                        </div>
                        {
                            cartItems.length !== 0 &&
                            <div className="p-6 border-t border-white/10 bg-white/5 backdrop-blur-md">
                                <div className="flex justify-between items-center mb-6 text-xl font-bold text-coffee-900">
                                    <span>Total</span>
                                    <span>{`$ ${totalPrice.toFixed(2)}`}</span>
                                </div>
                                <button className="w-full py-4 bg-coffee-900 text-terracotta rounded-xl font-bold text-lg hover:bg-black transition-all shadow-lg active:scale-[0.98]">Checkout</button>
                            </div>
                        }
                    </div>
                </div>
            )}
        </div>
    )
}

export default CartSideBar;