import React, { useState } from 'react';
import SelectInput from '../SelectInput';
import NumberInput from '../NumberInput';

// need to be replaced with external data source
const weightliftingExercises = [
  'HPC',
  'Squat Snatch',
  'Clean',
  'Jerk',
  'Deadlift',
];

const WeightsForm = () => {
  const [exercise, setExercise] = useState('');
  const [weight, setWeight] = useState({
    value: 0.5,
    validation: {
      min: 0.5,
      max: 500,
      step: 0.1,
    },
  });

  const handleSelectOnChange = (e) => {
    const { value } = e.target;
    setExercise(value);
  };

  const handleWeightOnChage = (e) => {
    const { value } = e.target;
    setWeight((prevWeight) => ({
      ...prevWeight,
      value: parseFloat(value),
    }));
  };

  let options = [];
  for (let key of weightliftingExercises) {
    options.push({
      value: key.toLowerCase(),
      text: key,
    });
  }

  return (
    <>
      <h1 className='heading-1 heading-1--center'>Add Weight</h1>
      <form className='form'>
        <SelectInput
          name='exercise'
          label='exercise'
          value={exercise}
          onChange={handleSelectOnChange}
          options={options}
          defaultOption='Select Exercise'
        />
        <NumberInput
          label='weight'
          value={weight.value}
          onChange={handleWeightOnChage}
          attributes={weight.validation}
        />
        <button className='btn'>add weight</button>
      </form>
    </>
  );
};

export default WeightsForm;
