import React, { useState } from "react";
import axios from 'axios';
function CreateProductPage() {
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("");
  const [itemNumber, setItemNumber] = useState("");
  const [oldItemNumber, setOldItemNumber] = useState("");
  const [itemTotalWeight, setItemTotalWeight] = useState(0);
  const [itemLength, setItemLength] = useState(0);
  const [itemBreadth, setItemBreadth] = useState(0);
  const [itemHeight, setItemHeight] = useState(0);
  const [materialLength, setMaterialLength] = useState(0);
  const [materialBreadth, setMaterialBreadth] = useState(0);
  const [materialHeight, setMaterialHeight] = useState(0);
  const [secondaryImageUrl, setSecondaryImageUrl] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const newItem = {
      itemName,
      itemCategory,
      itemNumber,
      oldItemNumber,
      itemTotalWeight,
      itemLength,
      itemBreadth,
      itemHeight,
      materialLength,
      materialBreadth,
      materialHeight,
      secondaryImageUrl,
    };

    createProduct(
      newItem.itemName,
      newItem.itemCategory,
      newItem.itemNumber,
      newItem.oldItemNumber,
      newItem.itemTotalWeight,
      newItem.itemLength,
      newItem.itemBreadth,
      newItem.itemHeight,
      newItem.materialLength,
      newItem.materialBreadth,
      newItem.materialHeight,
      newItem.secondaryImageUrl
    )
      .then((data) => {
        console.log("Product created:", data);
        // Do something with the response data, e.g. show a success message
      })
      .catch((error) => {
        console.error("Error creating product:", error);
        // Do something with the error, e.g. show an error message
      });
  }

  const API_URL = 'http://localhost:4040';

  async function createProduct(itemName, itemCategory, itemNumber, oldItemNumber, itemTotalWeight, itemLength, itemBreadth, itemHeight, materialLength, materialBreadth, materialHeight, secondaryImageUrl) {
    try {
      const { data } = await axios.post(`${API_URL}/products/`, {
        itemName,
        itemCategory,
        itemNumber,
        oldItemNumber,
        itemTotalWeight,
        itemLength,
        itemBreadth,
        itemHeight,
        materialLength,
        materialBreadth,
        materialHeight,
        secondaryImageUrl
      });
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  return (
    <div>
      <h1>Create Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Item Name:</label>
          <input
            type="text"
            value={itemName}
            onChange={(event) => setItemName(event.target.value)}
          />
        </div>
        <div>
          <label>Item Category:</label>
          <input
            type="text"
            value={itemCategory}
            onChange={(event) => setItemCategory(event.target.value)}
          />
        </div>
        <div>
          <label>Item Number:</label>
          <input
            type="text"
            value={itemNumber}
            onChange={(event) => setItemNumber(event.target.value)}
          />
        </div>
        <div>
          <label>Old Item Number:</label>
          <input
            type="text"
            value={oldItemNumber}
            onChange={(event) => setOldItemNumber(event.target.value)}
          />
        </div>
        <div>
          <label>Item Total Weight:</label>
          <input
            type="number"
            value={itemTotalWeight}
            onChange={(event) => setItemTotalWeight(Number(event.target.value))}
          />
        </div>
        <div>
          <label>Item Length:</label>
          <input
            type="number"
            value={itemLength}
            onChange={(event) => setItemLength(Number(event.target.value))}
          />
        </div>
        <div>
          <label>Item Breadth:</label>
          <input
            type="number"
            value={itemBreadth}
            onChange={(event) => setItemBreadth(Number(event.target.value))}
          />
        </div>
        <div>
          <label>Item Height:</label>
          <input
            type="number"
            value={itemHeight}
            onChange={(event) => setItemHeight(Number(event.target.value))}
          />
        </div>
        <div>
          <label>Material Length:</label>
          <input
            type="number"
            value={materialLength}
            onChange={(event) => setMaterialLength(Number(event.target.value))}
          />
        </div>
        <div>
          <label>Material Breadth:</label>
          <input
            type="number"
            value={materialBreadth}
            onChange={(event) => setMaterialBreadth(Number(event.target.value))}
          />
        </div>
        <div>
          <label>Material Height:</label>
          <input
            type="number"
            value={materialHeight}
            onChange={(event) => setMaterialHeight(Number(event.target.value))}
          />
        </div>
        <div>
          <label>Secondary Image URL:</label>
          <input
            type="text"
            value={secondaryImageUrl}
            onChange={(event) => setSecondaryImageUrl(event.target.value)}
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateProductPage;
