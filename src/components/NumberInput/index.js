import React from 'react';
import PropTypes from 'prop-types';

const NumberInput = ({
  label,
  name,
  value,
  attributes = {},
  errorMsg = '',
  onChange,
}) => {
  let wrapperClassName = 'form__control';
  if (errorMsg) {
    wrapperClassName += ' form__control--error';
  }
  return (
    <div className={wrapperClassName}>
      <label htmlFor={label} className='form__label'>
        {label}
      </label>
      <input
        type='number'
        className='form__input'
        name={name}
        value={value}
        placeholder={`Your ${label}`}
        onChange={onChange}
        {...attributes}
      />
      {errorMsg && <small className='form__error-msg'>{errorMsg}</small>}
    </div>
  );
};

NumberInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  attributes: PropTypes.object,
  errorMsg: PropTypes.string,
};

export default NumberInput;
