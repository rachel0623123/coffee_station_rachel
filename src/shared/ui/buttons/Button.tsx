type ButtonProps = {
  content: string;
  variant: string;
  type?: "button" | "submit"
  onClick?: () => void;
};
function Button ({
                content,
                variant,
                onClick,
                type = "button",
                }: ButtonProps) {
    return (
        <button className={`button ${variant}`} onClick={onClick} type = {type}>{content}</button>
    )

}
export default Button;
