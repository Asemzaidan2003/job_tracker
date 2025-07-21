const Card = ({
    children,
    style
}) => {
  return (
    <div
      className="w-full h-full bg-surface rounded-3xl border-4 border-border p-4"
      style={{
        boxShadow: "0 0 14px 2px rgba(34,211,238,0.4)",
        ...style
      }}
    >
      {children}
    </div>
  )
}

export default Card