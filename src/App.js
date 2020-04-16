import React, { useEffect } from 'react';
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { authCheckState } from './redux/actions/authActions';

function App() {
  const dispatch = useDispatch();
  const { path } = useRouteMatch();

  useEffect(() => {
    dispatch(authCheckState());
  }, [dispatch]);

  return (
    <main>
      <Switch>
        <Route exact path={path}>
          <Login />
        </Route>
        <Route path={`${path}signin`}>
          <SignIn />
        </Route>
        <Route path={`${path}signup`}>
          <SignUp />
        </Route>
        <Route path={`${path}dashboard`}>
          <Dashboard />
        </Route>
        <Redirect to={path} />
      </Switch>
      <ToastContainer
        style={{ fontSize: '1.25rem' }}
        position='top-center'
        closeOnClick
        pauseOnHover
      />
    </main>
  );
}

export default App;
