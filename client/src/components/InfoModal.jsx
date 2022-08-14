import React from 'react';
import style from 'styled-components';
import { IoIosCloseCircle } from 'react-icons/io';
import propTypes from 'prop-types';

const ModalContainer = style.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 300px;
  background: white;
  padding-left: 2em;
  padding-right: 2em;
  padding-top: 2em;
  padding-bottom: 2em;
  border: 3px solid  #636262;
  border-radius: 25px;
`;

const CloseButton = style.button`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 40px;
  height: 40px;
  background: transparent;
  padding: 0;
  border: 0;
`;

const CloseIcon = style(IoIosCloseCircle)`
  position: absolute;
  width: 25px;
  height: 25px;
  top: 10px;
  right: 10px;
  color: #636262;
  cursor: pointer;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`;

function InfoModal({ position, setSelected }) {
  return (
    <ModalContainer>
      <CloseButton
        type="button"
        onClick={() => {
          document.documentElement.style.overflow = 'auto';
          setSelected(false);
        }}
      >
        <CloseIcon />
      </CloseButton>
    </ModalContainer>
  );
}

InfoModal.propTypes = {
  setSelected: propTypes.func,
};
InfoModal.defaultProps = {
  setSelected: (e) => e,
};

export default InfoModal;
