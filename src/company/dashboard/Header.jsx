import React from 'react';
import './Header.css';
import profile_avi from '../../assets/profile_avi.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser} from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {
  return (
    <div className="header">
      <h1 className="header-text">{props.heading}</h1>
      <div className="header-buttons">
        <button className="header-button" ><FontAwesomeIcon icon={faBell} /></button>
        <button className="header-button"><FontAwesomeIcon icon={faUser} /></button>
        <img className="profile-image" src={profile_avi} alt="Profile" />
      </div>
    </div>
  );
};

export default Header;
