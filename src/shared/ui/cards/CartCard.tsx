import { FaPlus  } from "react-icons/fa";
import { FaMinus  } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import IconButton from "../buttons/IconButton";

type CartCardProps = {
    price: number;
    image: string;
    cart_name: string;
    count:number;
    increase?: () => void;
    decrease? : () => void;
    remove? : () => void;
};
function CartCard({
    price,
    image,
    cart_name,
    count,
    increase,
    decrease,
    remove,
}:CartCardProps) {
    return (
       <div className="glass shadow-2xl p-4 rounded-xl flex gap-4 items-center w-96">
            <img alt={cart_name} className="w-20 h-20 rounded-lg object-cover" src={image} />
            <div className="flex-1 mr-5">
                <h3 className="font-bold text-coffee-900">{cart_name}</h3>
                <p className="text-coffee-900 font-bold">{`$ ${price.toFixed(2)}`}</p>
                <div className="flex items-center gap-3 mt-2">
                    <IconButton content="" variant="p-[5px] rounded-full bg-white/30 flex items-center justify-center hover:bg-white/50 transition-colors" icon={FaMinus  } onClick={decrease}/>
                    <span>{count}</span>
                    <IconButton content="" variant="p-[5px] rounded-full bg-coffee-900 text-white flex items-center justify-center hover:bg-coffee-800 transition-colors" icon={FaPlus  } onClick={increase}/>
                </div>
            </div>
            <IconButton content="" variant="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors" icon={RxCross1  } onClick={remove}/>
        </div>
    )
}
export default CartCard;
