import React from 'react';
import './footer.css';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsCodeSquare } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer-logo">
        Umar Bermejo
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer-socials">
        <a href="https://github.com/UmarBer">
          <AiFillGithub />
        </a>
        <a href="https://www.linkedin.com/in/umarbermejo/">
          <AiFillLinkedin />
        </a>
        <a
          href="https://profile.ironhack.com/umar-bermejo"
          className="ironhack-logo"
        >
          <BsCodeSquare />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
