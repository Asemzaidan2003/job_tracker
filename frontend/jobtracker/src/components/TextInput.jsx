const TextInput = ({ text, name, value, onChange ,type}) => {
  const text_type = type || "text"
  return (
    <div className="w-full">
      <input
        type={text_type}
        name={name}
        className="bg-transparent focus:outline-none w-full placeholder:text-text-secondary"
        placeholder={text}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
