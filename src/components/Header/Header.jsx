import React from 'react'
import { Link } from 'react-router-dom';
import './Header.scss'
import userimage from '../../images/userimage.png'

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Movie App</div>
      </Link>
      <div className="user-image">
        <img src={userimage} alt="user" />
      </div>
    </div>
  )
}

export default Header;