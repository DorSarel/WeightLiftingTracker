import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import User from '../../components/User';
import Sidenav from '../../components/Sidenav';
import WeightsProgress from '../../components/WeightsProgress';
import UserForm from '../../components/UserForm';
import WeightsForm from '../../components/WeightsForm';
import './style.scss';

const Dashboard = () => {
  const match = useRouteMatch();
  return (
    <div className='dashboard'>
      <Sidenav />
      <User />
    </div>
  );
};

export default Dashboard;
