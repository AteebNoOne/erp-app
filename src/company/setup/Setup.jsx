import React, { useState } from "react";
import "./Setup.css";
import "./SubGroupInput.css";
import CompanySetup from "./CompanySetup";
import ItemSetup from "./ItemSetup";

function Setup() {
  const [primaryCurrency, setPrimaryCurrency] = useState("USD");
  const [companyName, setCompanyName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [company2Address, setCompany2Address] = useState("");
  const [currencyFormat, setCurrencyFormat] = useState("normal");
  const [numDecimals, setNumDecimals] = useState("1");
  const [nextOption, setNextOption] = useState(false);
  const [group, setGroup] = useState("Pillow");
  const [errorMessage, setErrorMessage] = useState("");

  const handleNextClick = () => {
    if (!companyName || !companyAddress) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    console.log("Company Name: ", companyName);
    console.log("Company Location: ", companyAddress);
    console.log("Primary Currency: ", primaryCurrency);
    console.log("Currency Format: ", currencyFormat);
    console.log("Number Decimals: ", numDecimals);
    setNextOption(true);
    setErrorMessage("")
  };

  return (
    <div>
      {nextOption ? (
        <div >
          <ItemSetup group={group} setGroup={setGroup} errorMessage={errorMessage} setErrorMessage={setErrorMessage}/>
        </div>
      ) : (
        <>
          <div className="setup-container">
            <h3>Company/Organization Setup</h3>
            {errorMessage && <div className="danger">{errorMessage}</div>}
            <CompanySetup
              companyName={companyName}
              setCompanyName={setCompanyName}
              companyAddress={companyAddress}
              setCompanyAddress={setCompanyAddress}
              company2Address={company2Address}
              setCompany2Address={setCompany2Address}
              currencyFormat={currencyFormat}
              setCurrencyFormat={setCurrencyFormat}
              numDecimals={numDecimals}
              setNumDecimals={setNumDecimals}
              primaryCurrency={primaryCurrency}
              setPrimaryCurrency={setPrimaryCurrency}
            />
            <button className="button-next" onClick={handleNextClick}>
              Next &#8594;
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Setup;
