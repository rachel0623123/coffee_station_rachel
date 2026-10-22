import { Link, useLocation } from "react-router-dom";
type NavItemProps = {
  content: string;
  to: string;
};
function NavItem ({
    content,
    to,
}:NavItemProps) {
    const { pathname } = useLocation();
    const isActive = to === "/" ? pathname === "/" : pathname.startsWith(to);

    return (
           <Link 
                aria-current={isActive ? "page" : undefined}
                className={`navItem group ${isActive ? "selectNav" : ""}`}
                to={to}>
                {content}
                <span className="absolute -bottom-1.5 left-0 h-0.5 bg-coffee-900 rounded-full transition-all duration-300 w-0 group-hover:w-full"></span>
            </Link>
    )
}

export default NavItem;