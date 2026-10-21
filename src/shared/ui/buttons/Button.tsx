type ButtonProps = {
  content: string;
  variant: string;
};
function Button ({
                content,
                variant,
                }: ButtonProps) {
    return (
        <button className={`button ${variant}`}>{content}</button>
    )

}
export default Button;
