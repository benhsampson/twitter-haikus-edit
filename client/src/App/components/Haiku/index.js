import React from 'react';

import starFull from '../../../assets/star-full.svg';

import {
  HaikuWrapper,
  HaikuText,
  HaikuFooter,
  HaikuActions,
  Icon,
  HaikuFavoriteButton,
  HaikuShareButton,
  HaikuUsername,
} from './style';

class Haiku extends React.Component {
  render() {
    return (
      <HaikuWrapper>
        <HaikuText>
          An old silent pond...
        </HaikuText>
        <HaikuText>
          A frog jumps into the pond,
        </HaikuText>
        <HaikuText>
          splash! Silence again.
        </HaikuText>
        <HaikuFooter>
          <HaikuUsername href="https://twitter.com" target="_blank">
            @frogster
          </HaikuUsername>
          <HaikuActions className="actions">
            <HaikuFavoriteButton>
              Favorite
            </HaikuFavoriteButton>
            <HaikuShareButton>
              Tweet
            </HaikuShareButton>
          </HaikuActions>
        </HaikuFooter>
      </HaikuWrapper>
    );
  }
}

export default Haiku;
