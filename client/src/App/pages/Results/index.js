import React from 'react';

import Haiku from '../../components/Haiku';

import {
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
} from './style';

class Results extends React.Component {
  state = {
    loading: false,
    haikus: [],
    name: '',
    count: 0,
  };

  componentWillMount() {
    this.setState({ loading: true });

    this.callApi();
  }

  callApi = async () => {
    const { screen_name } = this.props.match.params;
    const response = await fetch('/api/hello', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ screen_name }),
    });
    const body = await response.json();

    this.setState({ loading: false });

    if (response.status !== 200) throw Error(body.message);

    console.log(body);

    const { haikus, name, count } = body;

    this.setState({ haikus, name, count });
  }

  render() {
    const screenName = this.props.match.params.screen_name;
    return (
      <Wrapper>
        <Container>
          {/* <TopBar /> */}
          <Section>
            <SectionContent>
              {/* TODO: Add back button */}
              <Heading>Haikus generated from <H>{this.state.name}'s {this.state.count} Tweets</H></Heading>
              <Subheading>Favorite or share the ones you like</Subheading>
              {!this.state.loading ? (
                <Haikus>
                  {this.state.haikus.map((haiku) => (
                    <Haiku key={haiku._id} haiku={haiku} screenName={screenName} />
                  ))}
                </Haikus>
              ) : <p>Loading</p>}
            </SectionContent>
          </Section>
        </Container>
      </Wrapper>
    );
  }
}

export default Results;
