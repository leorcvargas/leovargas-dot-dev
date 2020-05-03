import React from 'react';
import {
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
        <Fieldset label="Leo Vargas | Software Engineer">
          <PresentationWrapper>
            <ProfilePicWrapper>
              <Image />
            </ProfilePicWrapper>
            <StyledCutout>
              <CutoutText>Hi! <span role="img" aria-label="presentation">👋</span></CutoutText>
              <CutoutText>
                I'm a brazilian guy looking for amazing opportunities to improve my coding skills
                building funny and useful solutions.
              </CutoutText>
              <CutoutText>
                I love to study software architecture and new technologies. Those are some tools
                I work and have fun with: Node.js, React.js, Golang, Kubernetes, Docker and more!
              </CutoutText>
            </StyledCutout>
          </PresentationWrapper>
        </Fieldset>
      </WindowContent>
    </StyledWindow>
  );
};

export default Home;
