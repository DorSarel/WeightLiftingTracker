import React from 'react';
import UserInfo from '../../components/UserInfo';
import UserActions from '../../components/UserActions';
import Sidenav from '../../components/Sidenav';
import './style.scss';

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <Sidenav />
      <UserInfo />
      <UserActions />
    </div>
  );
};

export default Dashboard;
