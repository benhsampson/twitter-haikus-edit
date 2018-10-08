import React from 'react';

import BackButton from '../../components/BackButton';
import Haiku from '../../components/Haiku';

import {
  Wrapper,
  Container,
  Section,
  SectionContent,
  Heading,
  Subheading,
  Haikus,
} from './style';

class Favorites extends React.Component {
  componentWillMount() {
    console.log(this.props);
  }

  render() {
    return (
      <Wrapper>
        <Container>
          <BackButton onClick={() => this.props.history.goBack()} />
          <Section>
            <SectionContent>
              <Heading>These are your favorites.</Heading>
              <Subheading>Share them with people.</Subheading>
              <Haikus>
                <Haiku
                  favorited
                  haiku={{
                    first: 'Test',
                    second: 'Test',
                    third: 'Test',
                  }}
                  screenName="test"
                />
              </Haikus>
            </SectionContent>
          </Section>
        </Container>
      </Wrapper>
    );
  }
}

export default Favorites;
