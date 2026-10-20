import LabelBadge from "../badges/LabelBadge";
import IconBadge from "../badges/IconBadge";
import IconButton from "../buttons/IconButton";
import { GoStarFill } from "react-icons/go";
import { FaPlus } from "react-icons/fa6";

function ProductCard (){
    return (
        <div className="productCard">
            <div className="productCard_img">
                <img alt="Macchiato" className="" src="https://images.unsplash.com/photo-1572442388796-11668a67e53d"  />
                <LabelBadge content = "$5.50" variant="dark absolute"/>
                <LabelBadge content = "BEST SELLER" variant="solid absolute" />
            </div>
            <div className="bg-coffee-200 p-5">
                <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-serif font-bold text-coffee-900 group-hover:text-primary transition-colors">Macchiato</h3>
                    <IconBadge content = "4.6" variant="soft" icon={GoStarFill}/>
                </div>
                <p className="text-coffee-800/60 text-sm leading-relaxed line-clamp-2 mb-6 font-medium text-left">Espresso with vanilla syrup, milk, and caramel drizzle.</p>
                <IconButton content="Add to Order" variant="hover:bg-coffee-900 text-coffee-900 hover:text-white rounded-2xl" hrefC="#" icon={FaPlus }/>
            </div>
        </div>
    )
}
export default ProductCard;