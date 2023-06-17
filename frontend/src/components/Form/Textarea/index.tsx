import React, { InputHTMLAttributes, useRef } from "react";
import { useFormContext } from "react-hook-form";
interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  title: string;
  htmlFor: string;
  registerInput: string;
  validation?: any;
}

const Textarea: React.FC<TextAreaProps> = ({
  title,
  htmlFor,
  registerInput,
  validation,
  ...textareaProps
}) => {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();
  const errorMessage: any = errors[registerInput]?.message;
  return (
    <div className="mt-12 w-full">
      <div className="w-full">
        <label className="text-xl text-whiteMain" htmlFor={htmlFor}>
          {title}
        </label>
        <textarea
          {...register(registerInput, validation)}
          className="w-full focus:outline-none mt-2 p-5 bg-blackLight text-whiteMain rounded-2xl"
          rows={5}
          cols={35}
          {...textareaProps}
        ></textarea>
        {errorMessage && <span className="text-red-500">{errorMessage}</span>}
      </div>
    </div>
  );
};

export default Textarea;
