import React from 'react';
import style from 'styled-components';
import propTypes from 'prop-types';

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

function NavBotton({  }) {
  return (
    <div>

    </div>
  );
}

NavBotton.propTypes = {
  setSelected: propTypes.func,
};
NavBotton.defaultProps = {
  setSelected: (e) => e,
};

export default NavBotton;
