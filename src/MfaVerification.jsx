"use client"

import { useState, useEffect } from "react"
import { Link, useNavigate, useLocation } from "react-router-dom"

function MfaVerification() {
  const [verificationCode, setVerificationCode] = useState("")
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [countdown, setCountdown] = useState(60)
  const [generatedCode, setGeneratedCode] = useState("")
  const navigate = useNavigate()
  const location = useLocation()
  const username = location.state?.username || "User"

  // Redirect if accessed directly without coming from login
  useEffect(() => {
    if (!location.state?.username) {
      navigate("/login", { replace: true })
    }
  }, [location.state, navigate])

  // Generate a random 6-digit code when component mounts
  useEffect(() => {
    const code = Math.floor(100000 + Math.random() * 900000).toString()
    setGeneratedCode(code)
    // In a real app, this would be sent to the user's email or phone
    console.log("Generated MFA code:", code)
  }, [])

  // Countdown timer for code expiration
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000)
      return () => clearTimeout(timer)
    }
  }, [countdown])

  const handleChange = (e) => {
    setVerificationCode(e.target.value)
  }

  const validate = () => {
    const newErrors = {}

    if (!verificationCode.trim()) {
      newErrors.code = "Verification code is required"
    } else if (verificationCode.length !== 6) {
      newErrors.code = "Verification code must be 6 digits"
    }

    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validate()

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true)

      // Simulate API call for verification
      setTimeout(() => {
        if (verificationCode === generatedCode) {
          alert("MFA verification successful! You are now logged in.")
          navigate("/dashboard")
        } else {
          setErrors({ code: "Invalid verification code" })
        }
        setIsSubmitting(false)
      }, 1000)
    } else {
      setErrors(newErrors)
    }
  }

  const resendCode = () => {
    // Generate a new code
    const newCode = Math.floor(100000 + Math.random() * 900000).toString()
    setGeneratedCode(newCode)
    setCountdown(60)

    // In a real app, this would be sent to the user's email or phone
    console.log("New MFA code:", newCode)
    alert("A new verification code has been sent to your registered email/phone.")
  }

  return (
    <div
      className="min-h-screen bg-cover flex flex-col"
      style={{
        backgroundImage: `url('/images/background.png')`,
        backgroundPosition: "center bottom",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Header */}
      <header className="p-6 flex justify-between items-center">
        <div className="flex items-center">
          <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-2 text-2xl font-bold text-white">Group 19</span>
        </div>
        <div className="flex gap-6">
          <Link to="/login" className="text-white hover:underline font-semibold">
            Login
          </Link>
          <Link to="/register" className="text-white hover:underline">
            Register
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center">
        <form onSubmit={handleSubmit} className="w-full max-w-md px-6">
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-white">Two-Factor Authentication</h2>
              <p className="text-white mt-2">
                Hi {username}, please enter the 6-digit verification code sent to your registered email/phone.
              </p>
            </div>

            {/* Verification Code Input */}
            <div className="relative">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full overflow-hidden flex items-center">
                <div className="pl-4 pr-2">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  name="verificationCode"
                  placeholder="Enter 6-digit code"
                  value={verificationCode}
                  onChange={handleChange}
                  maxLength={6}
                  className="w-full py-4 px-2 bg-transparent text-white placeholder-white placeholder-opacity-70 focus:outline-none"
                />
              </div>
              {errors.code && <p className="text-red-300 text-sm mt-1">{errors.code}</p>}
            </div>

            {/* Code expiration countdown */}
            <div className="text-center">
              <p className="text-white text-sm">
                Code expires in: <span className="font-bold">{countdown} seconds</span>
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm text-white font-bold py-4 px-4 rounded-full transition duration-300 flex justify-center"
            >
              {isSubmitting ? (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                "VERIFY"
              )}
            </button>

            {/* Resend Code Button */}
            <div className="text-center">
              <button type="button" onClick={resendCode} className="text-white text-sm hover:underline">
                Didn't receive a code? Resend
              </button>
            </div>

            {/* Back to Login */}
            <div className="text-center mt-4">
              <Link to="/login" className="text-white text-sm hover:underline">
                ← Back to Login
              </Link>
            </div>
          </div>
        </form>
      </main>

      {/* Footer */}
      <footer className="p-6 text-white">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link to="/about" className="hover:underline">
              About Us
            </Link>
            <Link to="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:underline">
              Terms Of Use
            </Link>
          </div>
          <div>
            <p>© 2025 All Rights Reserved | Design By Group 19</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default MfaVerification
