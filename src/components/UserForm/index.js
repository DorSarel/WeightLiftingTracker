import React, { useState } from 'react';
import NumberInput from '../NumberInput';
import PropTypes from 'prop-types';
import './style.scss';

const UserForm = ({ userInfo, onSave, saving }) => {
  const [userState, setUserState] = useState({
    age: {
      ...userInfo.age,
      validation: {
        min: 10,
        max: 150,
      },
    },
    weight: {
      ...userInfo.weight,
      validation: {
        min: 30,
        max: 350,
        step: 0.1,
      },
    },
    height: {
      ...userInfo.height,
      validation: {
        min: 100,
        max: 250,
        step: 0.1,
      },
    },
    fat: {
      ...userInfo.fat,
      validation: {
        min: 0,
        max: 100,
        step: 0.1,
      },
    },
  });
  const [errors, setErrors] = useState({});

  const handleOnChange = (e) => {
    let { name, value } = e.target;
    if (isNaN(value)) value = userState[name].validation.min;
    setUserState((prevState) => ({
      ...prevState,
      [name]: { ...prevState[name], value: parseFloat(value) },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Need to add validation

    let updatedUserInfo = {};
    for (let userKey in userState) {
      updatedUserInfo[userKey] = {
        value: userState[userKey].value,
        unit: userState[userKey].unit,
      };
    }

    onSave(updatedUserInfo);
  };

  return (
    <>
      <h1 className='heading-1 heading-1--center'>Update User Info</h1>
      <form className='form' onSubmit={handleSubmit}>
        <NumberInput
          label='age'
          value={userState.age.value}
          onChange={handleOnChange}
          attributes={userState.age.validation}
          errorMsg={errors.age}
        />
        <NumberInput
          label='weight'
          value={userState.weight.value}
          onChange={handleOnChange}
          attributes={userState.weight.validation}
          errorMsg={errors.weight}
        />
        <NumberInput
          label='height'
          value={userState.height.value}
          onChange={handleOnChange}
          attributes={userState.height.validation}
          errorMsg={errors.height}
        />
        <NumberInput
          label='fat'
          value={userState.fat.value}
          onChange={handleOnChange}
          attributes={userState.fat.validation}
          errorMsg={errors.fat}
        />
        <button className='btn'>{!saving ? 'Update' : 'Updating...'}</button>
      </form>
    </>
  );
};

UserForm.propTypes = {
  userInfo: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  saving: PropTypes.bool.isRequired,
};

export default UserForm;
