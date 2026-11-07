import { useState } from "react";
import IconButton from "../shared/ui/buttons/IconButton";
import CountBadge from "../shared/ui/badges/CountBadge";
import Button from "../shared/ui/buttons/Button";
import NavItem from "../shared/ui/NavItem";
import { useNavigate } from "react-router-dom";

import { navLinks } from "./navLinks";

import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { LuCoffee, LuMenu, LuX } from "react-icons/lu";

import { useCoffeeStore } from "../store/coffeeStore";
import CartSideBar from "../shared/ui/CartSideBar";

export const Header = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const openCartFunc =  useCoffeeStore((state) => state.openCart);
    const cartCount = useCoffeeStore((state) => state.cart.reduce((sum, item) => sum + item.quantity, 0));
    return (
        <div>
            <nav className="navBar">
                <Link className="flex items-center gap-1 text-xl sm:text-2xl font-bold text-coffee-900 tracking-tight shrink-0 z-20 font-serif group" to="/">
                    <IconButton content="" variant="bg-coffee-900 text-white rounded-2xl" icon={LuCoffee}/>
                    <span>Coffee
                        <span className="text-coffee-600 font-normal italic">'station</span>
                    </span>
                </Link>
                <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-10">
                    {navLinks.map((link) => (
                        <NavItem key = {link.to} to={link.to} content={link.label} />
                    ))}
                </div>
                <div className="flex items-center gap-3 sm:gap-6 z-20">
                    <div className="relative hover:scale-110 transition-transform duration-700 ease-out">
                        <IconButton content="" variant="text-[15px] hover:bg-white/20" icon={FiShoppingBag} onClick={openCartFunc} ariaLabel="Open cart"/>
                        {cartCount !== 0 && <CountBadge variant="absolute -top-1 left-4" count={String(cartCount)}/>}
                    </div>
                    <div className="hidden lg:block">
                        <Button content = "Reserve" variant ="orderBtn py-3 px-6 rounded-2xl text-sm tracking-widest" onClick = {() => navigate("/booking")}/>
                    </div>
                    <IconButton
                        content=""
                        variant="lg:hidden"
                        icon={isMenuOpen ? LuX : LuMenu}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        ariaLabel={isMenuOpen ? "Close menu" : "Open menu"}
                        ariaExpanded={isMenuOpen}
                        ariaControls="mobile-menu"
                    />
                </div>
                {isMenuOpen && (
                    <div
                        id="mobile-menu"
                        onClick={() => setIsMenuOpen(false)}
                        className="lg:hidden absolute top-full left-0 right-0 mt-2 p-6 rounded-3xl border border-white/20 shadow-2xl bg-coffee-100/95 backdrop-blur-lg flex flex-col gap-6"
                    >
                        {navLinks.map((link) => (
                            <NavItem key={link.to} to={link.to} content={link.label} />
                        ))}
                        <Button content="Reserve" variant="orderBtn rounded-2xl" onClick={() => navigate("/booking")} />
                    </div>
                )}
            </nav>
            <CartSideBar />
        </div>
    );
};
