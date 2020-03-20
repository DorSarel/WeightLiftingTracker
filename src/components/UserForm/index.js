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
    },
    weight: {
      ...userPersonalInfo['weight'],
      config: { min: 30, max: 500, step: 0.1 },
    },
    height: {
      ...userPersonalInfo['height'],
      config: { min: 100, max: 250, step: 0.1 },
    },
    fat: {
      ...userPersonalInfo['fat'],
      config: { min: 0, max: 100, step: 0.1 },
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
  };

  let formData = [];
  for (let key in userPersonalInfo) {
    formData.push(
      <div key={key} className='form__control'>
        <label className='form__label'>{key}</label>
        <input
          type='number'
          className='form__input'
          name={key}
          value={data[key].value}
          placeholder={`Your ${key}`}
          onChange={handleInputChage}
          min={data[key].config.min}
          max={data[key].config.max}
          step={data[key].config.step}
        />
      </div>
    );
  }
  return (
    <form className='form'>
      {formData}
      <button onClick={handleSubmit} className='btn'>
        {data.isSubmitting ? 'Updating...' : 'Update'}
      </button>
    </form>
  );
};

export default UserForm;
