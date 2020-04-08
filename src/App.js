import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <main>
      <Switch>
        <Route exact path='/'>
          <Redirect to='/dashboard' />
        </Route>
        <Route path='/dashboard'>
          <Dashboard />
        </Route>
      </Switch>
    </main>
  );
}

export default App;
