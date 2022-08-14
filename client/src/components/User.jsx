import React from 'react';
import { TbUserCircle } from 'react-icons/tb';
import style from 'styled-components';

const UserIcon = style(TbUserCircle)`
  position: absolute;
  width: 50px;
  height: 50px;
  top: 5px;
  right: 5px;
  color: #636262;
  cursor: pointer;
  opacity: 0.9;
  &:hover {
    opacity: 1;
`;

function User() {
  return (
    <div>
      <UserIcon />
    </div>
  );
}
export default User;
