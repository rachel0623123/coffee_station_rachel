function LabelBadge({content, variant}: {content: String, variant: String}) {
    return (
        <div className={`badge  ${variant}`} >{content}</div>
    )
}
export default LabelBadge;