import React from 'react';
import './style.scss';

const UserForm = () => {
  return (
    <form className='form'>
      <div className='form__data'>
        <label className='form__label'>Age</label>
        <input
          type='number'
          className='form__input'
          name='age'
          placeholder='Your Age'
        />
      </div>
      <div className='form__data'>
        <label className='form__label'>Weight</label>
        <input
          type='number'
          className='form__input'
          name='weight'
          placeholder='Your Weight'
        />
      </div>
      <div className='form__data'>
        <label className='form__label'>Height</label>
        <input
          type='number'
          className='form__input'
          name='height'
          placeholder='Your Height'
        />
      </div>
      <div className='form__data'>
        <label className='form__label'>Fat</label>
        <input
          type='number'
          className='form__input'
          name='fat'
          placeholder='Your Body Fat'
        />
      </div>
      <div className='form__data'>
        <button className='form__btn'>Update</button>
      </div>
    </form>
  );
};

export default UserForm;
