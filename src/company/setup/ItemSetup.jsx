import React, { useState } from "react";
import SubGroupInput from "./SubGroupInput";
import "./Setup.css";
import config from "../../config.json";
import Setup from "./Setup";

function ItemSetup(props) {
  const groupSelect = config.GroupSelect;
  const sizeSelect = config.SizeSelect;
  const weightSelect = config.WeightSelect;
  const [prevOption, setPrevOption] = useState(false);

  const errorMessage = props.errorMessage;

  const handlePrevClick = () => {
    setPrevOption(true);
  };

  const handleSaveClick = () => {
    //Handle Api
    props.setErrorMessage("Testing")
  };

  const handleGroupChange = (event) => {
    props.setGroup(event.target.value);
  };

  return (
    <div className="setup-container">
      {prevOption ? (
        <div>
          <Setup />
        </div>
      ) : (
        <div className="select_options">
          <h3>Item Setup Page</h3>
          {errorMessage && <div className="danger">{errorMessage}</div>}
          <label htmlFor="group-select">*Group</label>
          <div className="select_wrapper">
            <select id="group-select" onChange={handleGroupChange}>
              {groupSelect.map((format, index) => (
                <option key={index} value={format}>
                  {format}
                </option>
              ))}
            </select>
            <div className="select_arrow"></div>
          </div>
          <div>
            <SubGroupInput />
          </div>
          <label htmlFor="item-number">*Item Number</label>
          <input
            type="text"
            name="itemNumbering"
            placeholder="CSD-091189"
          ></input>
          <br />
          <label htmlFor="size-select">*Size Inches/Centimeter</label>
          <div className="select_wrapper">
            <select id="size-select" onChange={handleGroupChange}>
              {sizeSelect.map((format, index) => (
                <option key={index} value={format}>
                  {format}
                </option>
              ))}
            </select>
            <div className="select_arrow"></div>
          </div>
          <label htmlFor="weight-select">*Weight Selection</label>
          <div className="select_wrapper">
            <select id="weight-select" onChange={handleGroupChange}>
              {weightSelect.map((format, index) => (
                <option key={index} value={format}>
                  {format}
                </option>
              ))}
            </select>
            <div className="select_arrow"></div>
          </div>
          <div className="button-container">
            <button className="button-previous" onClick={handlePrevClick}>
              &#8592; Previous
            </button>
            <button className="button-save" onClick={handleSaveClick}>Save Details</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ItemSetup;
