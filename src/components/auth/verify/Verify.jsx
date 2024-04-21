import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import OtpInput from "otp-input-react";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "../../../firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import Home from "../../dashboard/Home";

const Verify = ({ Username,email,password,confirmPassword,acceptTerms }) => {
  console.log("Username",Username)
  console.log("Email",email)
  console.log("Pass",password)
  console.log("At Verify",confirmPassword)
  console.log("Accept Terms : ",acceptTerms)
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [isVerified,setisVerified] = useState(false);

  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            
            onSignup();
          },
          "expired-callback": () => {},
        },
        auth
      );
    }
  }

  function onSignup() {
    setLoading(true);
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+" + ph;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
        toast.success("OTP sent successfully!");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        submitFormToApi();
        setLoading(false);
        setisVerified(true);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  function submitFormToApi() {
    const formatPh = "+" + ph;
    const formData = {
      username: Username,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      acceptTerms: acceptTerms,
      phone: formatPh
    };
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    };
    
    fetch('http://192.168.18.12:4000/accounts/register', requestOptions)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  }
  
  return (
    <section className="bg-emerald-500 flex items-center justify-center h-screen">
      <div>
        <Toaster toastOptions={{ duration: 4000 }} />
        <div id="recaptcha-container"></div>
        {isVerified ? (
          <Home />
        ) : (
          <div className="w-80 flex flex-col gap-4 rounded-lg p-4 bg-gray-100">
            <h1 className="text-center leading-normal text-black font-medium text-3xl mb-6">
              Verify
              <br /> ERP Application
            </h1>
            {showOTP ? (
              <>
                <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
                  <BsFillShieldLockFill size={30} />
                </div>
                <label
                  htmlFor="otp"
                  className="font-bold text-xl text-black text-center"
                >
                  Enter your OTP
                </label>
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  OTPLength={6}
                  otpType="number"
                  disabled={false}
                  autoFocus
                  className="opt-container bg-white"
                ></OtpInput>
                <button
                  onClick={onOTPVerify}
                  className="
                  w-full mt-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded"
                >
                  {loading ? (
                    <>
                      <CgSpinner size={20} className="animate-spin mr-2" />
                      Verifying...
                    </>
                  ) : (
                    "Verify"
                  )}
                </button>
              </>
            ) : (
              <>
                <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
                  <BsTelephoneFill size={30} />
                </div>
                <label
                  htmlFor="phone"
                  className="font-bold text-xl text-black text-center"
                >
                  Enter your phone number
                </label>
                <PhoneInput
                  country={"pk"}
                  value={ph}
                  onChange={setPh}
                  inputProps={{
                    name: "phone",
                    required: true,
                    autoFocus: true,
                  }}
                />
                <button
                  onClick={onSignup}
                  className="w-full mt-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded"
                >
                  {loading ? (
                    <>
                      <CgSpinner size={20} className="animate-spin mr-2" />
                      Sending OTP...
                    </>
                  ) : (
                    "Send OTP"
                  )}
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Verify;
