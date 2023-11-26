import ErrorIcon from "./icons/Error";
import ValidIcon from "./icons/Valid";

export default function Input(props) {
  const inputGroupClassName = `input-group ${props.isTouched && (props.isValid ? "valid" : "invalid")}`;

  return (
    <div className={inputGroupClassName}>
      <label htmlFor={props.name}>{props.label}</label>
      <input
        className="input"
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={(e) => props.onChange(e)}
      />
      <span className="input-error">{props.isTouched && !props.isValid && props.errorMsg}</span>
      <div className="input__icon">
        {props.isTouched && (props.isValid ? <ValidIcon /> : <ErrorIcon />)}
      </div>
    </div>
  );
}
