import React from 'react';
import styled from 'styled-components';
import {Col, Row} from "react-bootstrap"
const Container = styled.div`
    background-color: ${props => props.theme.background};
    padding: 2rem 0;
    div{
        background-color:  ${props => props.theme.skill_color};);
        border-radius: 30px;
        min-height: 420px;
    }
 `
const SectionWrapper = styled.div`
  background-color: ${props => props.theme.skill_color};
  border-radius: 30px;
  padding: 2rem;
  min-height: 420px;
  display: flex;
  flex-direction: column;
  justify-content: center;

    @media (min-width: 768px) {
       padding: 1rem!important;
    }
`;

const AboutMe = styled.h1`
    color: ${props => props.theme.text_color_header};!important;);
    font-weight: bold;
`
const Stylep = styled.p`
    font-size: 18px;
    font-weight: 400;
    line-height: 32px;
    color: ${props => props.theme.text_color_header};!important;);
`
const ImageBIO = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 30px;
`
const GitHubLink = styled.a`
    color: #8862f8;
    text-decoration: none;
    font-weight: bold;

    &:hover {
        color: #551a8b;
    }
`;
const BIO = () => {
  return (
      <Container className="">
          <div className="container">
              <div className="p-5 d-flex flex-wrap">
                  <div className="col-12 col-md-6 p-3">
                      <SectionWrapper>
                          <AboutMe>About Me</AboutMe>
                          <Stylep>
                              I'm Amirbek Shomurodov, a software engineer dedicated to building scalable, efficient systems.
                          </Stylep>
                          <Stylep>
                              At Brunel University, I led a team to create{' '}
                              <GitHubLink
                                  href="https://github.com/RandomUser/Nutri-Book"
                                  target="_blank"
                                  rel="noopener noreferrer"
                              >
                                  Nutri-Book
                              </GitHubLink>
                              , an app for sharing ingredients, which enhanced my leadership and development skills.
                          </Stylep>
                          <Stylep>
                              Currently studying Computer Science, I aim to solve complex challenges through impactful software.
                          </Stylep>
                      </SectionWrapper>
                  </div>

                  <div className="col-12 col-md-6 p-3">
                      <ImageBIO
                          src={require('../images/2024-11-08 14.21.23.jpg')}
                          alt="Amirbek's picture"
                      />
                  </div>
              </div>
          </div>
      </Container>

  );
};

export default BIO;
