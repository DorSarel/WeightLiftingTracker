import React, { useContext } from 'react';
import UserData from '../UserData';
import WeightsProgress from '../WeightsProgress';
import './style.scss';

import { UserContext } from '../../contexts/UserContext';

const User = () => {
  const { state: userState } = useContext(UserContext);
  const { personal_info } = userState;

  let userData = [];
  for (let key in personal_info) {
    userData.push(
      <UserData
        key={key}
        label={key}
        value={personal_info[key].value}
        unit={personal_info[key].unit}
      />
    );
  }

  return (
    <div className='user'>
      <div className='user__profile'>{userData}</div>
      <WeightsProgress />
    </div>
  );
};

export default User;
