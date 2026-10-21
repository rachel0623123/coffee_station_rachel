import LabelBadge from "../badges/LabelBadge";
import IconBadge from "../badges/IconBadge";
import IconButton from "../buttons/IconButton";
import { GoStarFill } from "react-icons/go";
import { FaPlus } from "react-icons/fa6";

type productCardProps = {
    badge_content: string;
    badge_price: string;
    image: string;
    badge_star: string;
    product_name: string;
    product_content: string;
};

function ProductCard ( {
    badge_content,
    badge_price,
    image,
    badge_star,
    product_name,
    product_content,
}:productCardProps){
    return (
        <div className="productCard group">
            <div className="relative h-56 overflow-hidden group">
                <img alt="Macchiato" className="w-full h-full object-cover transform h-[220px] group-hover:scale-110 transition-transform duration-700 ease-out" src={image}  />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <LabelBadge content = {badge_content} variant="solid absolute" />
                <LabelBadge content = {badge_price} variant="dark absolute"/>
            </div>
            <div className="bg-coffee-300 p-5">
                <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-serif font-bold text-coffee-900">{product_name}</h3>
                    <IconBadge content = {badge_star} variant="soft" icon={GoStarFill}/>
                </div>
                <p className="text-coffee-800/60 text-sm leading-relaxed line-clamp-2 mb-6 font-medium text-left">{product_content}</p>
                <IconButton content="Add to Order" variant="group hover:bg-coffee-900 text-coffee-900 hover:text-white rounded-2xl" icon={FaPlus}/>
            </div>
        </div>
    )
}
export default ProductCard;