import React, { useState } from 'react';
import EmailInput from '../../components/EmailInput';
import PasswordInput from '../../components/PasswordInput';
import './style.scss';

const SignIn = () => {
  return (
    <form className='form form-login'>
      <h3 className='form-login__title'>Sign in</h3>
      <EmailInput label='email' value='' onChange={() => {}} />
      <PasswordInput label='password' value='' onChange={() => {}} />
      <button className='btn'>login</button>
    </form>
  );
};

export default SignIn;
