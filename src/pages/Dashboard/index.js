import React from 'react';
import './style.scss';

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className='user'>
        <img
          src='https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80'
          className='user__image'
          alt='User'
        />
        <div className='user__view'>
          <h2 className='user__title'>Trainee Info:</h2>
          <div className='user__personal'>
            <div className='user__data'>
              <span className='user__value'>26</span>
              <span className='user__key'>Age</span>
            </div>
            <div className='user__data'>
              <span className='user__value'>76.1 Kg</span>
              <span className='user__key'>Weight</span>
            </div>
            <div className='user__data'>
              <span className='user__value'>173cm</span>
              <span className='user__key'>Height</span>
            </div>
            <div className='user__data'>
              <span className='user__value'>13.5%</span>
              <span className='user__key'>Fat</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
