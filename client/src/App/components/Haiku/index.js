import React from 'react';

import {
  HaikuWrapper,
  HaikuText,
  HaikuFooter,
  HaikuActions,
  HaikuFavoriteButton,
  HaikuShareButton,
  HaikuUsername,
} from './style';

class Haiku extends React.Component {
  state = {
    hoveringFavoritedButton: false,
  };

  render() {
    const { first, second, third } = this.props.haiku;
    const { screenName, favorited } = this.props;
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
          <HaikuActions>
            <HaikuFavoriteButton
              favorited={favorited}
              className="favorite-button"
              onMouseOver={() => this.setState({ hoveringFavoritedButton: true })}
              onMouseLeave={() => this.setState({ hoveringFavoritedButton: false })}
            >
              {this.state.hoveringFavoritedButton
                ? (favorited ? 'Unfavorite' : 'Favorite')
                : (favorited ? 'Favorited' : 'Favorite')}
            </HaikuFavoriteButton>
            <HaikuShareButton className="share-button">
              Tweet
            </HaikuShareButton>
          </HaikuActions>
        </HaikuFooter>
      </HaikuWrapper>
    );
  }
}

export default Haiku;
