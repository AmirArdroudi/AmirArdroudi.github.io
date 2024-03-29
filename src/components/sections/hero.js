import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { email } from '@config';
import { navDelay, loaderDelay } from '@utils';
import { Icon } from '@components/icons';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 11px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 700px;
    text-align: justify;
    text-justify: inter-word;
  }

  .email-link {
    ${({ theme }) => theme.mixins.smallButton};
    margin-top: 50px;
    width: 50px;
    height: 50px;
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hi, my name is</h1>;
  const two = <h2 className="big-heading">Amir Ardroudi</h2>;
  const three = <h3 className="medium-heading">I am a Game Developer</h3>;
  const four = (
    <p>
      I'm a diligent, passionate, and team-oriented game programmer/developer. Building tools, gameplay programming, polishing the game, and bug fixing are right up my alley.
      {}
    </p>
  );
  const five = (
    <div>
      <a href="https://github.com/amirardroudi" className="email-link">
        <Icon name="GitHub" />
      </a>
      {' '}&nbsp;&nbsp;

      <a href={`mailto:${email}`} className="email-link">
        <Icon name="Codepen" />
      </a>
      
    </div>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      <TransitionGroup component={null}>
        {isMounted &&
          items.map((item, i) => (
            <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
              <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
            </CSSTransition>
          ))}
      </TransitionGroup>
    </StyledHeroSection>
  );
};

export default Hero;
