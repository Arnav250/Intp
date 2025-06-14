import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";

export const LogInEnterNumber = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-[360px] h-[640px] relative">
        <div className="w-full h-full relative">
          {/* Background image and overlay */}
          <div className="absolute w-full h-full">
            <div className="relative h-full">
              <img
                className="absolute w-full h-full object-cover"
                alt="Background"
                src="https://c.animaapp.com/mb5xgyvgETNOh2/img/image-1.png"
              />
              <img
                className="absolute w-[600px] h-[600px] top-5 left-1/2 -translate-x-1/2"
                alt="Ellipse"
                src="https://c.animaapp.com/mb5xgyvgETNOh2/img/ellipse-7.svg"
              />
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center pt-[100px]">
            {/* Logo */}
            <img
              className="w-20 h-20 object-cover mb-16"
              alt="Book my show logo"
              src="https://c.animaapp.com/mb5xgyvgETNOh2/img/book-my-show-logo.png"
            />

            {/* Instructions text */}
            <p className="font-['Roboto',Helvetica] font-normal text-neutral-500 text-sm text-center mb-10">
              Please enter your mobile number or <br />
              email address for verification
            </p>

            {/* Form inputs */}
            <Card className="w-60 border-2 border-[#e8e8e8] bg-transparent shadow-none mb-4">
              <CardContent className="p-0">
                <Input
                  className="h-12 border-none font-['Roboto',Helvetica] text-sm placeholder:text-[#aaaaaa] text-center"
                  placeholder="Enter mobile number"
                />
              </CardContent>
            </Card>

            <div className="font-['Roboto',Helvetica] font-normal text-[#aaaaaa] text-sm text-center my-2">
              or
            </div>

            <Card className="w-60 border-2 border-[#e8e8e8] bg-transparent shadow-none mb-10">
              <CardContent className="p-0">
                <Input
                  className="h-12 border-none font-['Roboto',Helvetica] text-sm placeholder:text-[#aaaaaa] text-center"
                  placeholder="Enter email address"
                />
              </CardContent>
            </Card>

            {/* Submit button */}
            <Button className="w-60 h-12 bg-[#d71921] hover:bg-[#c01820] rounded-[40px] font-['Roboto',Helvetica] font-bold text-white text-sm">
              Send Verification Code
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
