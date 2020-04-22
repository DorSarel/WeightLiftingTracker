import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import StringInput from '../../components/StringInput';
import Spinner from '../../components/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signIn } from '../../redux/actions/authActions';
import { toast } from 'react-toastify';
import { checkEmail, checkPassword } from '../../utils/utils';
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
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const history = useHistory();
  const [formState, setFormState] = useState(initialState);
  const [saving, setSaving] = useState(false);
  const [errors, setErrors] = useState({});

  const isFormValid = () => {
    let errors = {};
    // validate email
    const emailErrorMessage = checkEmail(formState.email.value);
    if (emailErrorMessage) errors.email = emailErrorMessage;

    // validate password
    const {
      value: password,
      validation: { min: minAllowedLength, max: maxAllowedLength },
    } = formState.password;
    const passwordValidation = checkPassword(
      password,
      minAllowedLength,
      maxAllowedLength
    );
    if (passwordValidation.error) errors.password = passwordValidation.error;

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

    setSaving(true);
    setErrors({});
    dispatch(signIn(credentials))
      .then(() => {
        history.push('/dashboard');
      })
      .catch((error) => {
        toast.error(`Error trying signing in. ${error.message}`);
        setSaving(false);
      });
  };

  if (auth.uid) return <Redirect to='/dashboard' />;

  return saving ? (
    <Spinner />
  ) : (
    <form className='form form-login' onSubmit={handleSubmit}>
      <h3 className='form-login__title'>Sign in</h3>
      <StringInput
        type='email'
        name='email'
        label='email'
        value={formState.email.value}
        onChange={handleOnChange}
        errorMsg={errors.email}
      />
      <StringInput
        type='password'
        name='password'
        label='password'
        value={formState.password.value}
        onChange={handleOnChange}
        errorMsg={errors.password}
        attributes={formState.password.validation}
      />
      <button className='btn'>sign in</button>
    </form>
  );
};

export default SignIn;
