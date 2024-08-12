import React from 'react';
import '../Components/Header.css';
import { Link } from 'react-router-dom';
import logo from '../Assets/db1.png';

const Header = () => {
  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Science', path: '/Science' },
    { name: 'Health', path: '/Health' },
    { name: 'India', path: '/India' },
    { name: 'Technology', path: '/Technology' },
    { name: 'Sports', path: '/Sports' },
    { name: 'Entertainment', path: '/Entertainment' },
  ];

  return (
    <header className="header">
      <div className="top-bar">
        <span>{new Date().toDateString()}</span>
        <span>Today's News</span>
      </div>
      <div className="title">
          <img src={logo} alt='logo' className='logo'></img>
      </div>
      <nav className="navbar">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <a href='/Login' className='logout'>Login</a>
    </header>
  );
};

export default Header;
