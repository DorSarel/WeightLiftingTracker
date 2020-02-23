import React, { useContext } from 'react';
import UserData from '../UserData';
import './style.scss';

import { UserContext } from '../../contexts/UserContext';

const User = () => {
  const { state: userState } = useContext(UserContext);
  const { personal_info } = userState;

  let userData = [];
  for (let key in personal_info) {
    userData.push(
      <UserData
        label={key}
        value={personal_info[key].value}
        unit={personal_info[key].unit}
      />
    );
  }

  return (
    <div className='user'>
      <img
        src='https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80'
        className='user__image'
        alt='User'
      />
      <div className='user__view'>
        <h2 className='user__title'>Trainee Info:</h2>
        <div className='user__personal'>{userData}</div>
      </div>
    </div>
  );
};

export default User;
