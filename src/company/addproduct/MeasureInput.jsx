import React from "react";
import "./MeasureInput.css";

function Measure({ option_name }) {
  return (
    <div className="measure-container">
      <label>
        {option_name}
        <input placeholder="Length*" className="measure-input" />
        <input placeholder="Breadth*" className="measure-input" />
        <input placeholder="Height*" className="measure-input" />
      </label>
    </div>
  );
}

export default Measure;
