import React, { useState } from 'react';
import EmailInput from '../../components/EmailInput';
import PasswordInput from '../../components/PasswordInput';
import NumberInput from '../../components/NumberInput';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signIn } from '../../redux/actions/authActions';
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
  age: {
    value: 0,
    validation: {
      min: 10,
      max: 150,
    },
  },
  weight: {
    value: 0,
    validation: {
      min: 30,
      max: 350,
    },
  },
  height: {
    value: 0,
    validation: {
      min: 100,
      max: 250,
    },
  },
  fat: {
    value: 0,
    validation: {
      min: 0,
      max: 100,
    },
  },
};

const SignUp = () => {
  const dispatch = useDispatch();
  const history = useHistory();
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

    setErrors({});
    dispatch(signIn(credentials)).then(() => {
      setFormState(initialState);
      history.push('/dashboard');
    });
  };

  return (
    <form className='form form-login form-signup' onSubmit={handleSubmit}>
      <h3 className='form-login__title form-signup__title'>Sign up</h3>
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
      <NumberInput
        label='age'
        value={formState.age.value}
        onChange={handleOnChange}
        errorMsg={errors.age}
        attributes={formState.age.validation}
      />
      <NumberInput
        label='weight'
        value={formState.weight.value}
        onChange={handleOnChange}
        errorMsg={errors.weight}
        attributes={formState.weight.validation}
      />
      <NumberInput
        label='height'
        value={formState.height.value}
        onChange={handleOnChange}
        errorMsg={errors.height}
        attributes={formState.height.validation}
      />
      <NumberInput
        label='fat'
        value={formState.fat.value}
        onChange={handleOnChange}
        errorMsg={errors.fat}
        attributes={formState.fat.validation}
      />
      <button className='btn'>Sign up</button>
    </form>
  );
};

export default SignUp;
