"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Film, Popcorn, Pizza, Clapperboard, Camera, Ticket } from "lucide-react"

export default function Component() {
  const [mobileNumber, setMobileNumber] = useState("")
  const [emailAddress, setEmailAddress] = useState("")

  return (
    <div className="min-h-screen bg-rose-50 relative overflow-hidden">
      {/* Background decorative icons */}
      <div className="absolute inset-0 opacity-20">
        <Film className="absolute top-8 left-6 w-8 h-8 text-rose-300 rotate-12" />
        <Popcorn className="absolute top-16 right-8 w-6 h-6 text-rose-300 -rotate-12" />
        <Pizza className="absolute top-32 left-12 w-7 h-7 text-rose-300 rotate-45" />
        <Clapperboard className="absolute top-48 right-6 w-8 h-8 text-rose-300 -rotate-6" />
        <Camera className="absolute bottom-32 left-8 w-6 h-6 text-rose-300 rotate-12" />
        <Ticket className="absolute bottom-48 right-12 w-7 h-7 text-rose-300 -rotate-12" />
        <Film className="absolute bottom-16 left-16 w-5 h-5 text-rose-300 rotate-45" />
        <Popcorn className="absolute top-64 left-4 w-6 h-6 text-rose-300 -rotate-45" />
        <Pizza className="absolute bottom-64 right-4 w-6 h-6 text-rose-300 rotate-12" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 py-12">
        {/* Logo */}
        <div className="mb-16">
          <div className="bg-red-600 text-white px-6 py-3 rounded-lg transform -rotate-3 shadow-lg">
            <span className="text-2xl font-bold">my</span>
          </div>
        </div>

        {/* Content */}
        <div className="w-full max-w-sm space-y-8">
          {/* Heading */}
          <div className="text-center">
            <p className="text-gray-600 text-base leading-relaxed">
              Please enter your mobile number or email address for verification
            </p>
          </div>

          {/* Form */}
          <div className="space-y-6">
            {/* Mobile number input */}
            <div>
              <Input
                type="tel"
                placeholder="Enter mobile number"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                className="w-full h-12 px-4 border border-gray-200 rounded-lg bg-white text-gray-700 placeholder:text-gray-400 focus:border-red-500 focus:ring-1 focus:ring-red-500"
              />
            </div>

            {/* Or divider */}
            <div className="text-center">
              <span className="text-gray-400 text-sm">or</span>
            </div>

            {/* Email input */}
            <div>
              <Input
                type="email"
                placeholder="Enter email address"
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
                className="w-full h-12 px-4 border border-gray-200 rounded-lg bg-white text-gray-700 placeholder:text-gray-400 focus:border-red-500 focus:ring-1 focus:ring-red-500"
              />
            </div>
          </div>

          {/* Submit button */}
          <div className="pt-8">
            <Button
              className="w-full h-12 bg-red-600 hover:bg-red-700 text-white font-medium rounded-full shadow-lg transition-colors"
              onClick={() => console.log("Send verification code")}
            >
              Send Verification Code
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
