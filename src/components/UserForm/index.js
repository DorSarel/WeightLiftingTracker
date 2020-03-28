import React, { useState, useContext } from 'react';
import FormInput from '../FormInput';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import './style.scss';

const UserForm = () => {
  const { user, updateUserInfo } = useContext(UserContext);
  const history = useHistory();
  const { personal_info: userPersonalInfo } = user;
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
        [name]: { ...prevData[name], value: parseFloat(value) },
      };
    });
  };

  const handleSubmit = async event => {
    event.preventDefault();

    if (isFormValid()) {
      setData(prevData => ({ ...prevData, isSubmitting: true }));
      let payload = {};
      for (let key in userPersonalInfo) {
        const { value, unit } = data[key];
        payload[key] = { value: parseFloat(value), unit };
      }
      try {
        const res = await updateUserInfo(payload);
        setData(prevData => ({ ...prevData, isSubmitting: false }));
        history.push('/dashboard');
      } catch (err) {
        console.error(err.message);
      }
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
    const { value, errorMsg, config: attributes } = data[userInfoKey];

    formData.push(
      <FormInput
        key={userInfoKey}
        type='number'
        labelTitle={userInfoKey}
        value={value}
        attributes={attributes}
        errorMsg={errorMsg}
        onChangeHandler={handleInputChage}
      />
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
