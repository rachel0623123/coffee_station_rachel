import IconButton from "../shared/ui/buttons/IconButton";
import CountBadge from "../shared/ui/badges/CountBadge";
import Button from "../shared/ui/buttons/Button";
import NavItem from "../shared/ui/NavItem";
import { useNavigate } from "react-router-dom";

import { navLinks } from "./navLinks";

import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { LuCoffee } from "react-icons/lu";

export const Header = () => {
    const navigate = useNavigate();
    return (
        <nav className="navBar">
            <Link className="flex items-center gap-1 text-xl sm:text-2xl font-bold text-coffee-900 tracking-tight shrink-0 z-20 font-serif group" to="/">
                <IconButton content="" variant="bg-coffee-900 text-white rounded-2xl" icon={LuCoffee }/>
                <span>Coffee
                    <span className="text-coffee-600 font-normal italic">'station</span>
                </span>
            </Link>
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-10">
                {navLinks.map((link) => (
                    <NavItem key = {link.to} to={link.to} content={link.label} />
                ))}

                
            </div>
            <div className="hidden md:flex items-center gap-8 z-20 ">
                <div className="relative hover:scale-110 transition-transform duration-700 ease-out">
                    <IconButton content="" variant="text-[15px] hover:bg-white/20 " icon={FiShoppingBag  }/>
                    <CountBadge variant="absolute -top-1 left-4" count="2"/>
                </div>
                <Button content = "Reserve" variant ="orderBtn py-3 rounded-2xl" onClick = {() => navigate("/booking")}/>
            </div>
        </nav>
    );
};
