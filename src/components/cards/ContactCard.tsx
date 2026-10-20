import type { IconType } from "react-icons";
import IconButton from "../buttons/IconButton";
type ContanctProps = {
  addr: string;
  title: string;
  hrefC: String;
  Icon: IconType;
};

function ContactCard({
                addr,
                title,
                hrefC,
                Icon,
                }: ContanctProps) {
    return (
        <div className="glass-premium p-8 w-[250px] rounded-[32px] text-center flex flex-col items-center hover:bg-white/40 transition-all duration-500 group border border-white/20 shadow-xl " >
            <IconButton content="" variant="bg-coffee-900 text-white" hrefC={hrefC} icon={Icon }/>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-coffee-900 mb-2 sm:mb-3">{title}</h3>
            <p className="text-sm sm:text-base text-coffee-800/60 font-medium leading-relaxed whitespace-pre-line">{addr}</p>
        </div>
    )
}
export default ContactCard;
