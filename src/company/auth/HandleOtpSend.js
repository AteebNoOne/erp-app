import config from "../../config.json";

export const handleVerificationMethodChange = async (event,setVerificationMethod) => {
    
  const API_URL = config.API_URL;
  const phone = localStorage.getItem("Phone");
  const email = localStorage.getItem("Email");
  const id = localStorage.getItem("id");
  const option = event.target.value;
  setVerificationMethod(event.target.value)
  console.log(option)
  
  let response;
  if (option === "Email") {
    response = await fetch(`${API_URL}/demo/generate-login-otp`, {

      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        option: "Email",
        id: id,
        email: email,
        phone: null,
      }),
    });
    console.log(response)
  } else if (option === "Phone") {
    response = await fetch(`${API_URL}/demo/generate-login-otp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        option: "SMS",
        id: id,
        email: null,
        phone: phone,
      }),
    });
  }
  if (response.ok) {
    // Redirect to the OTP verification page
  } else {
    console.log("Sending Code Error!");
    
  }
};
