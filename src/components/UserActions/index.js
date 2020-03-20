import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import WeightsView from '../WeightsView';
import WeightsForm from '../WeightsForm';
import UserForm from '../UserForm';
import './style.scss';

const UserActions = () => {
  const match = useRouteMatch();

  return (
    <div className='user-actions'>
      <Switch>
        <Route exact path={match.path}>
          <WeightsView />
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

export default UserActions;
