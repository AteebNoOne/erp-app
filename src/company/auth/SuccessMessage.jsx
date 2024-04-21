import React, { useState, useEffect } from "react";
import "./SuccessMessage.css"; // import CSS file for styling

function SuccessMessage() {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    // set showMessage to true after 1 second
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 1000);

    // clean up timer on unmount
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // reload page after 5 seconds
    const timer = setTimeout(() => {
      window.location.reload();
    }, 5000);

    // clean up timer on unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`success-message ${showMessage ? "show" : ""}`}>
      <h1>Successfully Verified Login to continue</h1>
    </div>
  );
}

export default SuccessMessage;
