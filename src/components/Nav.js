import React from 'react';
import '../styles/nav.css';

const Nav = () => {
  return (
    <nav id="nav">
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact me</a></li>
      </ul>
    </nav>
  )
}

export default Nav