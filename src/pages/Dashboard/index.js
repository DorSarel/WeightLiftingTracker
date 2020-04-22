import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import UserInfo from '../../components/UserInfo';
import UserActions from '../../components/UserActions';
import Sidenav from '../../components/Sidenav';
import Spinner from '../../components/Spinner';
import './style.scss';

import { loadUserInfo } from '../../redux/actions/userInfoActions';
import { logout } from '../../redux/actions/authActions';

const Dashboard = () => {
  // redux
  const dispatch = useDispatch();
  const userInformation = useSelector(({ userInfo }) => userInfo);
  const auth = useSelector((state) => state.auth);

  const history = useHistory();

  useEffect(() => {
    if (auth.uid && !userInformation) {
      dispatch(loadUserInfo(auth.uid)).catch((error) => {
        toast.error('Failed to get user information. ' + error.message);
      });
    }
  }, [dispatch, userInformation, auth.uid]);

  const handleUserLogout = () => {
    dispatch(logout())
      .then(() => {
        history.push('/signin');
      })
      .catch((error) => {
        toast.error(`Failed to logout. ${error.message}`);
      });
  };

  // Guard Route
  if (!auth.uid) return <Redirect to='/signin' />;

  return !userInformation ? (
    <Spinner />
  ) : (
    <div className='dashboard'>
      <Sidenav userInfo={userInformation} logout={handleUserLogout} />
      <UserInfo userInfo={userInformation} />
      <UserActions userInfo={userInformation} uid={auth.uid} />
    </div>
  );
};

export default Dashboard;
