import { useState } from 'react';

function SortBy(props) {
  const [sortBy, setSortBy] = useState('bestMatch');



  const handleSortChange = (event) => {
    const selectedCategory = event.target.value;
    setSortBy(selectedCategory);
    if (selectedCategory === "bestMatch") {
      props.onSelect("");
    } else {
      props.onSelect(selectedCategory);
    }
  };

  return (
    <div>
      <label htmlFor="sort-by">Sort by:</label>
      <select id="sort-by" value={sortBy} onChange={handleSortChange}>
        <option value="bestMatch">Best Match</option>
        <option value="recentFirst">Recent First</option>
        <option value="oldestFirst">Oldest First</option>
        <option value="productIdAsc">Product ID Ascending</option>
        <option value="productIdDesc">Product ID Descending</option>
      </select>
    </div>
  );
}

export default SortBy;