import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import './style.scss';
import Icons from '../../assets/sprite.svg';

const Sidenav = ({ userInfo, logout }) => {
  const match = useRouteMatch();
  const { firstName, lastName } = userInfo;
  const initials = firstName[0] + lastName[0];

  return (
    <aside className='sidenav'>
      <Link to='/' className='sidenav__user'>
        {initials}
      </Link>
      <ul className='sidenav__list'>
        <li className='sidenav__item'>
          <Link className='sidenav__link' to={`${match.url}`}>
            <svg className='sidenav__icon'>
              <use xlinkHref={`${Icons}#icon-area-graph`} />
            </svg>
            Dashboard
          </Link>
        </li>
        <li className='sidenav__item'>
          <Link className='sidenav__link' to={`${match.url}/add_weight`}>
            <svg className='sidenav__icon'>
              <use xlinkHref={`${Icons}#icon-plus`} />
            </svg>
            Add Weight
          </Link>
        </li>
        <li className='sidenav__item'>
          <Link className='sidenav__link' to={`${match.url}/user_info`}>
            <svg className='sidenav__icon'>
              <use xlinkHref={`${Icons}#icon-loop`} />
            </svg>
            User Info
          </Link>
        </li>
        <li className='sidenav__item'>
          <a href='#' className='sidenav__link' onClick={logout}>
            <svg className='sidenav__icon'>
              <use xlinkHref={`${Icons}#icon-log-out`} />
            </svg>
            Logout
          </a>
        </li>
      </ul>
      <p className='copyright'>Designed & Created by Dor Sarel</p>
    </aside>
  );
};

export default Sidenav;
