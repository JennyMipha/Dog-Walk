import React, { useState } from 'react';
import style from 'styled-components';
import propTypes from 'prop-types';
import usePlacesAutocomplete, {
  getGeocode, getLatLng,
} from 'use-places-autocomplete';
import PlacesAutocomplete from 'react-places-autocomplete';

const TestAutoComplete = style(PlacesAutocomplete)`
  z-index: 99;
`;

const Bar = style.button`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 280px;
  padding: 0;
  border: 0;
  background: transparent;
  z-index: 99;
`;
const InputBar = style.input`
  height: 60px;
  width: 180px;
  border: 0;
  padding: 0 0 0 1em;
  background: transparent;
  font-size: 1.2em;
`;
const SuggestionList = style.div`
  width: 13em;
`;

function SearchBar({ panTo, setLat, setLng }) {
  const [address, setAddress] = useState('');
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: {
        lat: () => 37.44662,
        lng: () => -122.13673,
      },
      radius: 20 * 1000,
    },
  });

  const handleChange = (val) => {
    setAddress(val);
  };
  const handleSelect = async (val) => {
    try {
      const result = await getGeocode({ address: val });
      const { lat, lng } = await getLatLng(result[0]);
      console.log('lat = ', lat, 'lng = ', lng);
      setLat(lat);
      setLng(lng);
      panTo({ lat, lng });
    } catch (err) {
      console.log('handleSelect failed! err = ', err);
    }
    setAddress(val);
  };

  return (
    <TestAutoComplete
      value={address}
      onChange={handleChange}
      onSelect={handleSelect}
    >
      {({
        getInputProps, suggestions, getSuggestionItemProps, loading
      }) => (
        <Bar>
          <InputBar
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...getInputProps({
              placeholder: 'Location ...',
            })}
          />
          <SuggestionList>
            {suggestions.map((suggestion) => {
              const style = suggestion.active
                ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                : { backgroundColor: '#ffffff', cursor: 'pointer' };
              return (
                <div
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  {...getSuggestionItemProps(suggestion, {
                    style,
                  })}
                >
                  <span>{suggestion.description}</span>
                </div>
              );
            })}
          </SuggestionList>
        </Bar>
      )}
    </TestAutoComplete>
  );
}Bar.propTypes = {
  panTo: propTypes.func,
};
SearchBar.defaultProps = {
  panTo: (e) => e,
};

export default SearchBar;
