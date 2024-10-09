import css from "./Button.module.css";

const Button = ({ title, icon, type = "button", ...props }) => {
  return (
    <button className={css.button} type={type} {...props}>
      {!!icon && icon}
      {title}
    </button>
  );
};

export default Button;
