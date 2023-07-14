import React from 'react';
import '../styles/header.css'

const Header = () => {
  return (
    <header>
      <p className="name">Julia</p><p className="name">Shlykova</p>
      <p className="profession">MERN stack</p><p className="profession">Web Developer</p>
      <div className="header-decoration-left"></div>
      <div className="header-decoration-right"></div>
    </header>
  )
}

export default Header