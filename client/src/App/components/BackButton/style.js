import styled from 'styled-components';

export const IconButton = styled.button`
  background: transparent;
  border-radius: 50%;
  border: 0;
  cursor: pointer;
  display: flex;
  outline: 0;
  padding: 0.75rem;
  font-size: 1em;
  margin-bottom: 2rem;
  min-width: 26px;
  position: absolute;
  left: 5rem;
  top: 5rem;

  &:hover, &:focus {
    background: #F5F5F5;
  }

  &:active {
    background: #EEE;
  }
`;
