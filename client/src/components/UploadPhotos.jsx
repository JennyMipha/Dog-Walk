import React, { useState } from 'react';
import style from 'styled-components';
// import propTypes from 'prop-types';
import { AiOutlinePlus } from 'react-icons/ai';

const UploadPhotosContainer = style.div`
  display: flex;
  gap: 15px;
  margin-top: 40px;
`;

const ButtonContainer = style.div`
  width: 200px;
`;

const UploadButton = style.label`
  display: flex;
  justify-content: center;
  align-items: center;
  top: 5px;
  right: 5px;
  width: 200px;
  height: 200px;
  background-color: #636262;
  border-radius: 5px;
  cursor: pointer;
  opacity: 0.3;
  padding: 0;
`;
const UploadInput = style.input`
  display: none;
`;
const PlusIcon = style(AiOutlinePlus)`
  width: 100px;
  height: 100px;
`;
const ThumbnailContainer = style.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 60px;
`;
const Thumbnail = style.img`
  width: 100%;
  height: 40px;
  object-fit: cover;
  background: #636262;
  border: 2px solid #636262;
  border-radius: 2px;
`;

function UploadPhotos({ photos, setPhotos }) {
  const previewFile = (file) => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPhotos((pre) => [...pre, reader.result]);
      };
    }
  };
  const handleFileInputChange = (e) => {
    const inputFiles = e.target.files;
    // console.log('In AddPhoto, file = ', inputFiles);
    Object.keys(inputFiles).map((key) => previewFile(inputFiles[key]));
  };
  return (
    <UploadPhotosContainer>
      <ButtonContainer>
        <UploadInput
          type="file"
          id="uploadFile"
          accept="image/*"
          // eslint-disable-next-line react/jsx-no-bind
          onChange={handleFileInputChange}
          multiple
        />
        <UploadButton htmlFor="uploadFile">
          <PlusIcon />
        </UploadButton>
      </ButtonContainer>
      <ThumbnailContainer>
        {photos
        && photos.map((preview, index) => (
          <Thumbnail
            src={preview}
            alt="Preview"
            height="100px"
            // eslint-disable-next-line react/no-array-index-key
            key={index}
          />
        ))}
      </ThumbnailContainer>
    </UploadPhotosContainer>
  );
}

// UploadPhotos.propTypes = {
    // photos: propTypes.
// };
// UploadPhotos.defaultProps = {
// };

export default UploadPhotos;
