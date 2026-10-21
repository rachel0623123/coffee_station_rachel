import type { IconType } from "react-icons";

type IconBadgeProps = {
  content: string;
  variant: string;
  icon: IconType;
};

function IconBadge({
                content,
                variant,
                icon: Icon,
                }: IconBadgeProps) {
    return (
        <div className={`badge  ${variant}`} ><Icon/>{content}</div>
    )
}
export default IconBadge;