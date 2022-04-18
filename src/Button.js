import "./Button.scss";

const Button = (props) => {
  return (
    <button className="Button" {...props}>
      {props.children}
    </button>
  );
};

export default Button;
