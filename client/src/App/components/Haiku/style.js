import styled from 'styled-components';

const HaikuWrapper = styled.div`
  background: #FAFAFA;
  border: 1px solid #E0E0E0;
  border-radius: 8px;
  padding: 2rem;
  position: relative;

  &:hover {
    .favorite-button {
      visibility: visible;
    }

    .share-button {
      visibility: visible;
      position: static;
    }
  }
`;

const HaikuText = styled.p`
  color: rgba(0,0,0,0.6);
  font-size: 1.25em;
  line-height: 2;
`;

const HaikuFooter = styled.footer`
  align-items: center;
  background: #F5F5F5;
  border-radius: 0 0 8px 8px;
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: space-between;
  padding: 1rem 2rem;
  margin: 1.5rem -2rem -2rem;
`;

const HaikuActions = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1rem;
`;

const HaikuFavoriteButton = styled.button`
  align-items: center;
  background: transparent;
  border: 2px solid #FA9986;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  font-weight: 500;
  justify-content: center;
  outline: 0;
  padding: 0.25rem 0.75rem;

  ${({ favorited }) => favorited ? `
    color: #FFF;
    background: #FA9986;
    visibility: visible;
  ` : `
    color: #F57157;
    visibility: hidden;

    &:hover, &:focus {
      background: #fa9986;
      color: #FFF;
    }

    &:active {
      background: #f57157;
      border-color: #f57157;
    }
  `}
`;

const HaikuShareButton = styled.button`
  align-items: center;
  background: transparent;
  border: 2px solid #86D3FA;
  border-radius: 5px;
  color: #30AEED;
  cursor: pointer;
  display: flex;
  font-weight: 500;
  justify-content: center;
  outline: 0;
  padding: 0.25rem 0.75rem;
  visibility: hidden;
  position: absolute;

  &:hover, &:focus {
    background: #86d3fa;
    color: #FFF;
  }

  &:active {
    background: #30AEED;
    border-color: #30AEED;
  }
`;

const HaikuUsername = styled.a`
  color: rgba(0,0,0,0.6);
  font-size: 1em;
  font-weight: 500;
  text-decoration: none;

  &:hover, &:focus {
    color: rgba(0,0,0,0.8);
  }

  &:active {
    color: rgba(0,0,0,0.9);
  }
`;

export {
  HaikuWrapper,
  HaikuText,
  HaikuFooter,
  HaikuActions,
  HaikuFavoriteButton,
  HaikuShareButton,
  HaikuUsername,
};
