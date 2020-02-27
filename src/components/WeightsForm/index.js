import React, { useState } from 'react';

const lifts = ['HPC', 'Squat Snatch', 'Clean', 'Jerk'];

const WeightsForm = () => {
  const initialState = {
    lifting: '',
    weight: 0,
    isSubmitting: false,
  };
  const [state, setState] = useState(initialState);

  const onInputChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  // UI
  const options = lifts.map(item => {
    return (
      <option value={item} key={item}>
        {item}
      </option>
    );
  });

  return (
    <form className='form'>
      <div className='form__data'>
        <label className='form__label'>I Lift:</label>
        <select
          onChange={onInputChange}
          name='lifting'
          className='form__select'
        >
          {options}
        </select>
        <input
          type='number'
          name='weight'
          onChange={onInputChange}
          className='form__input'
        />
      </div>
      <button className='form__btn'>Done it!</button>
    </form>
  );
};

export default WeightsForm;
