import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img src={dev} alt="I’m Vishal and I’m a Web & App developer!" />
        </Thumbnail>
        <Details theme={theme}>
          <h1>More about me</h1>
          <p>
          Hello Everyone, I am Vishal, I am React and React Native developer with 2 years of experience, Have expertise in React Js, React Native, Hooks, Sanity, Graphql, Bulma, Html, CSS.
          </p>
          <Button as={AnchorLink} href="#contact">
            Hire me
          </Button>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
