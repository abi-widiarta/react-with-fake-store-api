const Label = (props) => {
  const { title, htmlFor } = props;
  return (
    <label className="block text-gray-600 font-bold mb-2 text-base" htmlFor={htmlFor}>
      {title}
    </label>
  );
};

export default Label;
