import React, { useContext } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import UserData from '../UserInfoItem';
import WeightsProgress from '../WeightsProgress';
import WeightsForm from '../WeightsForm';
import UserForm from '../UserForm';
import './style.scss';

const User = () => {
  const match = useRouteMatch();

  return (
    <div className='user'>
      <div className='user__profile'>{userData}</div>
      <Switch>
        <Route exact path={match.path}>
          <WeightsProgress />
        </Route>
        <Route path={`${match.path}/add_weight`}>
          <WeightsForm />
        </Route>
        <Route path={`${match.path}/user_info`}>
          <UserForm />
        </Route>
      </Switch>
    </div>
  );
};

export default User;
