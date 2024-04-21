import React from "react";
import './Sider.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faBell, faWallet, faHome, faUser, faCog } from '@fortawesome/free-solid-svg-icons';

const Sider = ({ onButtonClick }) => {

  const handleClick = (value) => {
    onButtonClick(value);
  };

  return (
    <div className="sider">
      <button className="sider-button" onClick={() => handleClick('addproducts')} >
        <FontAwesomeIcon icon={faPlus} /> 
      </button>
      <br />
      <button className="sider-button" onClick={() => handleClick('notification')}>
        <FontAwesomeIcon icon={faBell} /> 
      </button>
      <br />
      <button className="sider-button" onClick={() => handleClick('wallet')}>
        <FontAwesomeIcon icon={faWallet} /> 
      </button>
      <br />
      <button className="sider-button" onClick={() => handleClick('home')}>
        <FontAwesomeIcon icon={faHome} /> 
      </button>
      <br />
      <button className="sider-button" onClick={() => handleClick('profile')}>
        <FontAwesomeIcon icon={faUser} /> 
      </button>
      <br />
      <button className="sider-button" onClick={() => handleClick('settings')}>
        <FontAwesomeIcon icon={faCog} />
      </button>
    </div>
  );
};

export default Sider;
