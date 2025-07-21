
const Bean = ({
    component,
    text,
    icon,
    iconRight=false
}) => {
  return (
    <div className="flex justify-center space-x-2 p-1 rounded-full bg-surface border-2  border-border text-text-secondary w-full my-1 sm:w-max sm:p-3">
        <div className="flex items-center">
            {iconRight ? (<><span>{text}</span>{component}</>) : icon}
        </div>
        <div>
            {iconRight ? icon : (<><span>{text}</span>{component}</>)}
        </div>
            
    </div>
  )
}

export default Bean