import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Modal = ({
  title,
  actionText,
  handleConfirm,
  handleClose,
  positionBoxClass = 'modal__box--top',
}) => (
  <div className='modal'>
    <div className={`modal__box ${positionBoxClass}`}>
      <div className='modal__header'>
        <h3 className='modal__title'>{title}</h3>
        <span onClick={handleClose} className='close'>
          &times;
        </span>
      </div>
      <p className='modal__question'>Are you sure you want to {actionText}?</p>
      <button
        onClick={handleConfirm}
        className='modal__btn modal__btn--confirm'
      >
        Confirm
      </button>
      <button onClick={handleClose} className='modal__btn modal__btn--cancel'>
        Cancel
      </button>
    </div>
  </div>
);

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  actionText: PropTypes.string.isRequired,
  handleConfirm: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  styleBoxPosition: PropTypes.object,
};

export default Modal;
