
const Button = ({
    component,
    text,
    icon,
    iconRight=false,
    bg_color,
    handleClick
}) => {
  return (
    <button
    onClick={handleClick}
    className={`flex justify-center space-x-2 p-1 rounded-full  border-2 ${bg_color} border-border text-text-primary  my-1 sm:p-2 cursor-pointer hover:bg-opacity-60 transition-colors active:bg-opacity-80`}>
        <div className="flex items-center">
            {iconRight ? (<><span>{text}</span>{component}</>) : icon}
        </div>
        <div>
            {iconRight ? icon : (<><span>{text}</span>{component}</>)}
        </div>
            
    </button>
  )
}

export default Button