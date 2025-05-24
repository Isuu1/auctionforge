import React from "react";

interface ButtonProps {
  text: string;
  icon?: React.ReactNode;
  variant: "primary" | "secondary";
  size: "small" | "medium" | "large";
}

const Button: React.FC<ButtonProps> = ({ text, icon, variant, size }) => {
  const baseStyles = "rounded-full border-0 cursor-pointer transition-all";

  const sizeStyles = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-3 text-base",
    large: "px-6 py-3 text-lg",
  };

  const variantStyles = {
    primary:
      "bg-yellow-500 text-white hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-blue-500",
    secondary:
      "bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-gray-300",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]}`}
    >
      {text}
      {icon && <span>{icon}</span>}
    </button>
  );
};

export default Button;
