import React from 'react';
import User from '../../components/User';
import Sidenav from '../../components/Sidenav';
import './style.scss';

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <Sidenav />
      <User />
    </div>
  );
};

export default Dashboard;
