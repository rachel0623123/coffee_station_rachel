type LabelBadgeProps = {
  content: string;
  variant: string;
};

function LabelBadge({
                content,
                variant,
                }: LabelBadgeProps) {
    return (
        <div className={`badge  ${variant}`} >{content}</div>
    )
}
export default LabelBadge;