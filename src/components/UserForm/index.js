import React, { useState } from 'react';
import NumberInput from '../NumberInput';
import './style.scss';

const UserForm = ({ userInfo = {} }) => {
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

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUserState((prevState) => ({
      ...prevState,
      [name]: { ...prevState[name], value: parseFloat(value) },
    }));
  };

  return (
    <>
      <h1 className='heading-1 heading-1--center'>Update User Info</h1>
      <form className='form'>
        <NumberInput
          label='age'
          value={userState.age.value}
          onChange={handleOnChange}
          attributes={userState.age.validation}
        />
        <NumberInput
          label='weight'
          value={userState.weight.value}
          onChange={handleOnChange}
          attributes={userState.weight.validation}
        />
        <NumberInput
          label='height'
          value={userState.height.value}
          onChange={handleOnChange}
          attributes={userState.height.validation}
        />
        <NumberInput
          label='fat'
          value={userState.fat.value}
          onChange={handleOnChange}
          attributes={userState.fat.validation}
        />
        <button className='btn'>Need to update button</button>
      </form>
    </>
  );
};

export default UserForm;
