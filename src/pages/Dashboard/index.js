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
      <User />
      <div className='actions'>
        <Sidenav />
        <div className='content'>
          <Switch>
            <Route exact path={`${match.path}`}>
              <WeightsProgress />
            </Route>
            <Route path={`${match.path}/user_info`}>
              <UserForm />
            </Route>
            <Route path={`${match.path}/add_weight`}>
              <WeightsForm />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
