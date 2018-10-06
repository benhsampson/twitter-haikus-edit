import styled from 'styled-components';

const Wrapper = styled.div`
  background: #F5F5F5;
  min-height: 100vh;
`;

const TopBar = styled.div`
  background: #222;
  background-size: cover;
  background-position: bottom;
  height: 0.5rem;
  width: 100%;
`;

const Container = styled.div`
  background: #FFF;
  margin: 0 auto;
  max-width: 1360px;
  min-height: 100vh;
  width: 100%;
`;

const Section = styled.div`
  padding: 8rem 0;
`;

const SectionContent = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 4rem;
  width: 100%;
`;

const Block = styled.div`
  max-width: 720px;
`;

const Heading = styled.h1`
  font-size: 2em;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 1rem;
`;

const H = styled.span`
  background: #D3E9FE;
  ${'' /* color: #FFF; */}
  padding: 0 0.5rem;
`;

const Subheading = styled.h3`
  color: rgba(0,0,0,0.6);
  font-size: 1.25em;
  ${'' /* font-weight: 500; */}
  margin-bottom: 5rem;
`;

const Haikus = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 3rem;
`;

export {
  Wrapper,
  TopBar,
  Container,
  Section,
  SectionContent,
  Block,
  Heading,
  H,
  Subheading,
  Haikus,
};
