import React from 'react';

import Icon from '../Icon';

import { IconButton } from './style';

const BackButton = ({ onClick }) => (
  <IconButton onClick={onClick}>
    <Icon icon="arrow-thin-left" fill="rgba(0,0,0,0.8)" />
  </IconButton>
);

export default BackButton;
