import React, { useState } from 'react';
import Modal from './Modal';

const UpdateModal = ({ isOpen, onClose, onUpdate, initialData }: any) => {
  const [data, setData] = useState(initialData);

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data)
  };

  const handleUpdate = () => {
    onUpdate(data);
    onClose();
  };
  
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <input
        type="text"
        name="label"
        value={data.label}
        onChange={handleChange}
      />
      <button onClick={handleUpdate}>Update</button>
    </Modal>
  );
};

export default UpdateModal;
