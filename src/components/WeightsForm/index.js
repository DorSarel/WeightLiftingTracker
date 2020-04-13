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

const WeightsForm = ({ onSave, saving }) => {
  const [exercise, setExercise] = useState('');
  const [weight, setWeight] = useState({
    value: 0.5,
    validation: {
      min: 0.5,
      max: 500,
      step: 0.1,
    },
  });
  const [errors, setErrors] = useState({});

  const isFormValid = () => {
    let errors = {};

    if (exercise === '')
      errors.exercise = 'Please select exercise from the list';

    const { min: minAllowedValue, max: maxAllowedValue } = weight.validation;
    if (weight.value === '') {
      errors.weight = 'Weight must be a number';
    } else if (
      weight.value < minAllowedValue ||
      weight.value > maxAllowedValue
    ) {
      errors.weight = `Weight must be between ${minAllowedValue} and ${maxAllowedValue}`;
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

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

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid()) return;

    const newWeight = {
      exercise,
      weight: weight.value,
      createdAt: Date.now(),
    };
    onSave(newWeight);
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
      <form className='form' onSubmit={handleOnSubmit}>
        <SelectInput
          name='exercise'
          label='exercise'
          value={exercise}
          onChange={handleSelectOnChange}
          options={options}
          defaultOption='Select Exercise'
          error={errors.exercise}
        />
        <NumberInput
          label='weight'
          value={weight.value}
          onChange={handleWeightOnChage}
          attributes={weight.validation}
          errorMsg={errors.weight}
        />
        <button className='btn'>{saving ? 'adding...' : 'add weight'}</button>
      </form>
    </>
  );
};

export default WeightsForm;
