import React from 'react';
import './style.scss';

const Modal = () => (
  <div className='modal'>
    <div className='modal__box'>
      <div className='modal__header'>
        <h3 className='modal__title'>Title</h3>
        <span className='close'>&times;</span>
      </div>
      <p className='modal__question'>Are you sure you want to logout?</p>
      <button className='modal__btn modal__btn--confirm'>Confirm</button>
      <button className='modal__btn modal__btn--cancel'>Cancel</button>
    </div>
  </div>
);

export default Modal;
