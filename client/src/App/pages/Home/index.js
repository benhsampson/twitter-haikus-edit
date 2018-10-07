import React from 'react';

import placeholders from '../../../constants/placeholders';

import logo from '../../../assets/logo.png';

import Haiku from '../../components/Haiku';

import {
  Wrapper,
  TopBar,
  Container,
  Section,
  SectionContent,
  Block,
  Brand,
  Image,
  BrandHeading,
  Heading,
  Subheading,
  InputWrapper,
  InputGroup,
  InputPrepend,
  Input,
  InputInlineButton,
  Error,
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
} from './style';

class App extends React.Component {
  state = {
    error: '',
    screen_name: '',
    focused: false,
    currentPlaceholderIndex: 0,
    response: '',
  };

  componentDidMount() {
    this.rotatePlaceholder();
  }

  rotatePlaceholder = () => {
    setInterval(() => {
      this.setState((prevState) => {
        const timeToRepeat = prevState.currentPlaceholderIndex >= placeholders.length - 1;
        const newIndex = timeToRepeat ? 0 : prevState.currentPlaceholderIndex + 1;
        return {
          currentPlaceholderIndex: newIndex,
        };
      });
    }, 3000);
  }

  onSubmit = async (e) => {
    e.preventDefault();

    // convert the screen name to lowercase rather than give an error
    const screen_name = this.state.screen_name.toLowerCase();

    const response = await fetch('/api/validate-screen-name', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ screen_name }),
    });

    const formattedResponse = await response.json();

    console.log(formattedResponse);

    if (response.status !== 200) throw Error(response.message);

    if (!formattedResponse.error) {
      this.props.history.push(`/results/${formattedResponse.screen_name}`);
    } else {
      this.setState({ error: formattedResponse.error });
    }
  };

  render() {
    return (
      <Wrapper>
        <Container>
          {/* <TopBar /> */}
          <Section>
            <SectionContent>
              <Block>
                <Brand>
                  <Image
                    src="https://tse4-mm.cn.bing.net/th?id=OIP.euZHjIupBTUs0rYrs4bZHQHaHa&pid=Api"
                    alt="Logo"
                    width="50"
                    height="50"
                  />
                  <BrandHeading>Twitter Poems</BrandHeading>
                </Brand>
                <Heading>Turn anyone's tweets into a beautifully compiled Sonnet or Haiku.</Heading>
                <Subheading>Simply choose the type of poem then a keyword or username.</Subheading>
                <form onSubmit={this.onSubmit}>
                  <InputWrapper>
                    <InputGroup focused={this.state.focused} error={!!this.state.error}>
                      <InputPrepend>@</InputPrepend>
                      <Input
                        autoFocus
                        // TODO: rotate this
                        placeholder={placeholders[this.state.currentPlaceholderIndex]}
                        onFocus={() => this.setState({ focused: true })}
                        onBlur={() => this.setState({ focused: false })}
                        value={this.state.screen_name}
                        onChange={e => this.setState({ screen_name: e.target.value })}
                      />
                      <InputInlineButton>
                        Generate
                      </InputInlineButton>
                    </InputGroup>
                    {this.state.error ? <Error>{this.state.error}</Error> : ''}
                  </InputWrapper>
                </form>
              </Block>
            </SectionContent>
          </Section>
          <TitleBox>
            <TitleBoxContainer>
              <TitleBoxTitle>Recently favorited/shared poems</TitleBoxTitle>
            </TitleBoxContainer>
          </TitleBox>
          <Section>
            <SectionContent>
              <Haikus>
                <Haiku
                  haiku={{
                    first: 'Test',
                    second: 'Test',
                    third: 'Test',
                  }}
                  screenName="frogster"
                />
              </Haikus>
            </SectionContent>
          </Section>
          <TitleBox>
            <TitleBoxContainer>
              <TitleBoxTitle>Who's behind this?</TitleBoxTitle>
            </TitleBoxContainer>
          </TitleBox>
          <Section>
            <SectionContent>
              <AvatarWrapper>
                <AvatarImageRounder>
                  <AvatarImage
                    src="https://tse3.mm.bing.net/th?id=OIP.df8Vfg7HpWxUXyc3_t-rdwHaHa&pid=Api"
                    alt="Ben Sampson"
                  />
                </AvatarImageRounder>
              </AvatarWrapper>
              <CreatorContent>
                <CreatorInfo>
                  Twitter Haikus was created by <LinkInline href="https://bensampson.me" target="_blank">Ben Sampson</LinkInline>. Full stack dev who likes to browse Twitter and create innovative solutions to mundane homework requirements.
                  <br /><br />
                  The idea came from my English teacher's (lazy) attempt to make poetry relevant in the modern age. <b>Tweets</b> are short and witty comments on current affairs oddly resembled <b>Haikus</b>, an elegant form of brief poetry, so I programmed a little thing to match rhyming Tweets with the right syllabol count.
                  <br /><br />
                  If anyone wants me to. I'll let you guys enter keywords, then the Haikus would make coherent sense. For now, it's just a cool technical challenge and an interesting observation.
                  <br /><br />
                  Check out my <LinkInline href="https://bensampson.me" target="_blank">personal website</LinkInline> and my <LinkInline href="https://twitter.com" target="_blank">Twitter</LinkInline>.
                </CreatorInfo>
              </CreatorContent>
            </SectionContent>
          </Section>
        </Container>
      </Wrapper>
    );
  }
}

export default App;
