import React from 'react';
import '../styles/footer.css';
import githubIcon from '../assets/icons-small/github.svg';
import mailIcon from '../assets/icons-small/mail.svg';

const Footer = () => {
  return (
    <footer id="contact">
    <h1>Contact me</h1>
    <p>Please get in touch if you are interested in the collaboration:</p>
    <ul>
      <li>
        <a href="https://mail.google.com/mail/?view=cm&source=mailto&to=julia.shlykova17@gmail.com">
        <img src={mailIcon} alt="mail" className='footer-icon' />
        Send email
        </a>
      </li>
      <li>
        <a href="https://github.com/JuliaShlykova">
        <img src={githubIcon} alt="github" className='footer-icon' />
        Visit GitHub to see more projects</a>
      </li>
    </ul>
    <p>	&copy; Copyright 2024, Julia Shlykova</p>
    <div className='animation-footer'></div>
    </footer>
  )
}

export default Footer