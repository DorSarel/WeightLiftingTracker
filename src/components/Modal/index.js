import React from 'react';
import './style.scss';

const Modal = () => (
  <div className='modal'>
    <div className='modal__box'>
      <h3 className='modal__title'>Title</h3>
      <button className='modal__btn modal__btn--confirm'>Confirm</button>
      <button className='modal__btn modal__btn--cancel'>Cancel</button>
    </div>
  </div>
);

export default Modal;
