import React, { useState, useEffect, useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';

// need to be replaced with external data source
const weightweightliftingExerciseExercises = [
  'HPC',
  'Squat Snatch',
  'Clean',
  'Jerk',
];

const WeightsForm = () => {
  const initialState = {
    weightliftingExercise: '',
    weight: 0,
    isSubmitting: false,
  };
  const [state, setState] = useState(initialState);
  const { addNewUserWeight } = useContext(UserContext);
  const selectInput = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { value } = selectInput.current;
    setState(prevState => ({ ...prevState, weightliftingExercise: value }));
  }, []);

  const onInputChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const addNewWeight = e => {
    e.preventDefault();
    setState(prevState => ({ ...prevState, isSubmitting: true }));
    const payload = { [state.weightliftingExercise]: state.weight };
    console.log(payload);
    setTimeout(() => {
      addNewUserWeight(payload);
      setState(prevState => ({
        ...prevState,
        weightliftingExercise: '',
        weight: 0,
        isSubmitting: false,
      }));
      history.push('/dashboard');
    }, 1500);
  };

  // UI
  const options = weightweightliftingExerciseExercises.map(item => {
    return (
      <option value={item} key={item}>
        {item}
      </option>
    );
  });

  return (
    <form className='form'>
      <div className='form__control'>
        <label className='form__label'>Exercise</label>
        <select
          ref={selectInput}
          onChange={onInputChange}
          name='weightliftingExercise'
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
      <button onClick={addNewWeight} className='btn'>
        {state.isSubmitting ? 'Adding...' : 'Add new weight'}
      </button>
    </form>
  );
};

export default WeightsForm;
