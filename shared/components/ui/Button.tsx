import React from "react";

//Styles
import styles from "./Button.module.scss";

interface ButtonProps {
  text: string;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ text, icon }) => {
  return (
    <button className={styles.button}>
      {text}
      {icon && <span>{icon}</span>}
    </button>
  );
};

export default Button;
