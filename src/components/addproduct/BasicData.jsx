import { useState } from "react";

function BasicData() {
  const [itemCategory, setItemCategory] = useState("");
  const [itemNumber, setItemNumber] = useState("");
  const [oldItemNumber, setOldItemNumber] = useState("");
  const [secondaryImage, setSecondaryImage] = useState("");
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [itemSizeLength, setItemSizeLength] = useState("");
  const [itemSizeBreadth, setItemSizeBreadth] = useState("");
  const [itemSizeHeight, setItemSizeHeight] = useState("");
  const [itemTotalWeight, setItemTotalWeight] = useState("");
  const [materialALength, setMaterialALength] = useState("");
  const [materialABreadth, setMaterialABreadth] = useState("");
  const [materialAHeight, setMaterialAHeight] = useState("");

  const handleItemCategoryChange = (event) => {
    setItemCategory(event.target.value);
  };

  const handleItemNumberChange = (event) => {
    setItemNumber(event.target.value);
  };

  const handleOldItemNumberChange = (event) => {
    setOldItemNumber(event.target.value);
  };

  const handleSecondaryImageChange = (event) => {
    setSecondaryImage(event.target.value);
  };

  const handleItemNameChange = (event) => {
    setItemName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleItemSizeLengthChange = (event) => {
    setItemSizeLength(event.target.value);
  };

  const handleItemSizeBreadthChange = (event) => {
    setItemSizeBreadth(event.target.value);
  };

  const handleItemSizeHeightChange = (event) => {
    setItemSizeHeight(event.target.value);
  };

  const handleItemTotalWeightChange = (event) => {
    setItemTotalWeight(event.target.value);
  };

  const handleMaterialALengthChange = (event) => {
    setMaterialALength(event.target.value);
  };

  const handleMaterialABreadthChange = (event) => {
    setMaterialABreadth(event.target.value);
  };

  const handleMaterialAHeightChange = (event) => {
    setMaterialAHeight(event.target.value);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h2>Basic Data</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div>
          <label>
            Select item category:
            <select value={itemCategory} onChange={handleItemCategoryChange}>
              <option value="">Please select</option>
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
              <option value="category3">Category 3</option>
            </select>
          </label>
          <br />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <div style={{ textAlign: "left" }}>
              <label style={{ display: "block", marginBottom: "10px" }}>
                *Item number:
                <br />
                <textarea
                  value={itemNumber}
                  onChange={handleItemNumberChange}
                  placeholder="CSD-091189"
                />
              </label>
            </div>
            <div style={{ marginLeft: "10px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "10px",
                  textAlign: "left",
                }}
              >
                *Old item number:
                <br />
                <textarea placeholder="CSD-091189" />
              </label>
            </div>
          </div>
        </div>
        <div>
          <label>
            Add secondary images or size/weight images:{" "}
            <select
              value={secondaryImage}
              onChange={handleSecondaryImageChange}
            >
              <option value="">Please select</option>
              <option value="secondary">Secondary Images</option>
              <option value="size">Size/Weight Images</option>
            </select>
          </label>
        </div>
      </div>
      <label>
        Item Name:
        <textarea
          value={itemName}
          onChange={handleItemNameChange}
          placeholder="Item Name"
        />
      </label>
      <br />
      <label>
        Description:
        <textarea
          value={description}
          onChange={handleDescriptionChange}
          placeholder="Enter more details here"
        />
      </label>
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div>
          <label>Item Size:</label>
          <div style={{ display: "flex" }}>
            <textarea
              value={itemSizeLength}
              onChange={handleItemSizeLengthChange}
              placeholder="Length*"
            />
            <textarea
              value={itemSizeBreadth}
              onChange={handleItemSizeBreadthChange}
              placeholder="Breadth*"
            />
            <textarea
              value={itemSizeHeight}
              onChange={handleItemSizeHeightChange}
              placeholder="Height*"
            />
          </div>
        </div>

        <div>
          <label>
            Item Total Weight:
            <br />
            <textarea
              value={itemTotalWeight}
              onChange={handleItemTotalWeightChange}
              placeholder="Total weight"
            />
          </label>
        </div>
      </div>
      <br />
      <div>
        <label>Material A:</label>
        <div style={{ display: "flex" }}>
          <textarea
            value={itemSizeLength}
            onChange={handleItemSizeLengthChange}
            placeholder="Length*"
          />
          <textarea
            value={itemSizeBreadth}
            onChange={handleItemSizeBreadthChange}
            placeholder="Breadth*"
          />
          <textarea
            value={itemSizeHeight}
            onChange={handleItemSizeHeightChange}
            placeholder="Height*"
          />
        </div>
      </div>
    </div>
  );
}

export default BasicData;
