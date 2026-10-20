function Button ({content, variant}: {content: string, variant:string}) {
    return (
        <button className={`button ${variant}`}>{content}</button>
    )

}
export default Button;
