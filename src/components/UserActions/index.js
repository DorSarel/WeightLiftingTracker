import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route, useRouteMatch, useHistory } from 'react-router-dom';
import WeightsView from '../WeightsView';
import WeightsForm from '../WeightsForm';
import UserForm from '../UserForm';
import DetailedWeight from '../DetailedWeight';
import Modal from '../Modal';
import { useModal } from '../../hooks/useModal';
import { updateUserInfo } from '../../redux/actions/userInfoActions';
import {
  loadUserWeights,
  saveNewExerciseWeight,
  removeExerciseWeight,
} from '../../redux/actions/weightsActions';
import { toast } from 'react-toastify';
import {
  createExerciseToSave,
  createExerciseToRevert,
} from '../../utils/weightUtils';

import './style.scss';

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
        toast.error('Error updating the user info ' + error.message);
      });
  };

  const handleWeightsFormSubmit = (newWeight) => {
    // assuming validation occurred in UserForm component
    setSaving(true);

    const exerciseDataToSave = createExerciseToSave(newWeight, userWeights);
    const isFirstUserExercise = userWeights === null;
    const exerciseToSave = { [newWeight.exercise]: exerciseDataToSave };

    dispatch(saveNewExerciseWeight(exerciseToSave, uid, isFirstUserExercise))
      .then(() => {
        setSaving(false);
        history.push('/dashboard');
      })
      .catch((error) => {
        setSaving(false);
        toast.error('Error updating the weights ' + error.message);
      });
  };

  const handleRemove = () => {
    if (exerciseToRemove) {
      dispatch(removeExerciseWeight(exerciseToRemove, uid))
        .then(() => {
          closeModal();
          setExerciseToRemove('');
          history.push('/dashboard');
        })
        .catch((error) => {
          toast.error(`Failed to remove ${exerciseToRemove}` + error.message);
        });
    }
  };

  const handleExerciseToRemove = (toRemove) => {
    setExerciseToRemove(toRemove);
    openModal();
  };

  const handleRevertExercise = (exerciseToRevert) => {
    const exerciseDataToUpdate = createExerciseToRevert(
      exerciseToRevert,
      userWeights
    );

    const exerciseToUpdate = { [exerciseToRevert]: exerciseDataToUpdate };
    dispatch(saveNewExerciseWeight(exerciseToUpdate, uid, false))
      .then(() => {
        history.push('/dashboard');
      })
      .catch((error) => {
        toast.error(`Failed to revert ${exerciseToRevert} ` + error.message);
      });
  };

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
