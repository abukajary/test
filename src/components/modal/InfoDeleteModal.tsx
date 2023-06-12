import React from "react";
import Modal from "./Modal";

const InfoDeleteModal = ({ isOpen, onClose, onConfirm }: any) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2>Are you sure you want to delete?</h2>
      <button onClick={onConfirm}>Confirm</button>
    </Modal>
  );
};

export default InfoDeleteModal;
