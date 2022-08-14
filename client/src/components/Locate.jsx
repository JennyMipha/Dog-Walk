import React from 'react';
import style from 'styled-components';
import propTypes from 'prop-types';
import { BiCurrentLocation } from 'react-icons/bi';

const LocationButton = style.button`
  position: absolute;
  width: 40px;
  height: 40px;
  bottom: 120px;
  right: 0px;
  background: transparent;
  padding: 0;
  border: 0;
  z-index: 10;
`;

const LocationIcon = style(BiCurrentLocation)`
  position: absolute;
  width: 40px;
  height: 40px;
  top: 0px;
  right: -5px;
  z-index: 11;
  color: #636262;
  cursor: pointer;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`;

function Locate({ panTo }) {
  return (
    <LocationButton
      type="button"
      onClick={() => {
        navigator.geolocation.getCurrentPosition((position) => {
          panTo({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        });
      }}
    >
      <LocationIcon />
    </LocationButton>
  );
}

Locate.propTypes = {
  panTo: propTypes.func,
};
Locate.defaultProps = {
  panTo: (e) => e,
};

export default Locate;
