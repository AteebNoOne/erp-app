import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SearchBar from './Searchbar';
import SortBy from './SortBy';
import Filter from './Filter';
import Product from './Product';
import Login from '../auth/login/Login';
import config from '../../config.json';
import axios from 'axios';


function Home() {

  const API_URL = config.API_URL; // Change this to the URL of your API

  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSort, setSelectedSort] = useState('bestMatch');
  const [sortedProducts, setSortedProducts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    fetch(`${API_URL}/products`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));

      fetch(`${API_URL}/accounts/get-refreshtoken`)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    //console.log("COOKIE",document.cookies.refreshToken);
    
    //console.log("REFRESH TOKEN", localStorage.getItem(cookies.refreshToken));
    const filteredProducts = selectedCategory
      ? products.filter((product) => product.itemCategory === selectedCategory)
      : products;

    const sortedProducts = [...filteredProducts].sort((a, b) => {
      switch (selectedSort) {
        case 'recentFirst':
          return new Date(b.updatedAt) - new Date(a.updatedAt);
        case 'oldestFirst':
          return new Date(a.updatedAt) - new Date(b.updatedAt);
        case 'productIdAsc':
          return a.id - b.id;
        case 'productIdDesc':
          return b.id - a.id;
        default:
          return 0; // Best Match
      }
    });

    setSortedProducts(sortedProducts);
  }, [products, selectedCategory, selectedSort]);



  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };  

  const handleSortSelect = (sortOption) => {
    setSelectedSort(sortOption);
  };

  const handleLogout = () => {
    try {
      const response = axios.post(`${API_URL}/accounts/revoke-token`, {
        token:"6220b3863851273dcd9b69666f885617ae8eb7dee3ee8290c9c276cd319c0af021819d6228370212"
      });
      setIsLoggedIn(false);
      localStorage.setItem("isLoggedIn", "false");
      console.log("LOCAL STORAGE ",localStorage.getItem("id"))
    } 
    catch (error) {
      console.log("LOGOUT ERROR ", error.response.data);
      //setError(error.response.data);
    }    
    

  };

  return (
    <>
    {isLoggedIn ? ( <Login />):(
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <h1>Welcome to ERP App</h1>
      <SearchBar />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: '500px',
        }}
      >
        <SortBy onSelect={handleSortSelect} />
        <Filter onSelect={handleCategorySelect} />
      </div>
      <div>
        {sortedProducts.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            date={product.updatedAt}
            price={product.Price}
            material={`${product.itemLength} x ${product.itemBreadth} x ${product.itemHeight} x ${product.Material}` }
            description={product.Description}
            category={product.itemCategory}
          />
        ))}
      </div>
      <NavLink
        to='/addproduct'
        style={{
          display: 'inline-block',
          backgroundColor: 'black',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '5px',
          textDecoration: 'none',
        }}
      >
        <span style={{ fontWeight: 'bold', fontSize: 20 }}>Add Product</span>
      </NavLink>
      <button onClick={handleLogout}>Logout</button>
    </div>
    )}
    </>
  );
}

export default Home;
