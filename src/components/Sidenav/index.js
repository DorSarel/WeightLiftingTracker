import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import './style.scss';
import Icons from '../../assets/sprite.svg';

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
            <svg className='sidenav__icon'>
              <use xlinkHref={`${Icons}#icon-area-graph`} />
            </svg>
            Weights Progress
          </Link>
        </li>
        <li className='sidenav__item'>
          <Link className='sidenav__link' to={`${match.url}/add_weight`}>
            <svg className='sidenav__icon'>
              <use xlinkHref={`${Icons}#icon-plus`} />
            </svg>
            Add Workout
          </Link>
        </li>
        <li className='sidenav__item'>
          <Link className='sidenav__link' to={`${match.url}/user_info`}>
            <svg className='sidenav__icon'>
              <use xlinkHref={`${Icons}#icon-loop`} />
            </svg>
            Update User Data
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidenav;
