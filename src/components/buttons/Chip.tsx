function Chip ({content, variant}: {content: string, variant:string}) {
    return (
        <button className={`chip ${variant}`}>{content}</button>
    )

}
export default Chip;
