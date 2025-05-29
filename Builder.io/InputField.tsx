"use client";

interface InputFieldProps {
  type: "text" | "email";
  placeholder: string;
  className?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  type,
  placeholder,
  className,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`box-border absolute shrink-0 px-4 py-0 w-60 h-12 text-sm rounded-lg border-2 border-gray-200 border-solid text-neutral-400 ${className}`}
    />
  );
};
