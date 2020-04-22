import React, { useState, useEffect, useRef } from 'react';
import NumberInput from '../NumberInput';
import PropTypes from 'prop-types';
import { checkNumberInput } from '../../utils/utils';
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
  const elementToScrollTo = useRef(null);

  useEffect(() => {
    const viewportOffsets = elementToScrollTo.current.getBoundingClientRect();
    window.scrollTo({
      top: viewportOffsets.top,
      left: viewportOffsets.left,
      behavior: 'smooth',
    });
  }, []);

  const isFormValid = () => {
    let errors = {};
    for (let inputName in userInfo) {
      if (!userInfo[inputName].value) continue;
      const { value } = userState[inputName];
      const { min: minAllowedValue, max: maxAllowedValue } = userState[
        inputName
      ].validation;

      const inputValidation = checkNumberInput(
        value,
        inputName,
        minAllowedValue,
        maxAllowedValue
      );
      if (inputValidation.error) errors[inputName] = inputValidation.error;
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleOnChange = (e) => {
    let { name, value } = e.target;
    if (isNaN(value) || value === '') {
      console.log(value);
      value = userState[name].validation.min;
    }
    setUserState((prevState) => ({
      ...prevState,
      [name]: { ...prevState[name], value: parseFloat(value) },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid()) return;

    let updatedUserInfo = {};
    for (let userKey in userState) {
      if (!userState[userKey].previous) {
        updatedUserInfo[userKey] = {
          value: userState[userKey].value,
          unit: userState[userKey].unit,
        };
      } else {
        updatedUserInfo[userKey] = {
          value: userState[userKey].value,
          previous:
            userInfo[userKey].value !== userState[userKey].value
              ? userInfo[userKey].value
              : userInfo[userKey].previous,
          unit: userState[userKey].unit,
        };
      }
    }

    setErrors({});
    onSave(updatedUserInfo);
  };

  return (
    <>
      <h1 className='heading-1 heading-1--center'>Update User Info</h1>
      <form ref={elementToScrollTo} className='form' onSubmit={handleSubmit}>
        <NumberInput
          label='age'
          value={userState.age.value}
          onChange={handleOnChange}
          attributes={userState.age.validation}
          errorMsg={errors.age}
        />
        <NumberInput
          label='weight (KG)'
          value={userState.weight.value}
          onChange={handleOnChange}
          attributes={userState.weight.validation}
          errorMsg={errors.weight}
        />
        <NumberInput
          label='height (CM)'
          value={userState.height.value}
          onChange={handleOnChange}
          attributes={userState.height.validation}
          errorMsg={errors.height}
        />
        <NumberInput
          label='fat (%)'
          value={userState.fat.value}
          onChange={handleOnChange}
          attributes={userState.fat.validation}
          errorMsg={errors.fat}
        />
        <button disabled={saving} className='btn'>
          {!saving ? 'Update' : 'Updating...'}
        </button>
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
