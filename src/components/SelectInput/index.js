import React from 'react';
import PropTypes from 'prop-types';

const SelectInput = ({
  name,
  label,
  defaultOption,
  options,
  onChange,
  value,
  error = '',
}) => (
  <div className='form__control'>
    <label htmlFor={name} className='form__label'>
      {label}
    </label>
    <select
      name={name}
      onChange={onChange}
      value={value}
      className='form__select'
    >
      <option value=''>{defaultOption}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
    {error && <small className='form__error-msg'>{error}</small>}
  </div>
);

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  defaultOption: PropTypes.string,
  error: PropTypes.string,
  options: PropTypes.array.isRequired,
};

export default SelectInput;
