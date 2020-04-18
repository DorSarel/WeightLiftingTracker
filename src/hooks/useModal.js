import { useState } from 'react';

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const setModalStatus = (shouldViewModal) => {
    setIsOpen(shouldViewModal);
  };

  return [isOpen, setModalStatus];
};
