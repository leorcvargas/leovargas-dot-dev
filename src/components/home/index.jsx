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
              <CutoutText>Hi, Leo here! <span role="img" aria-label="presentation">👋</span></CutoutText>
              <CutoutText>
                I'm a software engineer who loves to build amazing and
                well designed applications.
              </CutoutText>
              <CutoutText>
                I work with the JavaScript ecosystem, Golang, Kubernetes,
                Docker and some other awesome tools.
              </CutoutText>
              <CutoutText>
                You can see more things about me here:
              </CutoutText>
              <CutoutText>
                <Anchor href="https://github.com/leorcvargas" target="_blank">GitHub</Anchor>{' '}
                <Anchor href="https://www.linkedin.com/in/leonardo-vargas-6a2216116/" target="_blank">LinkedIn</Anchor>
              </CutoutText>
            </StyledCutout>
          </PresentationWrapper>
        </Fieldset>
      </WindowContent>
    </StyledWindow>
  );
};

export default Home;
