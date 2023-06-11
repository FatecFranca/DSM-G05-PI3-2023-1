import React, { InputHTMLAttributes, useRef } from "react";
import { useFormContext } from "react-hook-form";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  htmlFor: string;
  registerInput: string;
  customClassTitle?: string;
  customClassInput?: string;
}

const Input: React.FC<InputProps> = ({
  title,
  htmlFor,
  registerInput,
  customClassTitle,
  customClassInput,
  ...inputProps
}) => {
  const methods = useFormContext();
  return (
    <div className="mt-12 w-full">
      <div className="w-full">
        <label className={`text-xl ${customClassTitle}`} htmlFor={htmlFor}>
          {title}
        </label>
        <input
          {...methods.register(registerInput)}
          className={`focus:outline-none w-full border border-solid border-blackMain rounded-2xl p-5 mt-2  bg-blackMain bg-opacity-10 placeholder:text-black placeholder:text-lg text-black text-lg ${customClassInput}`}
          {...inputProps}
        />
      </div>
    </div>
  );
};

export default Input;
