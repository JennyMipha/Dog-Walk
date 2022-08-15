import React, {
  useState, useRef, useCallback, useEffect,
} from 'react';
import { useLoadScript } from '@react-google-maps/api';
import axios from 'axios';
import style from 'styled-components';
import HeadBar from './HeadBar';
import Map from './Map';
import AddPhoto from './AddPhoto';
import NavButton from './NavButton';

const MainContainer = style.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  font-family: 'Roboto', sans-serif;
`;

const HeadBarContainer = style.div`
  width: 100%;
  height: 20%;
`;

const MapContainer = style.div`
  width: 100%;
  height: 80%;
`;

function App() {
  const [libraries] = useState(['places']);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyB1jM-RjsMLhbhEl99_FBhFI5ujzOD8Nig',
    language: 'en',
    libraries,
  });

  const mapRef = useRef();
  const [walks, setWalks] = useState([]);
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [rating, setRating] = useState(0);
  const [uploadPhoto, setUploadPhoto] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [photo, setPhoto] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [showMap, setShowMap] = useState(true);
  const [showList, setShowList] = useState(false);

  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);
  const panTo = useCallback(({ lat, lng }) => {
    console.log('Pan To, latitude = ', lat, 'lng = ', lng);
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  }, []);

  useEffect(() => {
    if (lat && lng) {
      const current = new Date();
      const options = { month: 'long' };
      const date = `${new Intl.DateTimeFormat('en-US', options).format(current)} ${current.getDate().toString()} ${current.getFullYear().toString()}`;
      const data = {
        user: 'hulu',
        lat,
        lng,
        photos: [photoURL],
        date,
        rating,
      };
      console.log('ready to POST, data = ', data);
      axios.post('/walk', data)
        .then(() => {
          console.log('POST success!');
          panTo({ lat, lng });
          axios.get('walk')
            .then((result) => {
              console.log('GET success, result.data = ', result.data);
              setWalks(result.data);
            })
            .catch((err) => {
              console.log('GET failed, err = ', err);
            });
        })
        .catch((err) => {
          console.log('POST failed! err = ', err);
        });
      setPhoto('');
      setPhotoURL('');
    } else {
      axios.get('walk')
        .then((result) => {
          console.log('GET success, result.data = ', result.data);
          setWalks(result.data);
        })
        .catch((err) => {
          console.log('GET failed, err = ', err);
        });
    }
  }, [submit]);

  if (!isLoaded) {
    return (
      <div>
        Loading
      </div>
    );
  }
  return (
    <MainContainer>
      <HeadBarContainer>
        <HeadBar
          lat={lat}
          setLat={setLat}
          lng={lng}
          setLng={setLng}
          rating={rating}
          setRating={setRating}
          panTo={panTo}
          setUploadPhoto={setUploadPhoto}
        />
      </HeadBarContainer>
      {uploadPhoto && (
      <AddPhoto
        photo={photo}
        setPhoto={setPhoto}
        setPhotoURL={setPhotoURL}
        setUploadPhoto={setUploadPhoto}
        submit={submit}
        setSubmit={setSubmit}
      />
      )}
      {showMap && (
      <MapContainer>
        <Map
          lat={lat}
          lng={lng}
          walks={walks}
          isLoaded={isLoaded}
          mapRef={mapRef}
          panTo={panTo}
          onMapLoad={onMapLoad}
        />
      </MapContainer>
      )}
      <NavButton
        setShowMap={setShowMap}
        showMap={showMap}
        setShowList={setShowList}
        showList={showList}
      />
    </MainContainer>
  );
}

export default App;
