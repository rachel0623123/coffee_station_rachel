type CountBadgeProps = {
  count: string;
  variant: string;
};
function CountBadge ({
    count,
    variant,
}:CountBadgeProps) {
    return (
        <div className={`countBadge  ${variant}`}>{count}</div>
    )
}

export default CountBadge;