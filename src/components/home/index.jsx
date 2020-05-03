import React from 'react';
import {
  Anchor,
  Fieldset,
  WindowHeader,
  WindowContent,
} from 'react95';

import {
  CutoutText,
  StyledWindow,
  ProfilePicWrapper,
  PresentationWrapper,
  StyledCutout,
} from './styles';
import Image from '../image';

const Home = () => {
  return (
    <StyledWindow>
      <WindowHeader>
        <span>leo.exe</span>
      </WindowHeader>
      <WindowContent>
        <Fieldset label="Léo Vargas">
          <PresentationWrapper>
            <ProfilePicWrapper>
              <Image />
            </ProfilePicWrapper>
            <StyledCutout>
              <CutoutText>Hi! <span role="img" aria-label="presentation">👋</span></CutoutText>
              <CutoutText>
                I'm a brazilian software engineer looking for amazing opportunities to
                improve my development skills, building funny and useful solutions.
              </CutoutText>
              <CutoutText>
                I love studying software architecture and new technologies. My main programming
                language is JavaScript (Node.js, React.js), but I also work with Golang, Kubernetes,
                Docker and some other awesome tools.
              </CutoutText>
              <CutoutText>
                You can see more things about me here:
              </CutoutText>
              <CutoutText>
                <Anchor href="" target="_blank">GitHub</Anchor>{' '}
                <Anchor href="" target="_blank">LinkedIn</Anchor>
              </CutoutText>
            </StyledCutout>
          </PresentationWrapper>
        </Fieldset>
      </WindowContent>
    </StyledWindow>
  );
};

export default Home;
