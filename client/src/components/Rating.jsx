import React from 'react';
import propTypes from 'prop-types';
import style from 'styled-components';
import Star from './Star';

const Stars = style.div`
  display: flex;
  height: 100%;
  width: 35%;
  align-items: center;
`;
function Rating({ rating, setRating }) {
  return (
    <Stars>
      {[1, 2, 3, 4, 5].map((ele) => (
        <Star
          key={ele}
          filled={ele <= rating}
          onClick={() => {
            setRating(ele);
          }}
        />
      ))}
    </Stars>
  );
}

Rating.propTypes = {
  rating: propTypes.number,
  setRating: propTypes.func,
};
Rating.defaultProps = {
  rating: 0,
  setRating: (e) => e,
};
export default Rating;
