import { useState, useEffect } from "react";
import config from '../../config.json';

function Filter(props) {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [itemCategories, setItemCategories] = useState([]);

  const API_URL = config.API_URL; // Change this to the URL of your API

  useEffect(() => {
    // make the API call here
    const apiUrl = `${API_URL}/products/categories`;
    console.log(apiUrl)
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setItemCategories(data));
  }, []);

  const handleFilterChange = (event) => {
    const selectedCategory = event.target.value;
    setSelectedFilter(selectedCategory);
    if (selectedCategory === "all") {
      props.onSelect("");
    } else {
      props.onSelect(selectedCategory);
    }
  };
  

  return (
    <div>
      <label htmlFor="filter">Filter:</label>
      <select id="filter" value={selectedFilter} onChange={handleFilterChange}>
        <option value="all">All</option>
        {itemCategories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filter;
