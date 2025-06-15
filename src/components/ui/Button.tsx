import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "outline-white";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500",
    secondary: "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500",
    outline:
      "border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white focus:ring-green-500",
    "outline-white":
      "border-2 border-white text-white hover:bg-white hover:text-green-600 focus:ring-white bg-transparent",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
