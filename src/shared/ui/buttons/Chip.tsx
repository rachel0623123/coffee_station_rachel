type ChipProps = {
  content: string;
  variant: string;
};
function Chip ({
                content,
                variant,
                }: ChipProps) {
    return (
        <button className={`chip ${variant}`}>{content}</button>
    )

}
export default Chip;
