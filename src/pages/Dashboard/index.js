import React from 'react';
import User from '../../components/User';
import './style.scss';

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <User />
      <div className='actions'>
        <aside className='sidenav'>
          <h3 className='sidenav__title'>User Actions</h3>
          <ul className='sidenav__list'>
            <li className='sidenav__item'>
              <a className='sidenav__link' href='#'>
                Workout Progress
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
        <div className='content'>CONTENT WILL BE HERE</div>
      </div>
    </div>
  );
};

export default Dashboard;
