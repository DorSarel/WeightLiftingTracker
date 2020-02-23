import React from 'react';
import './style.scss';

const Sidenav = () => {
  return (
    <aside className='sidenav'>
      <h3 className='sidenav__title'>User Actions</h3>
      <ul className='sidenav__list'>
        <li className='sidenav__item'>
          <a className='sidenav__link' href='#'>
            Weights Progress
          </a>
        </li>
        <li className='sidenav__item'>
          <a className='sidenav__link' href='#'>
            Add Workout
          </a>
        </li>
        <li className='sidenav__item'>
          <a className='sidenav__link' href='#'>
            Update User Data
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidenav;
