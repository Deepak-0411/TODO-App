import styles from "./Button.module.css";

const Button = ({ role, text, className = "", ...props }) => {
  let styleClass = "";

  switch (role) {
    case "deleteBtn":
      styleClass = styles.deleteBtn;
      break;
    case "addTask":
      styleClass = styles.addTaskBtn;
      break;
    case "cancel":
      styleClass = styles.cancelBtn;
      break;
    case "edit":
      styleClass = styles.editBtn;
      break;
    default:
      break;
  }

  return (
    <button className={`${styles.btn} ${styleClass} ${className}`} {...props}>
      {text}
    </button>
  );
};

export default Button;
