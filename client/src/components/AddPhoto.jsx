import React from 'react';
import propTypes from 'prop-types';
import style from 'styled-components';
import { IoIosCloseCircle } from 'react-icons/io';
import axios from 'axios';
import UploadPhotos from './UploadPhotos';

const ModalContainer = style.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 250px;
  height: 50%;
  background: white;
  padding-left: 2em;
  padding-right: 2em;
  padding-top: 2em;
  padding-bottom: 2em;
  border: 3px solid #636262;
  border-radius: 25px;
  font-size: 1em;
  z-index: 99;
`;
const SubmitContainer = style.div`
  display: flex;
  gap: 20px;
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
  width: 30px;
  height: 30px;
  top: 10px;
  right: 10px;
  color: #636262;
  cursor: pointer;
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
`;
// const Header = style.h3`
//   margin-top: 0;
// `;
const AddButton = style.button`
  height: 40px;
  width: 120px;
  background-color: #636262;
  border: 3px solid #636262;
  border-radius: 20px;
  cursor: pointer;
  opacity: 0.7;
`;
const SkipButton = style(AddButton)`
  background-color: white;
`;

function AddPhoto({
  photos, setPhotos, setUploadPhoto, submit, setSubmit,
}) {
  const handleSubmit = () => {
    console.log('Submit!');
    setSubmit(!submit);
    setUploadPhoto(false);
  };
  return (
    <ModalContainer>
      <CloseButton
        type="button"
        onClick={() => {
          document.documentElement.style.overflow = 'auto';
          setUploadPhoto(false);
        }}
      >
        <CloseIcon />
      </CloseButton>
      {/* <Header>Add Photos</Header> */}
      <UploadPhotos photos={photos} setPhotos={setPhotos} />
      <SubmitContainer>
        <SkipButton type="button" onClick={() => handleSubmit()}>Skip</SkipButton>
        <AddButton type="button" onClick={() => handleSubmit()}>Add</AddButton>
      </SubmitContainer>
    </ModalContainer>
  );
}

AddPhoto.propTypes = {
  setUploadPhoto: propTypes.func,
};
AddPhoto.defaultProps = {
  setUploadPhoto: (e) => e,
};

export default AddPhoto;
