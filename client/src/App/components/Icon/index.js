import React from 'react';

import ArrowThinLeft from '../../../assets/icons/arrow-thin-left';
import Bolt from '../../../assets/icons/bolt';
import Heart from '../../../assets/icons/heart';

import { SVG } from './style';

const icons = ({ icon, fill }) => ({
  'arrow-thin-left': <ArrowThinLeft fill={fill} />,
  bolt: <Bolt fill={fill} />,
  heart: <Heart fill={fill} />,
})[icon];

const Icon = props => (
  <SVG
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    width="20"
    height="20"
    mr={props.mr}
  >
    {icons(props)}
  </SVG>
);

export default Icon;
