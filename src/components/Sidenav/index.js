import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import './style.scss';

const Sidenav = () => {
  const match = useRouteMatch();
  return (
    <aside className='sidenav'>
      <img
        src='https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=845&q=80'
        alt='User img'
        className='sidenav__img'
      />
      <p className='sidenav__greeting'>Hello, Dor Sarel</p>
      <ul className='sidenav__list'>
        <li className='sidenav__item'>
          <Link className='sidenav__link' to={`${match.url}`}>
            Weights Progress
          </Link>
        </li>
        <li className='sidenav__item'>
          <Link className='sidenav__link' to={`${match.url}/add_weight`}>
            Add Workout
          </Link>
        </li>
        <li className='sidenav__item'>
          <Link className='sidenav__link' to={`${match.url}/user_info`}>
            Update User Data
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidenav;
