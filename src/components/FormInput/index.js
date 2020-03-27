import React from 'react';

const FormInput = ({
  type,
  labelTitle,
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
      <label className='form__label'>{labelTitle}</label>
      <input
        type={type}
        className='form__input'
        name={labelTitle}
        value={value}
        placeholder={`Your ${labelTitle}`}
        onChange={onChangeHandler}
        {...attributes}
      />
      <small className='form__error-msg'>{errorMsg}</small>
    </div>
  );
};

export default FormInput;
