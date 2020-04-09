import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route, useRouteMatch, useHistory } from 'react-router-dom';
import WeightsView from '../WeightsView';
import WeightsForm from '../WeightsForm';
import UserForm from '../UserForm';
import {
  loadUserInfo,
  updateUserInfo,
} from '../../redux/actions/userInfoActions';
import './style.scss';

const UserActions = () => {
  const match = useRouteMatch();
  const history = useHistory();
  const userInfo = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    dispatch(loadUserInfo());
  }, [dispatch]);

  const handleUserFormSubmit = (updatedUserInfo) => {
    // assuming validation occurred in UserForm component
    setSaving(true);
    dispatch(updateUserInfo(userInfo.dbKey, updatedUserInfo))
      .then(() => {
        setSaving(false);
        history.push('/dashboard');
      })
      .catch((error) => {
        setSaving(false);
        alert('Error updating the user info ' + error.message);
      });
  };

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
          {userInfo && (
            <UserForm
              userInfo={userInfo.info}
              onSave={handleUserFormSubmit}
              saving={saving}
            />
          )}
        </Route>
      </Switch>
    </div>
  );
};

export default UserActions;
