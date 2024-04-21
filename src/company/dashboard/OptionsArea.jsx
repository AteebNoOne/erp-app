import { useNavigate } from 'react-router-dom';
import React, { useState,useEffect } from 'react';
import './OptionsArea.css';
import Header from './Header';
import Sider from './Sider';
import Body from './Body';
import config from '../../config.json'

const OptionsArea = () => {

  const [companyVerified, setCompanyVerified] = useState(false);
  const id = localStorage.getItem("id");
  const API_URL = config.API_URL;
  const navigate = useNavigate();

  useEffect(() => {
    console.log(localStorage.getItem("id"))
    const fetchUser = async () => {
      const response = await fetch(`${API_URL}/demo/${id}`);
      const data = await response.json();
      if (!data.isRegistered) {
        setCompanyVerified(false);
        localStorage.setItem("CompanyVerified", false);
        navigate("/company") 
      }
    };
    fetchUser();
  }, [API_URL, id]);

  const [selected, setSelected] = useState('');
  const [page, setPage] = useState('');
  const [myheading,setHeading ] = useState ('Home');

  const handleSiderButtonClick = (value) => {
    setSelected(value);
    setPage(value);
  
    switch(value) {
      case "addproducts":
        setHeading("Add a Product");
        break;
      case "notification":
        setHeading("Notifications");
        break;
      case "wallet":
        setHeading("My Wallet");
        break;
      case "profile":
        setHeading("Profile");
        break;
      case "settings":
        setHeading("Setting");
        break;
      default:
        setHeading("Home");
    }
  };
  

  return (
    <>
    {companyVerified ? (
      <div>
      <div className="options-area">
        <div className="main-content">
          <Header heading={myheading} />
          <Body selected={selected} />
          <Sider onButtonClick={handleSiderButtonClick} />
        </div>
      </div>
      </div>
    ):(
      navigate("/company")
    )}
    </>
  );
};

export default OptionsArea;
