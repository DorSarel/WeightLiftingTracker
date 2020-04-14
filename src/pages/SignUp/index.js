import React, { useState } from 'react';
import StringInput from '../../components/StringInput';
import NumberInput from '../../components/NumberInput';
import Spinner from '../../components/Spinner';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signUp } from '../../redux/actions/authActions';
import {
  textInitialFormState,
  numberInitialFormState,
} from './initialFormState';
import './style.scss';

const SignUp = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [textFormState, setTextFormState] = useState(textInitialFormState);
  const [numberFormState, setNumberFormState] = useState(
    numberInitialFormState
  );
  const [saving, setSaving] = useState(false);
  const [errors, setErrors] = useState({});

  const isFormValid = () => {
    const numberErrors = validateNumberInputs();
    const textErrors = validateTextInputs();

    const errors = {
      ...numberErrors,
      ...textErrors,
    };

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateNumberInputs = () => {
    let errors = {};

    for (let inputName in numberFormState) {
      const {
        value,
        validation: { min: minAllowedLength, max: maxAllowedLength },
      } = numberFormState[inputName];

      if (value === '') {
        errors[inputName] = `${inputName} cannot be blank`;
      } else if (value < minAllowedLength || value > maxAllowedLength) {
        errors[
          inputName
        ] = `${inputName} length must be between ${minAllowedLength} and ${maxAllowedLength}`;
      }
    }
    return errors;
  };

  const validateTextInputs = () => {
    // validate email, username, password
    let errors = {};

    const email = textFormState.email.value;
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(email).toLowerCase()) || email === '') {
      errors.email = 'Invalid email';
    }

    const firstName = textFormState.firstName.value;
    const lastName = textFormState.lastName.value;

    if (firstName === '') errors.firstName = 'Please enter valid name';
    if (lastName === '') errors.lastName = 'Please enter valid name';

    const {
      value: password,
      validation: { min: minAllowedLength, max: maxAllowedLength },
    } = textFormState.password;

    if (password === '') {
      errors.password = 'Invalid password';
    } else if (
      password.length < minAllowedLength ||
      password.length > maxAllowedLength
    ) {
      errors.password = `Password length must be between ${minAllowedLength} and ${maxAllowedLength}`;
    }

    return errors;
  };

  const handleTextOnChange = (e) => {
    const { name, value } = e.target;
    setTextFormState((prevState) => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        value,
      },
    }));
  };

  const handleNumberOnChange = (e) => {
    const { name, value } = e.target;
    setNumberFormState((prevState) => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        value: parseFloat(value),
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid()) return;
    setSaving(true);
    const credentials = {
      email: textFormState.email.value,
      password: textFormState.password.value,
    };

    const userData = {
      age: {
        value: numberFormState.age.value,
        unit: '',
      },
      weight: {
        value: numberFormState.weight.value,
        unit: 'kg',
      },
      height: {
        value: numberFormState.height.value,
        unit: 'cm',
      },
      fat: {
        value: numberFormState.fat.value,
        unit: '%',
      },
      firstName: textFormState.firstName.value,
      lastName: textFormState.lastName.value,
    };

    setErrors({});
    dispatch(signUp(credentials, userData))
      .then(() => {
        setSaving(false);
        history.push('/dashboard');
      })
      .catch((error) => {
        setSaving(false);
      });
  };

  return saving ? (
    <Spinner />
  ) : (
    <form className='form form-login form-signup' onSubmit={handleSubmit}>
      <h3 className='form-login__title form-signup__title'>Sign up</h3>
      <StringInput
        type='email'
        name='email'
        label='email'
        value={textFormState.email.value}
        onChange={handleTextOnChange}
        errorMsg={errors.email}
      />
      <StringInput
        type='password'
        name='password'
        label='password'
        value={textFormState.password.value}
        onChange={handleTextOnChange}
        errorMsg={errors.password}
        attributes={textFormState.password.validation}
      />
      <StringInput
        type='text'
        name='firstName'
        label='first name'
        value={textFormState.firstName.value}
        onChange={handleTextOnChange}
        errorMsg={errors.firstName}
      />
      <StringInput
        type='text'
        name='lastName'
        label='last name'
        value={textFormState.lastName.value}
        onChange={handleTextOnChange}
        errorMsg={errors.lastName}
      />
      <NumberInput
        label='age'
        value={numberFormState.age.value}
        onChange={handleNumberOnChange}
        errorMsg={errors.age}
        attributes={numberFormState.age.validation}
      />
      <NumberInput
        label='weight'
        value={numberFormState.weight.value}
        onChange={handleNumberOnChange}
        errorMsg={errors.weight}
        attributes={numberFormState.weight.validation}
      />
      <NumberInput
        label='height'
        value={numberFormState.height.value}
        onChange={handleNumberOnChange}
        errorMsg={errors.height}
        attributes={numberFormState.height.validation}
      />
      <NumberInput
        label='fat'
        value={numberFormState.fat.value}
        onChange={handleNumberOnChange}
        errorMsg={errors.fat}
        attributes={numberFormState.fat.validation}
      />
      <button className='btn'>Sign up</button>
    </form>
  );
};

export default SignUp;
