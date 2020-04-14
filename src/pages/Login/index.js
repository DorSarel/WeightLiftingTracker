import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Login = () => {
  return (
    <div className='login'>
      <h1 className='login__title'>
        Lift.<span className='login__title--big'>Track</span>.Repeat
      </h1>
      <p className='login__description'>
        Track & view your lifting weights in a simple way
      </p>
      <Link to='/signup' className='btn login__btn login__btn--end'>
        Signup
      </Link>
      <Link to='/signin' className='btn login__btn login__btn--start'>
        Signin
      </Link>
    </div>
  );
};

export default Login;
