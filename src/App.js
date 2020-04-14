import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import SignIn from './pages/SignIn';

function App() {
  return (
    <main>
      <Switch>
        <Route exact path='/'>
          <Login />
        </Route>
        <Route path='/signin'>
          <SignIn />
        </Route>
        <Route path='/dashboard'>
          <Dashboard />
        </Route>
      </Switch>
    </main>
  );
}

export default App;
