import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';

const StyledAboutSection = styled.section`
  max-width: 1100px;
  text-align: justify;
  text-justify: inter-word;
  
  .inner {
    display: grid;
    grid-template-columns: 2fr 3fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: 1fr;
    padding: 0;
    margin: 0 0 0 0;
    overflow: hidden;
    list-style: none;
    text-align: justify;
    text-justify: auto;
    li {
      position: relative;
      margin-bottom: 20px;
      padding-left: 15px;
      font-size: 15.79px;

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;

const StyledPic = styled.div`
  position: relative;
  max-width: 900px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 100%;
  }
`;

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      avatar: file(sourceInstanceName: { eq: "images" }, relativePath: { eq: "resume.png" }) {
        childImageSharp {
          fluid(maxWidth: 900, traceSVG: { color: "#64ffda" }) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);

  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const confs =
    [
      'Lecturer at Software Freedom Day conference (Opensource game development tools and engines) at Tabriz University, Iran - 2017',
      'Lecturer at AR/VR convention at Tabriz University Innovation Center, Iran - 2019',
      'Tutor at AR/VR Workshop at Tabriz University Innovation Center, Iran - 2019',
    ];
  const achivs =
    [

    ];

  return (
    <StyledAboutSection id="etc" ref={revealContainer}>
      <h2 className="numbered-heading">Et Cetera | Résumé </h2>

      <div className="inner">
        <StyledText>
          <div>
            <h3>Conferences</h3>
            <ul className="skills-list">
              {confs && confs.map((conf, i) => <div> <li key={i}>{conf} </li> </div>)}
            </ul>
            <p></p>

            <h3>Achievements</h3>
            <ul className="skills-list">
              <li> Achieved bronze level in  Codingame - Code Royale game <a href="https://www.codingame.com/multiplayer/bot-programming/code-royale"> [Link] </a>
              </li>
              <li> Two times participant of The ICPC International Collegiate Programming Contest. <a href="https://icpc.global"> [Link] </a>
              </li>
            </ul>


            <ul className="skills-list">
              {achivs && achivs.map((achiv, i) => <div> <li key={i}>{achiv} </li> </div>)}
            </ul>
            <p></p>

            <h3>Hobbies</h3>
            <p>
              I play electric guitar in my spare time. I mostly play and listen to progressive rock/metal. 🤟
              I Played a little basketball in high school. Also of course playing video games and board games is my main passion.
            </p>


          </div>


        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <Img fluid={data.avatar.childImageSharp.fluid} alt="Avatar" className="img" />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
