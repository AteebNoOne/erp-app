import { useState } from "react";
import testProductImage from "../../assets/testproduct.jpeg";

function Product({ id, date, price, material, description }) {
  const [showDetails, setShowDetails] = useState(false);

  // Create a new Date object from the date string
  const formattedDate = new Date(date);

  // Format the date string using the Intl.DateTimeFormat() method
  const dateFormatter = new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedDateString = dateFormatter.format(formattedDate);

  const handleClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div>
      <img
        src={testProductImage}
        alt="product"
        onClick={handleClick}
        style={{ width: "300px", height: "300px" }} // set the size of the image
      />
      <div>
        <b>ID - {id}</b>
      </div>
      <div>Last updated on {formattedDateString}</div>
      {showDetails && (
        <div>
          <div>
            <b>Best selling Price</b>
            <br />
            {price}
          </div>
          <div>
            <b>Material</b>
            <br />
            {material}
          </div>
          <div>
            <b>Description</b>
            <br />
            {description}
          </div>
        </div>
      )}
    </div>
  );
}
export default Product;
