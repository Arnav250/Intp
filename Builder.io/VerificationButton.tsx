"use client";

interface VerificationButtonProps {
  onClick?: () => void;
}

export const VerificationButton: React.FC<VerificationButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute shrink-0 w-60 h-12 text-sm font-bold text-center text-white bg-red-600 cursor-pointer border-[none] left-[60px] rounded-[40px] top-[492px] max-md:left-2/4 max-md:-translate-x-2/4 max-sm:inset-x-5 max-sm:w-auto max-sm:top-[400px]"
    >
      Send Verification Code
    </button>
  );
};
