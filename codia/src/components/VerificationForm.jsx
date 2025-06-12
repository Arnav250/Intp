import React, { useState } from 'react'
import Logo from './Logo'
import InputField from './InputField'
import SubmitButton from './SubmitButton'
import '../styles/VerificationForm.css'

function VerificationForm() {
  const [mobileNumber, setMobileNumber] = useState('')
  const [emailAddress, setEmailAddress] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Verification code requested for:', { mobileNumber, emailAddress })
  }

  return (
    <main className="verification-container">
      <div className="background-pattern"></div>
      
      <section className="verification-content">
        <header className="verification-header">
          <Logo />
          <p className="verification-description">
            Please enter your mobile number or <br />
            email address for verification
          </p>
        </header>

        <form className="verification-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <InputField
              type="tel"
              placeholder="Enter mobile number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              id="mobile-number"
            />
            
            <span className="separator">or</span>
            
            <InputField
              type="email"
              placeholder="Enter email address"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
              id="email-address"
            />
          </div>

          <SubmitButton />
        </form>
      </section>
    </main>
  )
}

export default VerificationForm
