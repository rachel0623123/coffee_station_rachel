import IconButton from "../shared/ui/buttons/IconButton";
import Button from "../shared/ui/buttons/Button";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

import { Link } from "react-router-dom";
import { navLinks } from "./navLinks";
export const Footer = () => {
    return (
        <footer className="text-coffee-100 pt-20 pb-8 relative w-full bg-coffee-950 px-[8%]">
            <div className="flex justify-between pb-10 border-b border-white/10">
                <div className="space-y-4">
                    <h3 className="text-3xl font-bold font-serif text-white flex items-center gap-2">Coffee<span className="text-coffee-400">'station</span></h3>
                    <p className="text-coffee-200/60 text-base leading-relaxed font-medium max-w-xs">Elevating your daily ritual with handcrafted excellence.</p>
                    <div className="flex gap-4">
                        <IconButton content="" variant="hover:bg-coffee-900/20" icon={FaInstagram}/>
                        <IconButton content="" variant="hover:bg-coffee-900/20" icon={FaFacebookF}/>
                        <IconButton content="" variant="hover:bg-coffee-900/20" icon={FaTwitter}/>
                    </div>
                </div>
                <div>
                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-coffee-400">Navigation</h4>
                    <ul className="space-y-4">
                        {navLinks.map((link) => (
                             <li key = {link.to} >
                                <Link className="text-base text-coffee-100/70 hover:text-white transition-colors flex items-center gap-2 group" to={link.to}>
                                    <span className="w-0 h-px bg-terracotta group-hover:w-4 transition-all"></span>{link.navLabel}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-coffee-400">Our Space</h4>
                    <ul className="space-y-4 text-base text-coffee-100/70 font-medium">
                        <li className="flex items-start gap-3">
                            <span className="text-terracotta mt-1">•</span>
                            <span>PDPM IIITDM JABALPUR <br />M.P, India</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-terracotta mt-1">•</span>
                            <span>hello@coffeestation.com <br />+91 9999999999</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-coffee-400">Join the Club</h4>
                    <p className="text-coffee-100/60 text-sm mb-6 font-medium">Subscribe for secret menu previews and brewing tips.</p>
                    <div className="flex gap-3">
                        <input type="email" placeholder="Your email" className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-terracotta w-full" aria-label="Email"/>
                        <Button content = "Host" variant ="bg-white/5 border border-white/10 rounded-xl px-3 text-sm py-1"/>
                    </div>
                </div>
            </div>
            <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-coffee-100/40">
            <p>© 2026 Coffee'station. All rights reserved.</p>
            <div className="flex gap-8">
                <Link className="transition-colors" to="">Privacy Policy</Link>
                <Link className="transition-colors" to="">Terms of Service</Link>
            </div>
            </div>

        </footer>
    );
};
