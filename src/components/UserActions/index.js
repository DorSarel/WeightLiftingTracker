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
  removeExerciseWeight,
} from '../../redux/actions/weightsActions';
import './style.scss';
import DetailedWeight from '../DetailedWeight';
import { useModal } from '../../hooks/useModal';
import Modal from '../Modal';

const UserActions = ({ userInfo, uid }) => {
  const match = useRouteMatch();
  const history = useHistory();
  const userWeights = useSelector((state) => state.userWeights);
  const dispatch = useDispatch();
  const [saving, setSaving] = useState(false);
  const [exerciseToRemove, setExerciseToRemove] = useState('');
  const [isModalOpen, openModal, closeModal] = useModal();

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

  const handleRemove = () => {
    if (exerciseToRemove) {
      dispatch(removeExerciseWeight(exerciseToRemove, uid)).then(() => {
        closeModal();
        setExerciseToRemove('');
        history.push('/dashboard');
      });
    }
  };

  const handleExerciseToRemove = (toRemove) => {
    setExerciseToRemove(toRemove);
    openModal();
  };

  const handleRevertExercise = (exerciseToRevert) => {
    const indexToRemove =
      userWeights[exerciseToRevert].exercisePeriodData.length - 1;
    const indexToUseForPrevious =
      userWeights[exerciseToRevert].exercisePeriodData.length - 3;

    const exerciseDataToUpdate = {
      ...userWeights[exerciseToRevert],
      current: userWeights[exerciseToRevert].previous,
      previous:
        userWeights[exerciseToRevert].exercisePeriodData[indexToUseForPrevious]
          .value,
      exercisePeriodData: userWeights[
        exerciseToRevert
      ].exercisePeriodData.filter((_, idx) => idx !== indexToRemove),
    };

    const exerciseToUpdate = { [exerciseToRevert]: exerciseDataToUpdate };
    dispatch(saveNewExerciseWeight(exerciseToUpdate, uid, false)).then(() => {
      history.push('/dashboard');
    });
  };

  console.log(exerciseToRemove);

  return (
    <div className='user-actions'>
      {isModalOpen && (
        <Modal
          title='remove'
          actionText={`remove ${exerciseToRemove}`}
          handleConfirm={handleRemove}
          handleClose={closeModal}
          positionBoxClass='modal__box--bottom'
        />
      )}
      <Switch>
        <Route exact path={match.path}>
          <WeightsView
            weights={userWeights}
            revertWeight={handleRevertExercise}
            removeWeight={handleExerciseToRemove}
          />
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
        <Route path={`${match.path}/weights/:exercise`}>
          <DetailedWeight />
        </Route>
      </Switch>
    </div>
  );
};

export default UserActions;
