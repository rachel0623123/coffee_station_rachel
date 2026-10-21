import type { IconType } from "react-icons";

type IconButtonProps = {
  content: string;
  variant: string;
  icon: IconType;
};

function IconButton({
                content,
                variant,
                icon: Icon,
                }: IconButtonProps) {
    return (
        <button className={`iconButton ${variant}`} ><Icon className="group-hover:rotate-90 transition-transform duration-300"/>{content}</button>
    )
}
export default IconButton;