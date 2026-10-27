import type { IconType } from "react-icons";

type IconButtonProps = {
  content: string;
  variant: string;
  icon: IconType;
  onClick?: () => void;
};

function IconButton({
    content,
    variant,
    icon: Icon,
    onClick,
    }: IconButtonProps) {
    return (
        <button className={`iconButton ${variant}`} onClick={onClick}>
          <Icon className="group-hover:rotate-90 transition-transform duration-300"/>{content}
        </button>
    )
}
export default IconButton;