import { useState } from "react";

function DefaultScaleSelection() {
  const [size, setSize] = useState("");
  const [sizeUnit, setSizeUnit] = useState("inches");
  const [weight, setWeight] = useState("");
  const [weightUnit, setWeightUnit] = useState("kg");

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleSizeUnitChange = (event) => {
    setSizeUnit(event.target.value);
  };

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handleWeightUnitChange = (event) => {
    setWeightUnit(event.target.value);
  };

  return (
    <div>
      <label htmlFor="size">Size</label>
      <input
        id="size"
        type="number"
        value={size}
        onChange={handleSizeChange}
      />
      <select value={sizeUnit} onChange={handleSizeUnitChange}>
        <option value="inches">Inches</option>
        <option value="cm">Centimeters</option>
      </select>
      <label htmlFor="weight">Weight</label>
      <input
        id="weight"
        type="number"
        value={weight}
        onChange={handleWeightChange}
      />
      <select value={weightUnit} onChange={handleWeightUnitChange}>
        <option value="kg">Kg</option>
        <option value="pounds">Pounds</option>
      </select>
    </div>
  );
}

export default DefaultScaleSelection;
