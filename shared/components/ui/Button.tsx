import React from "react";

//Styles
import styles from "./Button.module.scss";

interface ButtonProps {
  text: string;
  icon?: React.ReactNode;
  variant: "primary" | "secondary";
  size: "small" | "medium" | "large";
}

const Button: React.FC<ButtonProps> = ({ text, icon, variant, size }) => {
  return (
    <button className={`${styles.button} ${styles[variant]} ${styles[size]}`}>
      {text}
      {icon && <span>{icon}</span>}
    </button>
  );
};

export default Button;
