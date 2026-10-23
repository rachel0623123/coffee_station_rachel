type ButtonProps = {
  content: string;
  variant: string;
  onClick?: () => void;
};
function Button ({
                content,
                variant,
                onClick,
                }: ButtonProps) {
    return (
        <button className={`button ${variant}`} onClick={onClick}>{content}</button>
    )

}
export default Button;
