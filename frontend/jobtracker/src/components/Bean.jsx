
const Bean = ({
    component,
    text,
    icon,
    iconRight=false
}) => {
  return (
    <div className="flex space-x-2 p-1 rounded-full bg-surface border-2  border-border text-text-secondary my-1  sm:p-2">
        <div className="flex items-center">
            {iconRight ? (<><span>{text}</span>{component}</>) : icon}
        </div>
        
        <div className="flex w-full">
            {iconRight ? icon : (<><span>{text}</span>{component}</>)}
        </div>
            
    </div>
  )
}

export default Bean