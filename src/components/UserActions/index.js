import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import WeightsView from '../WeightsView';
import WeightsForm from '../WeightsForm';
import UserForm from '../UserForm';
import { loadUserInfo } from '../../redux/actions/userInfoActions';
import './style.scss';

const UserActions = () => {
  const match = useRouteMatch();
  const userInfo = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUserInfo());
  }, [dispatch]);

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
          {userInfo && <UserForm userInfo={userInfo.info} />}
        </Route>
      </Switch>
    </div>
  );
};

export default UserActions;
