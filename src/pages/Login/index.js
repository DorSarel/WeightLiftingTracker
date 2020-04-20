import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './style.scss';

const Login = () => {
  const auth = useSelector((state) => state.auth);

  if (auth.uid) return <Redirect to='/dashboard' />;

  return (
    <div className='login'>
      <h1 className='login__title'>
        Lift.<span className='login__title--big'>Track</span>.Repeat
      </h1>
      <p className='login__description'>
        Track & view your lifting weights in a simple way
      </p>
      <Link to='/signup' className='btn login__btn login__btn--end'>
        Sign up
      </Link>
      <Link to='/signin' className='btn login__btn login__btn--start'>
        Sign in
      </Link>
    </div>
  );
};

export default Login;
