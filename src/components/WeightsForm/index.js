import React, { useState, useEffect, useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';

// need to be replaced with external data source
const lifts = ['HPC', 'Squat Snatch', 'Clean', 'Jerk'];

const WeightsForm = () => {
  const initialState = {
    lifting: '',
    weight: 0,
    isSubmitting: false,
  };
  const [state, setState] = useState(initialState);
  const { addNewUserWeight } = useContext(UserContext);
  const selectInput = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { value } = selectInput.current;
    setState(prevState => ({ ...prevState, lifting: value }));
  }, []);

  const onInputChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const addNewWeight = e => {
    e.preventDefault();
    setState(prevState => ({ ...prevState, isSubmitting: true }));
    const payload = { [state.lifting]: state.weight };
    console.log(payload);
    setTimeout(() => {
      addNewUserWeight(payload);
      setState(prevState => ({
        ...prevState,
        lifting: '',
        weight: 0,
        isSubmitting: false,
      }));
      history.push('/dashboard');
    }, 1500);
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
          ref={selectInput}
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
      <button onClick={addNewWeight} className='form__btn'>
        {state.isSubmitting ? 'Adding...' : 'Done it!'}
      </button>
    </form>
  );
};

export default WeightsForm;
