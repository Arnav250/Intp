"use client";
import * as React from "react";

interface LoginHeaderProps {
  logoSrc: string;
  title: string;
}

export const LoginHeader: React.FC<LoginHeaderProps> = ({ logoSrc, title }) => {
  return (
    <header className="flex flex-col items-center">
      <img
        src={logoSrc}
        alt="Company Logo"
        className="object-contain w-20 aspect-square"
      />
      <p className="mt-10 text-neutral-500 text-center">
        {title}
      </p>
    </header>
  );
};
