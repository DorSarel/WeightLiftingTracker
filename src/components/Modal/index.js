import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Modal = ({ title, actionText, handleConfirm, handleClose }) => {
  const elementToScrollTo = useRef(null);

  useEffect(() => {
    const viewportOffsets = elementToScrollTo.current.getBoundingClientRect();
    window.scrollTo({
      top: window.innerHeight / 2 + elementToScrollTo.current.offsetHeight,
      left: viewportOffsets.left,
      behavior: 'smooth',
    });
  }, []);

  return (
    <div className='modal'>
      <div ref={elementToScrollTo} className='modal__box'>
        <div className='modal__header'>
          <h3 className='modal__title'>{title}</h3>
          <span onClick={handleClose} className='close'>
            &times;
          </span>
        </div>
        <p className='modal__question'>
          Are you sure you want to {actionText}?
        </p>
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
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  actionText: PropTypes.string.isRequired,
  handleConfirm: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  positionBoxClass: PropTypes.string,
};

export default Modal;
