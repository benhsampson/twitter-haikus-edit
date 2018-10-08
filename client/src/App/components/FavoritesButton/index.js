import styled from 'styled-components';

const FavoritesButton = styled.button`
  align-items: center;
  background: transparent;
  border: 1px solid #F76D6F;
  border-radius: 5px;
  color: #F76D6F;
  cursor: pointer;
  display: flex;
  font-size: 1.25em;
  font-weight: 500;
  justify-content: space-between;
  outline: none;
  position: absolute;
  right: 0.6rem;
  transition: all 0.2s ease;
  padding: 0.75rem 1.25rem;
  top: 5rem;
  right: 5rem;

  ${({ hover }) => hover ? `
    background: #F76D6F;
    color: #FFF;
  ` : ''};
`;

export default FavoritesButton;
