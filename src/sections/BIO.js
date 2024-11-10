import React from 'react';
import styled from 'styled-components';
import AnimatedSection from '../components/AnimatedSection';
import {Col, Image, Row} from "react-bootstrap"
const Continer = styled.div`
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
`;

const AboutMe = styled.h1`
    color: ${props => props.theme.text_color_header};!important;);
    font-weight: bold;
`
const Style_p = styled.p`
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
    <Continer className={''}>
      <div className="container">
          <Row className={'p-5'}>
              <Col md={6}>
                  <SectionWrapper>
                      <AboutMe>About Me</AboutMe>
                      <Style_p>
                          My name is Amirbek Shomurodov, a software engineer with a passion for designing and building robust systems. I focus on creating scalable solutions that drive efficiency and improve user experiences.
                      </Style_p>
                      <Style_p>
                          In my second year at Brunel University, I led a team to develop an application called <GitHubLink href="https://github.com/RandomUser/Nutri-Book" target="_blank" rel="noopener noreferrer">Nutri-Book</GitHubLink> that enables users to share ingredients, promoting collaboration and efficiency. This experience strengthened my leadership and full-stack development skills.

                      </Style_p>
                      <Style_p>
                          I am currently pursuing a Bachelor's degree in Computer Science with a focus on Software Engineering, AI, and Data Science. I aim to contribute to the development of impactful software systems that address complex challenges.
                      </Style_p>
                  </SectionWrapper>

              </Col>
              <Col md={6}>
                  <ImageBIO src={require('../images/2024-11-08 14.21.23.jpg')} alt="Amirbek's picture" />
              </Col>
          </Row>
      </div>
    </Continer>
  );
};

export default BIO;
