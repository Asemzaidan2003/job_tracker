const TextInput = ({ text, name, value, onChange }) => {
  return (
    <div className="w-full">
      <input
        type="text"
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
