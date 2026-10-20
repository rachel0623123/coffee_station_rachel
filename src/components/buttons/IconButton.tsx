import type { IconType } from "react-icons";

type IconBadgeProps = {
  content: string;
  variant: string;
  hrefC: String;
  icon: IconType;
};

function IconButton({
                content,
                variant,
                hrefC,
                icon: Icon,
                }: IconBadgeProps) {
    return (
        <a href ={`${hrefC}`} className={`iconButton  ${variant}`} ><Icon/>{content}</a>
    )
}
export default IconButton;