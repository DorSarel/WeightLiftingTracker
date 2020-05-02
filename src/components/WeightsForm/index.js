import React, { useState, useEffect, useRef } from 'react';
import SelectInput from '../SelectInput';
import NumberInput from '../NumberInput';
import { checkNumberInput } from '../../utils/utils';
import weightliftingExercises from '../../config/exercises';

const initialState = {
  exercise: {
    value: '',
  },
  weight: {
    value: 0.5,
    validation: {
      min: 0.5,
      max: 500,
      step: 0.1,
    },
  },
  rounds: {
    value: 1,
    validation: {
      min: 1,
      max: 200,
    },
  },
  reps: {
    value: 1,
    validation: {
      min: 1,
      max: 200,
    },
  },
};

const WeightsForm = ({ onSave, saving }) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const elementToScrollTo = useRef(null);

  useEffect(() => {
    const viewportOffsets = elementToScrollTo.current.getBoundingClientRect();
    window.scrollTo({
      top: viewportOffsets.top,
      left: viewportOffsets.left,
      behavior: 'smooth',
    });
  }, []);

  const { exercise, weight, rounds, reps } = formData;

  const isFormValid = () => {
    let errors = {};

    if (exercise.value === '')
      errors.exercise = 'Please select exercise from the list';

    const { min: minAllowedValue, max: maxAllowedValue } = weight.validation;
    const weightErrorMessage = checkNumberInput(
      weight.value,
      'weight',
      minAllowedValue,
      maxAllowedValue
    );
    if (weightErrorMessage) errors.weight = weightErrorMessage;

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleOnChage = (e) => {
    const { name, value } = e.target;
    if (isNaN(value)) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: { ...prevData[name], value },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: { ...prevData[name], value: parseFloat(value) },
      }));
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid()) return;

    const newWeight = {
      exercise: exercise.value,
      weight: weight.value,
      rounds: rounds.value,
      reps: reps.value,
      createdAt: Date.now(),
    };
    // console.log(newWeight);
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
      <form ref={elementToScrollTo} className='form' onSubmit={handleOnSubmit}>
        <SelectInput
          name='exercise'
          label='exercise'
          value={exercise.value}
          onChange={handleOnChage}
          options={options}
          defaultOption='Select Exercise'
          error={errors.exercise}
        />
        <NumberInput
          label='weight (KG)'
          name='weight'
          value={weight.value}
          onChange={handleOnChage}
          attributes={weight.validation}
          errorMsg={errors.weight}
        />
        <NumberInput
          label='rounds'
          name='rounds'
          value={rounds.value}
          onChange={handleOnChage}
          attributes={rounds.validation}
          errorMsg={errors.rounds}
        />
        <NumberInput
          label='reps'
          name='reps'
          value={reps.value}
          onChange={handleOnChage}
          attributes={reps.validation}
          errorMsg={errors.reps}
        />
        <button disabled={saving} className='btn'>
          {saving ? 'adding...' : 'add weight'}
        </button>
      </form>
    </>
  );
};

export default WeightsForm;
