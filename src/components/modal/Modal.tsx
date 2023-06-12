import React from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 4px;
`;

const Modal = ({ isOpen, onClose, children }: any) => {
  if (!isOpen) {
    return null;
  }

  return (
    <ModalOverlay>
      <ModalContent>
        {children}
        <button onClick={onClose}>Close</button>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
