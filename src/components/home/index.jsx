import React from 'react';
import {
  Anchor,
  Fieldset,
  WindowHeader,
  WindowContent,
  Toolbar,
} from 'react95';

import {
  CutoutText,
  StyledWindow,
  PointerButton,
  ProfilePicWrapper,
  PresentationWrapper,
  StyledCutout,
} from './styles';
import Image from '../image';

const Home = () => {
  const links = [
    {
      url: 'https://blog.leovargas.dev',
      title: 'Blog',
    },
    {
      url: 'https://github.com/leorcvargas',
      title: 'GitHub',
      target: '_blank',
    },
    {
      url: 'https://www.linkedin.com/in/leonardo-vargas-6a2216116/',
      title: 'LinkedIn',
      target: '_blank',
    },
  ];

  return (
    <StyledWindow>
      <WindowHeader>
        <span>leo.exe</span>
      </WindowHeader>
      <Toolbar>
        {links.map((link, i) => (
          <a
            href={link.url}
            target={link.target}
            rel="noopener noreferrer"
            key={i}
          >
            <PointerButton variant="menu" size="sm">
              {link.title}
            </PointerButton>
          </a>
        ))}
      </Toolbar>
      <WindowContent>
        <Fieldset label="Léo Vargas">
          <PresentationWrapper>
            <ProfilePicWrapper>
              <Image />
            </ProfilePicWrapper>
            <StyledCutout>
              <CutoutText>
                <span>Hi, Leo here!</span>{' '}
                <span role="img" aria-label="presentation">👋</span>
              </CutoutText>
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
                {links.map((link, i) => (
                  <span key={i}>
                    <Anchor
                      href={link.url}
                      target={link.target}
                      rel="noopener noreferrer"
                    >
                      {link.title}
                    </Anchor>{' '}
                  </span>
                ))}
              </CutoutText>
            </StyledCutout>
          </PresentationWrapper>
        </Fieldset>
      </WindowContent>
    </StyledWindow >
  );
};

export default Home;
