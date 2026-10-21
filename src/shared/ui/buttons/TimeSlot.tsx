type TimeSlotProps = {
  content: string;
  variant: string;
};
function TimeSlot ({
                content,
                variant,
                }: TimeSlotProps) {
    return (
        <button className={`timeSlot ${variant}`}>{content}</button>
    )

}
export default TimeSlot;
