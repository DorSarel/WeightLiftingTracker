import React from 'react';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
      <Header />
      <main className='container'>
        <Dashboard />
      </main>
    </>
  );
}

export default App;
