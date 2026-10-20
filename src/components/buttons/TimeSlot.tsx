function TimeSlot ({content, variant}: {content: string, variant:string}) {
    return (
        <button className={`timeSlot ${variant}`}>{content}</button>
    )

}
export default TimeSlot;
