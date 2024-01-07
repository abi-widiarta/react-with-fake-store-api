const Button = (props) => {
  const { children, type, variantClass, onClick = () => {} } = props;
  return (
    <button onClick={onClick} className={`px-4 text-center py-2  rounded-md font-medium transtion duration-300 ${variantClass}`}>
      {children}
    </button>
  );
};

export default Button;
