import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { title, ...ButtonProps }: ButtonProps = props;
  return (
    <button
      type="submit"
      className="w-full rounded-2xl p-5 text-xl hover:opacity-90 transition-all duration-1000 bg-blackMain text-white"
      {...ButtonProps}
    >
      {title}
    </button>
  );
};

export default Button;
