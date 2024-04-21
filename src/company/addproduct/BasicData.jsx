import "./BasicData.css";
import { useState } from "react";
import Measure from "./MeasureInput";

function BasicData() {
  const [itemCategory, setItemCategory] = useState("");
  const [itemNumber, setItemNumber] = useState("");
  const [oldItemNumber, setOldItemNumber] = useState("");
  const [secondaryImage, setSecondaryImage] = useState("");

  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");


  const [HSNCode, setHSNCode] = useState("");
  const [materialALength, setMaterialALength] = useState("");
  const [materialABreadth, setMaterialABreadth] = useState("");
  const [materialAHeight, setMaterialAHeight] = useState("");

  const [ pricePerMaster, setPricePerMaster] = useState("");
  const [ preferredVendor, setPreferredVendor] = useState("");

  const [reason, setReason] = useState("");
  const [buyername, setBuyername] = useState("");
  const [buyeragent, setBuyeragent] = useState("");

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

const handleHSNCodeChange = (event) => {
  setHSNCode(event.target.value);
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

  const handlePricePerMaster = (event) => {
    setPricePerMaster(event.target.value);
  };

  const handlePreferredVendor = (event) => {
    setPreferredVendor(event.target.value);
  };


  const handleReasonChange = (event) => {
    setReason(event.target.value);
  };

  const handleBuyerNameChange = (event) => {
    setBuyername(event.target.value);
  };

  const handleBuyerAgentChange = (event) => {
    setBuyeragent(event.target.value);
  };


  return (
    <div >
      <div className="my-line" >
        <div className="select_w_options">
          <label htmlFor="item-select">Select Item Category</label>
          <div className="select_wrapper">
            <select value={itemCategory} onChange={handleItemCategoryChange}>
              <option value="">Please select</option>
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
              <option value="category3">Category 3</option>
            </select>
            <div className="select_w_arrow"></div>
          </div>
        </div>
        <label>
          *Item number
          <br />
          <input
            value={itemNumber}
            onChange={handleItemNumberChange}
            placeholder="CSD-091189"
          />
        </label>

        <label>
          *Old item number
          <br />
          <input 
                      value={oldItemNumber}
                      onChange={handleOldItemNumberChange}
                      placeholder="CSD-091189" />
        </label>
        <div className="select_w_options">
          <label htmlFor="image-select">Add secondary images </label>
          <div className="select_wrapper">
          <select value={secondaryImage} onChange={handleSecondaryImageChange}>
          <option value="">Please select</option>
            <option value="secondary">Secondary Images</option>
            <option value="size">Size/Weight Images</option>
            </select>
            <div className="select_w_arrow"></div>
          </div>
        </div>
      </div>
      <div className="my-line" >
        <label>
          Item Name
          <input
            value={itemName}
            onChange={handleItemNameChange}
            placeholder="Item Name"
          />
        </label>
        <label>
          Description
          <input
            value={description}
            onChange={handleDescriptionChange}
            placeholder="Enter more details here"
          />
        </label>
        <label>
          <Measure option_name="Item Size"/>
        </label>
      </div>
      <h3>
        *Item Total Weight
      </h3>
      <div className="my-line">
      <label>-Material A <Measure /></label>
      <label>
      * HSN Code Of Final Product
          <br />
          <input
            value={HSNCode}
            onChange={handleHSNCodeChange}
            placeholder="CSD-091189"
          />
        </label>
        <label>* Item Inner Box Size <Measure /></label>
        </div>
        <h3>
        * Inner Per Master
      </h3>
      <div className="my-line">
      <label>
      Pieces Per Master
          <br />
          <input
            value={pricePerMaster}
            onChange={handlePricePerMaster}
            placeholder="Pieces Per Master"
          />
        </label>
        <label>Master Carton Dimensions <Measure /></label>
        <label>
        * Preferred Supplier/Vendor
          <br />
          <input
            value={preferredVendor}
            onChange={handlePreferredVendor}
            placeholder="Enter name of supplier/vendor"
          />
        </label>
      </div>
      <div className="my-line">
      <label>
      * Reason for sample
          <br />
          <input
            value={reason}
            onChange={handleReasonChange}
            placeholder="Enter your text"
          />
        </label>
        <label>
          <br />
          <input
            value={buyername}
            onChange={handleBuyerNameChange}
            placeholder="Buyer"
          />
        </label>
        <label>
          <br />
          <input
            value={buyeragent}
            onChange={handleBuyerAgentChange}
            placeholder="Buyer Agent"
          />
        </label>
        <button className="button" >Next &#8594;</button>
      </div>

    </div>
  );
}

export default BasicData;
