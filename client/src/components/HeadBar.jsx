import React from 'react';
import propTypes from 'prop-types';
import style from 'styled-components';
import Title from './Title';
import SearchBar from './SearchBar';
import Rating from './Rating';
import Add from './Add';
import User from './User';

const HeadBarContainer = style.div`
  width: 100%;
  height: 80px;
`;

const TitleContainer = style.div`
  position: fixed;
  width: 50px;
`;

const AddContainer = style.div`
  display: flex;
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  height: 60px;
  width: 400px;
  display: flex;
  border: 3px solid #636262;
  border-radius: 35px;
`;

const UserContainer = style.div`
  position: fixed;
  top: 10px;
  right: 10px;
  width: 50px;
`;

function HeadBar({
  lat, setLat, lng, setLng, rating, setRating, panTo, setUploadPhoto,
}) {
  return (
    <HeadBarContainer>
      <TitleContainer>
        <Title />
      </TitleContainer>
      <AddContainer>
        <SearchBar panTo={panTo} setLng={setLng} setLat={setLat} />
        <Rating setRating={setRating} rating={rating} />
        <Add lat={lat} lng={lng} rating={rating} setUploadPhoto={setUploadPhoto} />
      </AddContainer>
      <UserContainer>
        <User />
      </UserContainer>
    </HeadBarContainer>
  );
}

HeadBar.propTypes = {
  lat: propTypes.number,
  setLat: propTypes.func,
  lng: propTypes.number,
  setLng: propTypes.func,
  rating: propTypes.number,
  setRating: propTypes.func,
  setUploadPhoto: propTypes.func,
  panTo: propTypes.func,
};
HeadBar.defaultProps = {
  lat: null,
  setLat: (e) => e,
  lng: null,
  setLng: (e) => e,
  rating: 0,
  setRating: (e) => e,
  setUploadPhoto: (e) => e,
  panTo: (e) => e,
};
export default HeadBar;
