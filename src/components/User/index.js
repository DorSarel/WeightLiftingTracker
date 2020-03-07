import React, { useContext } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import UserData from '../UserData';
import WeightsProgress from '../WeightsProgress';
import WeightsForm from '../WeightsForm';
import './style.scss';

import { UserContext } from '../../contexts/UserContext';

const User = () => {
  const { state: userState } = useContext(UserContext);
  const { personal_info } = userState;
  const match = useRouteMatch();

  let userData = [];
  for (let key in personal_info) {
    userData.push(
      <UserData
        key={key}
        label={key}
        value={personal_info[key].value}
        unit={personal_info[key].unit}
      />
    );
  }
  console.log(match);
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
      </Switch>
    </div>
  );
};

export default User;
