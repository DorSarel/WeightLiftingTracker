import React from 'react';
import UserInfo from '../../components/UserInfo';
//import User from '../../components/User';
import Sidenav from '../../components/Sidenav';
import './style.scss';

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <Sidenav />
      <UserInfo />
    </div>
  );
};

export default Dashboard;
