import React, { useState, useCallback } from 'react';
import propTypes from 'prop-types';
import style from 'styled-components';
import {
  GoogleMap, Marker, InfoWindow,
} from '@react-google-maps/api';
import mapStyle from '../styles/mapStyles';
import Locate from './Locate';
import WalkInfo from './WalkInfo';

require('dotenv').config();

const MapContainer = style.div`
  position: relative;
  z-index: 0;
`;

function Map({ lat, lng, walks, mapRef, panTo, onMapLoad }) {
  const [markers, setMarkers] = useState([]);
  const [selected, setSelected] = useState(null);

  const center = () => {
    if (lat && lng) {
      return ({
        lat,
        lng,
      });
    }
    return ({
      lat: 37.44662,
      lng: -122.13673,
    });
  };
  const containerStyle = {
    width: '100vw',
    height: '90vh',
  };
  const options = {
    styles: mapStyle,
    disableDefaultUI: true,
    zoomControl: true,
  };
  const onMapClick = useCallback((e) => {
    setMarkers((pre) => [...pre, {
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
      time: new Date(),
    }]);
  });

  return (
    <MapContainer>
      <Locate panTo={panTo} />
      <GoogleMap
        zoom={10}
        center={center()}
        mapContainerStyle={containerStyle}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        {walks.map((walk) => (
          <Marker
            key={walk._id}
            position={{
              lat: walk.lat,
              lng: walk.lng,
            }}
            icon={{
              url: '/paw.png',
              scaledSize: new window.google.maps.Size(30, 30),
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
            }}
            onClick={() => {
              setSelected(walk);
            }}
          />
        ))}
        { selected ? (
          <WalkInfo position={{ lat: selected.lat, lng: selected.lng }} selected={selected} />
        ) : null}
      </GoogleMap>
    </MapContainer>
  );
}

Map.propTypes = {
  panTo: propTypes.func,
};
Map.defaultProps = {
  panTo: (e) => e,
};

export default Map;
