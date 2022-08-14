import React from 'react';
import style from 'styled-components';

const Logo = style.img`
  position: absolute;
  width: 50px;
  height: 50px;
  top: 5px;
  left: 5px;
  color: #636262;
  opacity: 0.7;
`;

const Name = style.div`
  position: absolute;
  margin: 0;
  top: 10px;
  left: 65px;
  font-size: 1.3em;
  font-weight: bolder;
  color: #636262;
  opacity: 0.9;
`;

function Title() {
  return (
    <div>
      <Logo alt="logo" src="./dog.png" />
      <Name>Dog Walk</Name>
    </div>
  );
}
export default Title;
