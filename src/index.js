import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { UserContextProvider } from './contexts/UserContext';

const app = (
  <UserContextProvider>
    <App />
  </UserContextProvider>
);

ReactDOM.render(app, document.getElementById('root'));
