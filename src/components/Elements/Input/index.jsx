import Input from "./Input";
import Label from "./Label";

const InputForm = (props) => {
  const { id, title, type, placeholder } = props;
  return (
    <div className="mb-4">
      <Label title={title} htmlFor={id} />
      <Input placeholder={placeholder} id={id} name={id} type={type} />
    </div>
  );
};

export default InputForm;
