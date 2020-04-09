import React from 'react';
import PropTypes from 'prop-types';

const NumberInput = ({
  label,
  value,
  attributes,
  errorMsg,
  onChangeHandler,
}) => {
  return (
    <div
      className={
        errorMsg === '' ? 'form__control' : 'form__control form__control--error'
      }
    >
      <label className='form__label'>{label}</label>
      <input
        type='number'
        className='form__input'
        name={label}
        value={value}
        placeholder={`Your ${label}`}
        onChange={onChangeHandler}
        {...attributes}
      />
      {errorMsg && <small className='form__error-msg'>{errorMsg}</small>}
    </div>
  );
};

NumberInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  attributes: PropTypes.object,
  errorMsg: PropTypes.string,
};

export default NumberInput;
