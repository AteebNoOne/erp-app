import React, { useState, useEffect } from "react";
import config from "../../config.json";

function CompanySetup(props) {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    fetch("https://api.exchangerate-api.com/v4/latest/USD")
      .then((response) => response.json())
      .then((data) => {
        setCurrencies(Object.keys(data.rates));
      })
      .catch((error) => {
        console.error("Error fetching currencies:", error);
      });
  }, []);

  const handleCurrencyChange = (event) => {
    props.setPrimaryCurrency(event.target.value);
  };

  const dateFormats = config.dateFormats;
  const currencyFormat = config.currencyFormat;
  const countries = config.country;

  const handleCompanyNameChange = (event) => {
    props.setCompanyName(event.target.value);
  };

  const handleCompanyAddressChange = (event) => {
    props.setCompanyAddress(event.target.value);
  };

  const handleCompanyAddress2Change = (event) => {
    props.setCompany2Address(event.target.value);
  };

  const handleFormatChange = (event) => {
    props.setCurrencyFormat(event.target.value);
  };

  const handleDecimalChange = (event) => {
    props.setNumDecimals(parseInt(event.target.value));
  };

  return (
    <div>
      <label>
        Company/Organization name<span style={{ color: "red" }}>*</span>
        <br />
        <input
          className="input_w"
          type="name"
          value={props.companyName}
          onChange={handleCompanyNameChange}
        />
      </label>
      <br />
      <label>
        Company/Organization Address<span style={{ color: "red" }}>*</span>
        <br />
        <input
        className="input_w"
          type="address"
          value={props.companyAddress}
          onChange={handleCompanyAddressChange}
        />
        <br />
        <br />
        <input
        className="input_w"
          type="address"
          value={props.company2Address}
          onChange={handleCompanyAddress2Change}
        />
      </label>
      <br />
      <div className="select_w_options">
        <label htmlFor="country-select">Select Country:</label>
        <div className="select_wrapper">
          <select id="country-select">
            {countries.map((country, index) => (
              <option key={index} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
          <div className="select_w_arrow"></div>
        </div>
      </div>
      <div className="select_options_container">
        <div className="select_options">
          <label htmlFor="date-format-select">Select Date Format:</label>
          <div className="select_wrapper">
            <select id="date-format-select">
              {dateFormats.map((format, index) => (
                <option key={index} value={format}>
                  {format}
                </option>
              ))}
            </select>
            <div className="select_arrow"></div>
          </div>
        </div>
        <div className="select_options">
          <label htmlFor="currency-select">Select Primary Currency:</label>
          <div className="select_wrapper">
            <select id="currency-select" onChange={handleCurrencyChange}>
              {currencies.map((currency, index) => (
                <option key={index} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
            <div className="select_arrow"></div>
          </div>
        </div>
      </div>

      <div className="select_options_container">
        <div className="select_options">
          <label htmlFor="date-format-select">Currency Format:</label>
          <div className="select_wrapper">
            <select id="date-format-select">
            {currencyFormat.map((format, index) => (
                <option key={index} value={format}>
                  {format}
                </option>
              ))}
            </select>
            <div className="select_arrow"></div>
          </div>
        </div>
        <div className="select_options">
          <label htmlFor="currency-select">No. of Decimals:</label>
          <div className="select_wrapper">
            <input  id="currency-select" onChange={handleDecimalChange}>
            </input>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanySetup;
