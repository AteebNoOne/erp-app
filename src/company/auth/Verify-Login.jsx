import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import OtpInput from "otp-input-react";
import "./Verify-Login.css";
import config from "../../config.json";
import { handleVerificationMethodChange } from "./HandleOtpSend";
import Setup from "../setup/Setup";


function VerifyLogin() {
  const [verificationMethod, setVerificationMethod] = useState("");
  const [otp, setOtp] = useState("");
  const [verified, setVerified] = useState(localStorage.getItem("verified") === "true" || false);
  const [iscompanyVerified, setCompanyVerified] = useState(true);
  const id = localStorage.getItem("id");
  const API_URL = config.API_URL;

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`${API_URL}/demo/${id}`);
      const data = await response.json();
      if (data.isRegistered) {
        setCompanyVerified(true);
        localStorage.setItem("CompanyVerified",true);
        navigate("/company/dashboard");
      }
    };
    fetchUser();
  }, [API_URL, id]);

  const handleOtpChange = (otpValue) => {
    setOtp(otpValue);
  };

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Call the API to verify the OTP
    const response = await fetch(`${API_URL}/demo/verify-login-otp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        otp: otp,
      }),
    });
    if (response.ok) {
      setVerified(true);
      localStorage.setItem("verified", true);
      navigate("/company/dashboard"); // Add this line to redirect to the desired route
    } else {
      console.log("Verification Error!");
    }
  };
  

  return (
    <>
      {verified ? (
        iscompanyVerified ? (
          navigate("/company/dashboard")
        ) : (
          <div>
            <Setup />
          </div>
        )
      ) : (
        <div>
          <form onSubmit={handleSubmit}>
            <h2>Verify Login</h2>
            <div>
              {verificationMethod ? (
                <p>
                  Selected verification method:{" "}
                  <span className="para-bold">{verificationMethod}</span>
                </p>
              ) : (
                <div>
                  <label>
                    <input
                      type="radio"
                      value="Email"
                      checked={verificationMethod === "Email"}
                      onChange={(event) => {
                        handleVerificationMethodChange(
                          event,
                          setVerificationMethod
                        );
                      }}
                    />
                    Email
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="Phone"
                      checked={verificationMethod === "Phone"}
                      onChange={(event) => {
                        handleVerificationMethodChange(
                          event,
                          setVerificationMethod
                        );
                      }}
                    />
                    Phone
                  </label>
                </div>
              )}
            </div>
            {verificationMethod && (
              <div>
                <label htmlFor="otp">Enter OTP:</label>
                <div className="otp-input">
                  <OtpInput
                    value={otp}
                    onChange={handleOtpChange}
                    numInputs={6}
                    separator={<span>-</span>}
                  />
                </div>
              </div>
            )}
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </>
  );
}

export default VerifyLogin;
