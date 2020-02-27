import React from 'react';
import { Switch, Route } from 'react-router-dom';
import User from '../../components/User';
import Sidenav from '../../components/Sidenav';
import UserForm from '../../components/UserForm';
import WeightsForm from '../../components/WeightsForm';
import './style.scss';

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <User />
      <div className='actions'>
        <Sidenav />
        <div className='content'>
          <WeightsForm />
          <Switch>
            <Route path='/dashboard/user_info'>
              <UserForm />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
