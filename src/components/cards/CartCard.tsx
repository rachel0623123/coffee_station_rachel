import type { IconType } from "react-icons";

function CartCard() {
    return (
       <div className="glass-card p-4 rounded-xl flex gap-4 items-center">
            <img alt="Macchiato" className="w-20 h-20 rounded-lg object-cover" src="https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&amp;fit=crop&amp;q=80&amp;w=600" />
            <div className="flex-1">
                <h3 className="font-bold text-coffee-900">Macchiato</h3>
                <p className="text-coffee-900 font-bold">$5.20</p>
                <div className="flex items-center gap-3 mt-2">
                    <button className="w-6 h-6 rounded-full bg-white/30 flex items-center justify-center hover:bg-white/50 transition-colors"></button>
                    <button className="w-6 h-6 rounded-full bg-coffee-900 text-white flex items-center justify-center hover:bg-coffee-800 transition-colors"></button>
                </div>
            </div>
            <button className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"></button>
        </div>
    )
}
export default CartCard;
