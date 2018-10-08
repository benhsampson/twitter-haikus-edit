import styled from 'styled-components';

export const SVG = styled.svg`
  margin-right: ${({ mr }) => mr ? mr : 0};

  path {
    transition: fill 0.2s ease;
  }
`;
