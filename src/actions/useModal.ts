import { useState } from "react";

const useModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClickDismiss = () => setIsOpen(!isOpen);

  return {
    isOpen,
    handleClickDismiss,
  };
};

export default useModal;
