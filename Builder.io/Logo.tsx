interface LogoProps {
  src: string;
  alt: string;
}

export const Logo: React.FC<LogoProps> = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="absolute shrink-0 w-20 h-20 left-[140px] top-[100px] max-md:left-2/4 max-md:-translate-x-2/4 max-sm:top-20 max-sm:left-2/4 max-sm:-translate-x-2/4 max-sm:h-[60px] max-sm:w-[60px]"
    />
  );
};
