import styled from 'styled-components';

const Wrapper = styled.div`
  background: #F5F5F5;
  min-height: 100vh;
`;

const Container = styled.div`
  background: #FFF;
  margin: 0 auto;
  max-width: 1360px;
  min-height: 100vh;
  position: relative;
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

const Heading = styled.h1`
  font-size: 2.25em;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 1rem;
`;

const Subheading = styled.h3`
  color: rgba(0,0,0,0.6);
  font-size: 1.25em;
`;

const Haikus = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 3rem;
  margin-top: 5rem;
`;

export {
  Wrapper,
  Container,
  Section,
  SectionContent,
  Heading,
  Subheading,
  Haikus,
};
