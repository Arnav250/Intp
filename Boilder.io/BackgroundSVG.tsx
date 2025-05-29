export const BackgroundSVG = () => {
  return (
    <svg
      width="360"
      height="640"
      viewBox="0 0 360 640"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className="background absolute left-[-140px] top-0 w-[640px] h-[640px] flex-shrink-0"
    >
      <rect
        x="-140"
        width="640"
        height="640"
        fill="url(#pattern0_19_2)"
        fillOpacity="0.25"
      />
      <path
        d="M480 320C480 485.685 345.685 620 180 620C14.3146 620 -120 485.685 -120 320C-120 154.315 14.3146 20 180 20C345.685 20 480 154.315 480 320Z"
        fill="url(#paint0_radial_19_2)"
      />
      <defs>
        <pattern
          id="pattern0_19_2"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_19_2" transform="scale(0.00159744)" />
        </pattern>
        <radialGradient
          id="paint0_radial_19_2"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(180 320) rotate(93.5509) scale(522.027)"
        >
          <stop offset="0.4375" stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
          <stop offset="1" stopColor="white" stopOpacity="0.53" />
        </radialGradient>
      </defs>
    </svg>
  );
};
