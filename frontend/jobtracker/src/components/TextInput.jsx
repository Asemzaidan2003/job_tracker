const TextInput = ({text}) => {
  return (
    <div>
      <input
        type="text"
        className="bg-transparent focus:outline-none w-20 sm:w-44 md:w-96"
        placeholder={`${text}`}
      />
    </div>
  )
}

export default TextInput