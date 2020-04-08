import React, { useState, useContext } from 'react';
import FormInput from '../FormInput';
import { useHistory } from 'react-router-dom';
import './style.scss';

const UserForm = () => {
  const history = useHistory();

  return (
    <>
      <h1 className='heading-1 heading-1--center'>Update User Info</h1>
      <form className='form'>
        <p>Form need to be here</p>
        <button className='btn'>Need to update button</button>
      </form>
    </>
  );
};

export default UserForm;
