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

const Brand = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 3rem;
`;

const Image = styled.img`
  margin-right: 1.5rem;
`;

const BrandHeading = styled.h4`
  color: rgba(0,0,0,0.8);
  font-size: 1.375em;
  font-weight: 600;
  ${'' /* text-transform: uppercase; */}
  ${'' /* letter-spacing: 1px; */}
`;

const Heading = styled.h1`
  font-size: 2em;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 1rem;
`;

const Subheading = styled.h3`
  color: rgba(0,0,0,0.6);
  font-size: 1.25em;
  ${'' /* font-weight: 500; */}
  margin-bottom: 2.5rem;
`;

const InputWrapper = styled.div`

`;

const InputGroup = styled.div`
  border: 1px solid ${({ focused }) => focused ? '#9E9E9E' : '#E0E0E0'};
  border-radius: 8px;
  display: flex;
  position: relative;
  overflow: hidden;
  height: 5rem;
`;

const InputPrepend = styled.div`
  align-items: center;
  background: #F5F5F5;
  color: rgba(0,0,0,0.6);
  display: flex;
  font-size: 1.25em;
  font-weight: 500;
  justify-content: center;
  min-width: 5rem;
`;

const Input = styled.input`
  border: 0;
  font-size: 1.25em;
  outline: 0;
  padding: 0 1rem;
  width: 100%;

  &::placeholder {
    color: rgba(0,0,0,0.4);
  }
`;

const InputInlineButton = styled.button`
  background: #556AF5;
  border: 0;
  border-radius: 6px;
  color: #FFF;
  cursor: pointer;
  font-size: 1.25em;
  font-weight: 500;
  outline: none;
  height: calc(100% - 1.2rem);
  position: absolute;
  right: 0.6rem;
  transform: translateY(-50%);
  transition: background 0.2s ease;
  top: 50%;
  padding: 0 1.5rem;

  &:hover {
    background: #2F49ED;
  }

  &:active {
    background: #132fe4;
  }
`;

const TitleBox = styled.div`
  position: relative;
  width: 100%;

  &:before {
    content: "";
    background: #E0E0E0;
    left: 0;
    right: 0;
    height: 1px;
    margin: -1px 0 0;
    position: absolute;
    top: 50%;
    width: 100%;
  }
`;

const TitleBoxContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 4rem;
  width: 100%;
`;

const TitleBoxTitle = styled.span`
  background: #FFF;
  color: rgba(0,0,0,0.4);
  display: inline-block;
  font-size: 0.875em;
  font-weight: 700;
  letter-spacing: 1px;
  padding: 0 2rem;
  position: relative;
  text-transform: uppercase;
`;

const Haikus = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 3rem;
`;

const AvatarWrapper = styled.div`
  background: #F5F5F5;
  border-radius: 50%;
  height: 8rem;
  margin: 0 auto 4rem;
  position: relative;
  width: 8rem;
  transition: all 0.2s ease;

  &:hover {
    ${'' /* box-shadow: 0 2px 40px rgba(0,0,0,0.3); */}
    height: 10.5rem;
    width: 10.5rem;
    margin-top: -1.25rem;
    margin-bottom: 2.75rem;
  }

  &:before {
    content: "";
    border: 2px solid #EEE;
    border-radius: 50%;
    height: 9.25rem;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 9.25rem;
  }

  &:after {
    content: "";
    border: 2px solid #EEE;
    border-radius: 50%;
    height: 10.5rem;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 10.5rem;
  }
`;

const AvatarImageRounder = styled.div`
  border-radius: 50%;
  height: 100%;
  overflow: hidden;
  position: relative;
  width: 100%;
`;

const AvatarImage = styled.img`
  height: 100%;
  width: 100%;
`;

const CreatorContent = styled.div`

`;

const CreatorInfo = styled.p`
  font-size: 1.125em;
  line-height: 1.8;
`;

const LinkInline = styled.a`
  color: #2F49ED;
  text-decoration: none;
`;

export {
  Wrapper,
  TopBar,
  Container,
  Section,
  SectionContent,
  Brand,
  Image,
  BrandHeading,
  Block,
  Heading,
  Subheading,
  InputWrapper,
  InputGroup,
  InputPrepend,
  Input,
  InputInlineButton,
  TitleBox,
  TitleBoxContainer,
  TitleBoxTitle,
  Haikus,
  AvatarWrapper,
  AvatarImageRounder,
  AvatarImage,
  CreatorContent,
  CreatorInfo,
  LinkInline,
};
