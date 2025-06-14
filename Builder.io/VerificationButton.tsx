"use client";
import * as React from "react";

interface VerificationButtonProps {
  text: string;
  onClick?: () => void;
}

export const VerificationButton: React.FC<VerificationButtonProps> = ({
  text,
  onClick
}) => {
  return (
    <button
      onClick={onClick}
      className="px-12 py-4 mt-20 font-bold text-white bg-red-600 rounded-[40px] w-full text-center"
    >
      {text}
    </button>
  );
};
