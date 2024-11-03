import React from 'react';
import styled from 'styled-components';
import AnimatedSection from '../components/AnimatedSection';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 2rem; // Add top padding to account for fixed navbar
  background-color: #f8f9fa; // Light background for contrast
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    max-width: 800px;
    line-height: 1.6;
  }
`;

const About = () => {
  return (
    <AnimatedSection id="about">
      <AboutContainer>
        <h2>About Me</h2>
        <p>
          I am a passionate developer with experience in building web applications. My skills include JavaScript, React, Node.js, and more. I love solving problems and creating solutions that enhance user experiences.
        </p>
      </AboutContainer>
    </AnimatedSection>
  );
};

export default About;
