import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../Searchbar';
import SortBy from '../SortBy';
import Filter from '../Filter';
import Product from '../Product';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://example.com/api/products')
      .then(response => setProducts(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Welcome to ERP App</h1>
      <SearchBar />
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '500px' }}>
        <SortBy />
        <Filter />
      </div>
      <div>
        {products.map(product => (
          <Product
            key={product.id}
            productId={product.id}
            date={product.date}
            imageUrl={product.imageUrl}
            price={product.price}
            material={product.material}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
