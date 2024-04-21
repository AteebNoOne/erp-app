import React from 'react';
import './Body.css';
import AddProduct from '../addproduct/AddProduct';
import Settings from '../settings/Settings';

const Body = ({ selected }) => {
  return (
    <div className="body-p">
      <div className="responsive-body">
        {selected === 'addproducts' ? <AddProduct /> : null}
        {selected === 'settings' ? <Settings /> : null}
      </div>
    </div>
  );
};

export default Body;
