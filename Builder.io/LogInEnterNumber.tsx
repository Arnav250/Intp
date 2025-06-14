"use client";
import * as React from "react";
import { LoginHeader } from "./LoginHeader";
import { InputField } from "./InputField";
import { VerificationButton } from "./VerificationButton";

export default function LogInEnterNumber() {
  const handleSendVerification = () => {
    // Handle verification code sending logic
    console.log("Sending verification code...");
  };

  return (
    <main className="overflow-hidden text-sm text-center bg-white max-w-[360px] text-neutral-400">
      <section className="flex relative flex-col justify-center py-5 w-full aspect-[0.563]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/88e8b9b92525e6e0bc394807d14742b0134a63ce?placeholderIfAbsent=true&apiKey=700b9196e1b3429a948f3fa67f946676"
          alt="Background"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col px-16 py-20 w-full aspect-[0.6]">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c25216c3197b384d0a547c6542f2b2c16484bd5?placeholderIfAbsent=true&apiKey=700b9196e1b3429a948f3fa67f946676"
            alt="Inner background"
            className="object-cover absolute inset-0 size-full"
          />

          <LoginHeader
            logoSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/ee5e11600b9b856cde96b41ca12a500bf7183e15?placeholderIfAbsent=true&apiKey=700b9196e1b3429a948f3fa67f946676"
            title="Please enter your mobile number or email address for verification"
          />

          <form className="flex flex-col mt-6 space-y-4">
            <InputField
              placeholder="Enter mobile number"
              type="tel"
            />

            <div className="self-center text-neutral-400">
              or
            </div>

            <InputField
              placeholder="Enter email address"
              type="email"
            />

            <VerificationButton
              text="Send Verification Code"
              onClick={handleSendVerification}
            />
          </form>
        </div>
      </section>
    </main>
  );
}
