import React from 'react';
import User from '../../components/User';
import Sidenav from '../../components/Sidenav';
import UserForm from '../../components/UserForm';
import './style.scss';

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <User />
      <div className='actions'>
        <Sidenav />
        <div className='content'>
          <UserForm />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
