import React, { useState } from "react";
import OtpInput from "otp-input-react";
import "./Verify-Signup.css";
import SuccessMessage from "./SuccessMessage";

function VerifySignup() {
  const [Emailotp, setEmailOtp] = useState("");
  const [SMSotp, setSMSOtp] = useState("");
  const [EmailVerified, setEmailVerified] = useState(false);
  const [SMSVerified, setSMSVerified] = useState(false);
  const [bothVerified,setBothVerified] = useState(false);

  const handleEmailOtpChange = (otpValue) => {
    setEmailOtp(otpValue);
  };

  const handleSMSOtpChange = (otpValue) => {
    setSMSOtp(otpValue);
  };

  const handleSubmitEmailOtp = (event) => {
    event.preventDefault();
    console.log(Emailotp);
    setEmailVerified(true);
    if (SMSVerified) {
      setBothVerified(true);
    }
  };
  
  const handleSubmitSMSOtp = (event) => {
    event.preventDefault();
    console.log(SMSotp);
    setSMSVerified(true);
    if (EmailVerified) {
      setBothVerified(true);
    }
  };
  
  return (
    <div>
      {EmailVerified ? (
        <div className="otp-area"> 
        <p className="verified-text">Email verified</p>
        </div>
      ) : (
        <form className="otp-area" onSubmit={handleSubmitEmailOtp}>
          <h3>Verify SignUp Email</h3>
          <div>
            <label htmlFor="otp1">Enter Email OTP:</label>
            <div className="otp-input">
              <OtpInput
                value={Emailotp}
                onChange={handleEmailOtpChange}
                OTPLength={6}
                renderSeparator={<span>-</span>}
                renderInput={(props) => <input {...props} />}
              />
            </div>
          </div>
          <button className="verify-button" type="submit">Verify Email</button>
        </form>
      )}
      {SMSVerified ? (
        <div className="otp-area"> 
        <p className="verified-text">SMS verified</p>
        </div>
      ) : (
        <form className="otp-area" onSubmit={handleSubmitSMSOtp}>
          <h3>Verify SignUp Phone</h3>
          <div>
            <label htmlFor="otp2">Enter Phone OTP:</label>
            <div className="otp-input">
              <OtpInput
                value={SMSotp}
                onChange={handleSMSOtpChange}
                OTPLength={6}
                renderSeparator={<span>-</span>}
                renderInput={(props) => <input {...props} />}
              />
            </div>
          </div>
          <button className="verify-button" type="submit">Verify Phone</button>
        </form>
      )}
      {bothVerified && <SuccessMessage/>}
    </div>
  );
}

export default VerifySignup;
