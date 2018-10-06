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
    const { first, second, third } = this.props.haiku;
    const { screenName } = this.props;
    return (
      <HaikuWrapper>
        <HaikuText>
          {first}
        </HaikuText>
        <HaikuText>
          {second}
        </HaikuText>
        <HaikuText>
          {third}
        </HaikuText>
        <HaikuFooter>
          <HaikuUsername href={`https://twitter.com/${screenName}`} target="_blank">
            @{screenName}
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
