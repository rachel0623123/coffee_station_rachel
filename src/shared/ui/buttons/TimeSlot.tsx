type TimeSlotProps = {
  content: string;
  variant: string;
  onClick?: () => void;
};
function TimeSlot ({
                content,
                variant,
                onClick,
                }: TimeSlotProps) {
    return (
        <button type="button" className={`timeSlot ${variant}`} onClick={onClick}>{content}</button>
    )

}
export default TimeSlot;
