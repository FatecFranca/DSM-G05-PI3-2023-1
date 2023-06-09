import React, { InputHTMLAttributes, useRef } from "react";
import { useFormContext } from "react-hook-form";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  htmlFor: string;
  registerInput: string;
}

const Input: React.FC<InputProps> = ({
  title,
  htmlFor,
  registerInput,
  ...inputProps
}) => {
  const methods = useFormContext();
  return (
    <div className="mt-12">
      <div className="">
        <label className="text-xl" htmlFor={htmlFor}>
          {title}
        </label>
        <input
          {...methods.register(registerInput)}
          className="focus:outline-none w-full border border-solid border-blackMain rounded-2xl p-5 mt-2  bg-blackMain bg-opacity-10 placeholder:text-black placeholder:text-lg text-black text-lg"
          {...inputProps}
        />
      </div>
    </div>
  );
};

export default Input;
