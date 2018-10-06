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
  render() {
    return (
      <Wrapper>
        <Container>
          {/* <TopBar /> */}
          <Section>
            <SectionContent>
              <Heading>Haikus generated from <H>Donald Trump's 4370 Tweets</H></Heading>
              <Subheading>Favorite the ones you like</Subheading>
              <Haikus>
                <Haiku />
                <Haiku />
                <Haiku />
                <Haiku />
                <Haiku />
                <Haiku />
                <Haiku />
                <Haiku />
              </Haikus>
            </SectionContent>
          </Section>
        </Container>
      </Wrapper>
    );
  }
}

export default Results;
