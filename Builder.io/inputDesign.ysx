"use client";

import { BackgroundSVG } from "./BackgroundSVG";
import { Logo } from "./Logo";
import { InputField } from "./InputField";
import { VerificationButton } from "./VerificationButton";

function InputDesign() {
  return (
    <main className="overflow-hidden relative mx-auto my-0 max-w-none bg-white h-[640px] w-[360px] max-md:w-full max-md:h-[640px] max-md:max-w-[360px] max-sm:w-full max-sm:max-w-screen-sm max-sm:h-screen max-sm:min-h-[640px]">
      <div>
        <BackgroundSVG />
      </div>

      <Logo src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c63110d67a88edc93e47c83ab1149abe817cfc7?placeholderIfAbsent=true" alt="BookMyShow Logo" />

      <p className="absolute h-8 text-sm text-center left-[68px] text-neutral-500 top-[220px] w-[225px] max-md:left-2/4 max-md:-translate-x-2/4 max-md:w-[225px] max-sm:inset-x-5 max-sm:w-auto max-sm:text-sm max-sm:top-[180px]">
        Please enter your mobile number or email address for verification
      </p>

      <div className="relative">
        <InputField
          type="text"
          placeholder="Enter mobile number"
          className="left-[60px] top-[276px] max-md:left-2/4 max-md:-translate-x-2/4 max-sm:inset-x-5 max-sm:top-60 max-sm:w-auto"
        />
      </div>

      <p className="absolute h-4 text-sm text-center left-[174px] text-neutral-400 top-[340px] w-[13px] max-md:left-2/4 max-md:-translate-x-2/4 max-sm:left-2/4 max-sm:-translate-x-2/4 max-sm:top-[300px]">
        or
      </p>

      <div className="relative">
        <InputField
          type="email"
          placeholder="Enter email address"
          className="left-[60px] top-[372px] max-md:left-2/4 max-md:-translate-x-2/4 max-sm:inset-x-5 max-sm:top-80 max-sm:w-auto"
        />
      </div>

      <VerificationButton />
    </main>
  );
}

export default InputDesign;
