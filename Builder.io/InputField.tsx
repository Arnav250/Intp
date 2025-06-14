"use client";
import * as React from "react";

interface InputFieldProps {
  placeholder: string;
  type?: "text" | "email" | "tel";
  className?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  type = "text",
  className = ""
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`p-4 rounded-lg border-2 border-gray-200 border-solid w-full text-neutral-400 bg-white ${className}`}
    />
  );
};
