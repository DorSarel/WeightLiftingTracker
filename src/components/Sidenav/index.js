import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import './style.scss';

const Sidenav = () => {
  const match = useRouteMatch();
  return (
    <aside className='sidenav'>
      <h3 className='sidenav__title'>User Actions</h3>
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
