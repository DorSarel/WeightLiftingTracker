import React, { useState, useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import './style.scss';

const UserForm = () => {
  const { state, updateUserInfo } = useContext(UserContext);
  const { personal_info } = state;
  const initialLocalState = {
    age: {
      ...personal_info['age'],
      valid: { min: 10, max: 120, step: 1 },
    },
    weight: {
      ...personal_info['weight'],
      valid: { min: 30, max: 500, step: 0.1 },
    },
    height: {
      ...personal_info['height'],
      valid: { min: 100, max: 250, step: 0.1 },
    },
    fat: {
      ...personal_info['fat'],
      valid: { min: 0, max: 100, step: 0.1 },
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
    for (let key in personal_info) {
      const { value, unit } = data[key];
      payload[key] = { value: parseFloat(value), unit };
    }
    // console.log(payload);
    setTimeout(() => {
      updateUserInfo(payload);
      setData(prevData => ({ ...prevData, isSubmitting: false }));
    }, 2000);
  };

  let formData = [];
  for (let key in personal_info) {
    formData.push(
      <div key={key} className='form__data'>
        <label className='form__label'>{key}</label>
        <input
          type='number'
          className='form__input'
          name={key}
          value={data[key].value}
          placeholder={`Your ${key}`}
          onChange={handleInputChage}
          min={data[key].valid.min}
          max={data[key].valid.max}
          step={data[key].valid.step}
        />
      </div>
    );
  }
  return (
    <form className='form'>
      {formData}
      <div className='form__data'>
        <button onClick={handleSubmit} className='form__btn'>
          {data.isSubmitting ? 'Updating...' : 'Update'}
        </button>
      </div>
    </form>
  );
};

export default UserForm;
