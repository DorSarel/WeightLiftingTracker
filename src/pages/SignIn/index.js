import React, { useState } from 'react';
import EmailInput from '../../components/EmailInput';
import PasswordInput from '../../components/PasswordInput';
import './style.scss';

const initialState = {
  email: {
    value: '',
  },
  password: {
    value: '',
    validation: {
      min: 6,
      max: 12,
    },
  },
};

const SignIn = () => {
  const [formState, setFormState] = useState(initialState);
  const [errors, setErrors] = useState({});

  const isFormValid = () => {
    let errors = {};
    // validate email
    const email = formState.email.value;
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(email).toLowerCase()) || email === '') {
      errors.email = 'Invalid email';
    }

    // validate password
    const {
      value: password,
      validation: { min: minAllowedLength, max: maxAllowedLength },
    } = formState.password;

    if (password === '') {
      errors.password = 'Invalid password';
    } else if (
      password.length < minAllowedLength ||
      password.length > maxAllowedLength
    ) {
      errors.password = `Password length must be between ${minAllowedLength} and ${maxAllowedLength}`;
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid()) return;
    const credentials = {
      email: formState.email.value,
      password: formState.password.value,
    };

    console.log(credentials);
    setFormState(initialState);
  };

  return (
    <form className='form form-login' onSubmit={handleSubmit}>
      <h3 className='form-login__title'>Sign in</h3>
      <EmailInput
        label='email'
        value={formState.email.value}
        onChange={handleOnChange}
        errorMsg={errors.email}
      />
      <PasswordInput
        label='password'
        value={formState.password.value}
        onChange={handleOnChange}
        errorMsg={errors.password}
        attributes={formState.password.validation}
      />
      <button className='btn'>login</button>
    </form>
  );
};

export default SignIn;