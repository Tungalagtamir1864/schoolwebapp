import React, { useState } from 'react';
import Account from './Account form/Account';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes,
  faUser,
  faBars,
} from '@fortawesome/fontawesome-free-solid';
import { Link } from 'react-router-dom';
import './Header.css';
import logo123 from '../../../assets/images/logo.png';

const Header = () => {
  const [toggleUser, setToggleUser] = useState(false);
  const [togglebars, setTogglebars] = useState(false);

  const handleUser = () => {
    setToggleUser(!toggleUser);
  };

  const handleBars = () => {
    setTogglebars(!togglebars);
  };

  return (
    <header className="header">
<Link to="/" className="logo">
  <img width="300px" src={logo123} alt="Logo" className="i" />
</Link>


      <nav className={togglebars ? 'navbar active' : 'navbar'}>
        <div id="close-navbar">
          <FontAwesomeIcon icon={faTimes} onClick={handleBars} />
        </div>
        <Link to="/" className="a">
          Нүүр
        </Link>
        <Link to="/about" className="a">
          Бидний тухай
        </Link>
        <Link to="/courses" className="a">
          Хөтөлбөр
        </Link>
        <Link to="/News" className="a">
          Мэдээ
        </Link>
 
      </nav>

      <div className="icons">
        <div id="account-btn">
          <FontAwesomeIcon icon={faUser} onClick={handleUser} />
        </div>

        <div id="menu-btn">
          <FontAwesomeIcon icon={faBars} onClick={handleBars} />
        </div>

        {toggleUser ? <Account /> : <div />}
      </div>
    </header>
  );
};

export default Header;
