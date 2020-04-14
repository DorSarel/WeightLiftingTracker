import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route, useRouteMatch, useHistory } from 'react-router-dom';
import WeightsView from '../WeightsView';
import WeightsForm from '../WeightsForm';
import UserForm from '../UserForm';
import { updateUserInfo } from '../../redux/actions/userInfoActions';
import {
  loadUserWeights,
  saveNewExerciseWeight,
} from '../../redux/actions/weightsActions';
import './style.scss';

const userKey = 'YcVgXEu8HvuDesoJEgHz';

const UserActions = ({ userInfo, uid }) => {
  const match = useRouteMatch();
  const history = useHistory();
  const userWeights = useSelector((state) => state.userWeights);
  const dispatch = useDispatch();
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!userWeights) {
      dispatch(loadUserWeights(uid));
    }
  }, [dispatch, userWeights, uid]);

  const handleUserFormSubmit = (updatedUserInfo) => {
    //assuming validation occurred in UserForm component
    setSaving(true);
    dispatch(updateUserInfo(uid, updatedUserInfo))
      .then(() => {
        setSaving(false);
        history.push('/dashboard');
      })
      .catch((error) => {
        setSaving(false);
        alert('Error updating the user info ' + error.message);
      });
  };

  const handleWeightsFormSubmit = (newWeight) => {
    // assuming validation occurred in UserForm component
    setSaving(true);
    const forGraphUses = {
      value: newWeight.weight,
      createdAt: newWeight.createdAt,
    };

    // handle first time key
    let exerciseDataToSave = {};
    exerciseDataToSave.current = newWeight.weight;
    exerciseDataToSave.exercise = newWeight.exercise;
    if (!userWeights || !userWeights[newWeight.exercise]) {
      exerciseDataToSave.previous = 0;
      exerciseDataToSave.exercisePeriodData = [{ ...forGraphUses }];
    } else {
      exerciseDataToSave.previous = userWeights[newWeight.exercise].current;
      exerciseDataToSave.exercisePeriodData = [
        ...userWeights[newWeight.exercise].exercisePeriodData,
        { ...forGraphUses },
      ];
    }
    const isFirstUserExercise = userWeights === null;
    const exerciseToSave = { [newWeight.exercise]: exerciseDataToSave };

    dispatch(
      saveNewExerciseWeight(exerciseToSave, uid, isFirstUserExercise)
    ).then(() => {
      setSaving(false);
      history.push('/dashboard');
    });
  };

  return (
    <div className='user-actions'>
      <Switch>
        <Route exact path={match.path}>
          <WeightsView weights={userWeights} />
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
