import React from 'react';
import UserData from '../UserData';
import './style.scss';

const User = () => {
  return (
    <div className='user'>
      <img
        src='https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80'
        className='user__image'
        alt='User'
      />
      <div className='user__view'>
        <h2 className='user__title'>Trainee Info:</h2>
        <div className='user__personal'>
          <UserData label={'Age'} value={26} />
          <UserData label={'Weight'} value={76.1} unit={'Kg'} />
          <UserData label={'Height'} value={173} unit={'cm'} />
          <UserData label={'Fat'} value={13.5} unit={'%'} />
        </div>
      </div>
    </div>
  );
};

export default User;
