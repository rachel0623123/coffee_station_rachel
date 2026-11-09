import type { IconType } from "react-icons";

type IconButtonProps = {
  content: string;
  variant: string;
  icon: IconType;
  onClick?: () => void;
  ariaLabel?: string;
  ariaExpanded?: boolean;
  ariaControls?: string;
};

function IconButton({
    content,
    variant,
    icon: Icon,
    onClick,
    ariaLabel,
    ariaExpanded,
    ariaControls,
    }: IconButtonProps) {
    return (
        <button
            className={`iconButton ${variant}`}
            onClick={onClick}
            aria-label={ariaLabel}
            aria-expanded={ariaExpanded}
            aria-controls={ariaControls}
        >
          <Icon className="group-hover:rotate-90 transition-transform duration-300"/>{content}
        </button>
    )
}
export default IconButton;