import React from "react";
import styles from "./Button.module.css";

const Button = ({ role, text, className = "", ...props }) => {
  const styleClass = role === "deleteBtn" ? styles.delete : styles.addTask;

  return (
    <button className={`${styleClass} ${className}`} {...props}>
      {text}
    </button>
  );
};

export default Button;
