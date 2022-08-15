import React from 'react';
import style from 'styled-components';
import propTypes from 'prop-types';
import { BsFillPlusCircleFill } from 'react-icons/bs';

const AddButton = style.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 100%;
  background: transparent;
  padding: 0;
  border: 0;
  z-index: 10;
`;

const AddIcon = style(BsFillPlusCircleFill)`
  align-items: center;
  width: 40px;
  height: 40px;
  z-index: 11;
  color: #636262;
  cursor: pointer;
  opacity: 0.9;
  &:hover {
    opacity: 1;
  }
`;

function Add({
  lat, lng, rating, setUploadPhoto,
}) {
  const validateInput = () => {
    if (lat && lng && rating) {
      setUploadPhoto(true);
    }
  };
  return (
    <AddButton
      type="button"
      onClick={() => validateInput()}
    >
      <AddIcon />
    </AddButton>
  );
}

Add.propTypes = {
  lat: propTypes.number,
  lng: propTypes.number,
  rating: propTypes.number,
  setUploadPhoto: propTypes.func,
};
Add.defaultProps = {
  lat: null,
  lng: null,
  rating: 0,
  setUploadPhoto: (e) => e,
};

export default Add;
