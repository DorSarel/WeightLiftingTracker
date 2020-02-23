import React from 'react';
import './style.scss';

const Header = () => {
  return (
    <header className='header'>
      <nav className='nav'>
        <ul className='nav__list'>
          <li className='nav__list__item'>
            <a className='nav__list__link' href='#'>
              Login
            </a>
          </li>
          <li className='nav__list__item'>
            <a className='nav__list__link' href='#'>
              Sign Up
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
