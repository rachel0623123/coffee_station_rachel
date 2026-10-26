import type { IconType } from "react-icons";
import IconButton from "../buttons/IconButton";
type ContactProps = {
  addr: string;
  title: string;
  Icon: IconType;
};

function ContactCard({
                addr,
                title,
                Icon,
                }: ContactProps) {
    return (
        <div className="p-8 w-full max-w-[280px] min-h-[280px] rounded-[32px] text-center flex flex-col items-center hover:bg-white/40 transition-all duration-500 border border-white/20 shadow-xl space-y-5 group" >
            <IconButton content="" variant="bg-coffee-900 text-white text-2xl p-5 rounded-3xl  hover:bg-coffee-900" icon={Icon }/>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-coffee-900 ">{title}</h3>
            <p className="text-sm sm:text-base text-coffee-800/60 font-medium leading-relaxed whitespace-pre-line">{addr}</p>
        </div>
    )
}
export default ContactCard;
