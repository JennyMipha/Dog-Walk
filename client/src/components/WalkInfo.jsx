import React from 'react';
import { InfoWindow } from '@react-google-maps/api';
import style from 'styled-components';
import { IoIosCloseCircle } from 'react-icons/io';
import propTypes from 'prop-types';
import Star from './Star';

const ModalContainer = style.div`
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

const Stars = style.div`
  display: flex;
  height: 100%;
  width: 35%;
  align-items: center;
`;

function InfoModal({ position, selected, setSelected }) {
  return (
    <InfoWindow
      position={position}
      onCloseClick={() => {
        setSelected(null);
      }}
    >
      {/* <CloseButton
        type="button"
        onClick={() => {
          document.documentElement.style.overflow = 'auto';
          setSelected(false);
        }}
      >
        <CloseIcon />
      </CloseButton> */}
      <div>
        Rating:
        {selected.rating}
        {[1, 2, 3, 4, 5].map((ele) => (
          <Stars>
            <Star
              key={ele}
              filled={ele <= selected.rating}
            />
          </Stars>
        ))}
      </div>
    </InfoWindow>
  );
}

InfoModal.propTypes = {
  setSelected: propTypes.func,
};
InfoModal.defaultProps = {
  setSelected: (e) => e,
};

export default InfoModal;
