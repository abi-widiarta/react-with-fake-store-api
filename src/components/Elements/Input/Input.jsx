const Input = (props) => {
  const { id, name, type, placeholder } = props;
  return <input placeholder={placeholder} type={type} id={id} name={name} className="w-full border border-gray-200 rounded-md py-1 px-2 focus:outline-teal-500 text-sm" />;
};

export default Input;
