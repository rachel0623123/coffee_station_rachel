type CountBadgeProps = {
  count: string;
};
function CountBadge ({count}:CountBadgeProps) {
    return (
        <div className="countBadge">{count}</div>
    )
}

export default CountBadge;