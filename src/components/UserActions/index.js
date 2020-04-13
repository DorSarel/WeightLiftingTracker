import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route, useRouteMatch, useHistory } from 'react-router-dom';
import WeightsView from '../WeightsView';
import WeightsForm from '../WeightsForm';
import UserForm from '../UserForm';
import { loadUserInfo } from '../../redux/actions/userInfoActions';
import {
  loadUserWeights,
  saveNewExercise,
} from '../../redux/actions/weightsActions';
import './style.scss';

const UserActions = ({ userInfo }) => {
  const match = useRouteMatch();
  const history = useHistory();
  //const userWeights = useSelector((state) => state.userWeights);
  const dispatch = useDispatch();
  const [saving, setSaving] = useState(false);

  const handleUserFormSubmit = (updatedUserInfo) => {
    // assuming validation occurred in UserForm component
    // setSaving(true);
    // dispatch(updateUserInfo(userInfo.dbKey, updatedUserInfo))
    //   .then(() => {
    //     setSaving(false);
    //     history.push('/dashboard');
    //   })
    //   .catch((error) => {
    //     setSaving(false);
    //     alert('Error updating the user info ' + error.message);
    //   });
  };

  const handleWeightsFormSubmit = (newWeight) => {
    // assuming validation occurred in UserForm component
    // setSaving(true);
    // const forGraphUses = {
    //   value: newWeight.weight,
    //   createdAt: newWeight.createdAt,
    // };
    // const weightToBeSaved = {
    //   [newWeight.exercise]: {
    //     current: newWeight.weight,
    //     previous:
    //       userWeights.weights && userWeights.weights[newWeight.exercise]
    //         ? userWeights.weights[newWeight.exercise].current
    //         : 0,
    //     allData:
    //       userWeights.weights && userWeights.weights[newWeight.exercise]
    //         ? [
    //             ...userWeights.weights[newWeight.exercise].allData,
    //             { ...forGraphUses },
    //           ]
    //         : [{ ...forGraphUses }],
    //   },
    // };
    // const dbKey = userWeights.hasOwnProperty('dbKey')
    //   ? userWeights.dbKey
    //   : null;
    // console.log('DB KEY: ', dbKey);
    // dispatch(saveNewExercise(weightToBeSaved, dbKey))
    //   .then(() => {
    //     setSaving(false);
    //   })
    //   .catch((error) => {
    //     setSaving(false);
    //     console.log('Saving failed ' + error.message);
    //   });
  };

  return (
    <div className='user-actions'>
      <Switch>
        <Route exact path={match.path}>
          <WeightsView />
        </Route>
        <Route path={`${match.path}/add_weight`}>
          <WeightsForm onSave={handleWeightsFormSubmit} saving={saving} />
        </Route>
        <Route path={`${match.path}/user_info`}>
          {userInfo && (
            <UserForm
              userInfo={userInfo}
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
