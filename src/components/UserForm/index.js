import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import './style.scss';

const UserForm = () => {
  const { state, updateUserInfo } = useContext(UserContext);
  const history = useHistory();
  const { personal_info: userPersonalInfo } = state;
  const initialLocalState = {
    age: {
      ...userPersonalInfo['age'],
      config: { min: 10, max: 120, step: 1 },
      errorMsg: '',
    },
    weight: {
      ...userPersonalInfo['weight'],
      config: { min: 30, max: 500, step: 0.1 },
      errorMsg: '',
    },
    height: {
      ...userPersonalInfo['height'],
      config: { min: 100, max: 250, step: 0.1 },
      errorMsg: '',
    },
    fat: {
      ...userPersonalInfo['fat'],
      config: { min: 0, max: 100, step: 0.1 },
      errorMsg: '',
    },
    isSubmitting: false,
  };
  const [data, setData] = useState(initialLocalState);

  const handleInputChage = event => {
    const { name, value } = event.target;
    setData(prevData => {
      return {
        ...prevData,
        [name]: { ...prevData[name], value },
      };
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (isFormValid()) {
      setData(prevData => ({ ...prevData, isSubmitting: true }));
      let payload = {};
      for (let key in userPersonalInfo) {
        const { value, unit } = data[key];
        payload[key] = { value: parseFloat(value), unit };
      }
      setTimeout(() => {
        //simulating async request
        updateUserInfo(payload);
        setData(prevData => ({ ...prevData, isSubmitting: false }));
        history.push('/dashboard');
      }, 1500);
    }
  };

  const isFormValid = () => {
    let isFormValid = true;

    for (let userInfoKey in userPersonalInfo) {
      const {
        value,
        config: { min, max },
      } = data[userInfoKey];

      if (value === '') {
        isFormValid = false;
        setErrorMessage(userInfoKey, 'Input cannot be blank');
      } else if (value < min || value > max) {
        isFormValid = false;
        setErrorMessage(userInfoKey, `Inupt must be between ${min} to ${max}`);
      }
    }
    return isFormValid;
  };

  const setErrorMessage = (inputKey, errorMsg) => {
    setData(prevData => ({
      ...prevData,
      [inputKey]: { ...prevData[inputKey], errorMsg },
    }));
  };

  let formData = [];
  for (let userInfoKey in userPersonalInfo) {
    const {
      value,
      errorMsg,
      config: { min, max, step },
    } = data[userInfoKey];

    formData.push(
      <div
        key={userInfoKey}
        className={
          errorMsg === ''
            ? 'form__control'
            : 'form__control form__control--error'
        }
      >
        <label className='form__label'>{userInfoKey}</label>
        <input
          type='number'
          className='form__input'
          name={userInfoKey}
          value={value}
          placeholder={`Your ${userInfoKey}`}
          onChange={handleInputChage}
          min={min}
          max={max}
          step={step}
        />
        <small className='form__error-msg'>{errorMsg}</small>
      </div>
    );
  }
  return (
    <>
      <h1 className='heading-1 heading-1--center'>Update User Info</h1>
      <form className='form'>
        {formData}
        <button onClick={handleSubmit} className='btn'>
          {data.isSubmitting ? 'Updating...' : 'Update'}
        </button>
      </form>
    </>
  );
};

export default UserForm;
