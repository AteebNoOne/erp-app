import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Do something with the search term
    console.log(searchTerm);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <form onSubmit={handleSearch}>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search product here"
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="submit">
          <FaSearch />
        </button>
      </div>
    </form>
  );
}

export default SearchBar;