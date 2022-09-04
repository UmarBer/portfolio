import React from 'react';
import './header.css';
import Cta from './Cta';
import MENOBG from '../../assets/MENOBG.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header-container">
        <h5>Hello I'm</h5>
        <h1>Umar Bermejo</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <Cta />
        <HeaderSocials />

        <div className="me">
          <img src={MENOBG} alt="Me on a green background" />
        </div>

        <a href="#contact" className="scroll-down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
