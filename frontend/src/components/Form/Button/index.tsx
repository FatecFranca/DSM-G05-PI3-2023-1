import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  customClassButton?: string;
  customClassTitle?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    title,
    customClassButton,
    customClassTitle,
    ...ButtonProps
  }: ButtonProps = props;
  return (
    <button
      type="submit"
      className={`w-full rounded-2xl p-5 text-xl hover:opacity-90 transition-all duration-1000 bg-blackMain ${customClassButton}`}
      {...ButtonProps}
    >
      <h1 className={`text-white ${customClassTitle}`}>{title}</h1>
    </button>
  );
};

export default Button;
