import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { RiStarSFill } from 'react-icons/ri';

const UnfilledStar = styled(RiStarSFill)`
  width: 40px;
  height: 40px;
  border: 2px;
  color: #636262;
  cursor: pointer;
  opacity: 0.5;
`;
const FilledStar = styled(UnfilledStar)`
  opacity: 1;
`;
function Star({ filled, onClick }) {
  if (filled) {
    return (<FilledStar onClick={onClick} />);
  }
  return (<UnfilledStar onClick={onClick} />);
}

Star.propTypes = {
  filled: PropTypes.bool,
  onClick: PropTypes.func,
};

Star.defaultProps = {
  onClick: (e) => e,
  filled: false,
};

export default Star;
