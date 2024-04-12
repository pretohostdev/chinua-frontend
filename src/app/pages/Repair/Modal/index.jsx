import React from 'react';
import styled from 'styled-components';

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  margin-bottom: 500px;
`;

const ImageModal = styled.div`
  max-width: 80%;
  max-height: 80%;
  img {
    width: 100%;
    height: auto;
  }
`;

const Modal = ({ imageUrl, onClose }) => {
  return (
    <Backdrop onClick={onClose}>
      <ImageModal onClick={(e) => e.stopPropagation()}>
        <img src={imageUrl} alt="Expanded view" />
      </ImageModal>
    </Backdrop>
  );
};

export default Modal;