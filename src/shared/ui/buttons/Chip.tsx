type ChipProps = {
  content: string;
  variant: string;
  onClick?: () => void;
};
function Chip ({
                content,
                variant,
                onClick,
                }: ChipProps) {
    return (
        <button className={`chip ${variant}`} onClick={onClick}>{content}</button>
    )

}
export default Chip;
