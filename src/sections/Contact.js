import React from 'react';
import styled from 'styled-components';
import AnimatedSection from '../components/AnimatedSection';

const ContactContainer = styled.div`
  padding: 100px 2rem; // Add top padding to account for fixed navbar
  background-color: #343a40; // Dark background for contact section
  color: white;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 2rem;
  }
`;

const Contact = () => {
  return (
    <AnimatedSection id="contact">
      <ContactContainer>
        <h2>Contact Me</h2>
        <p>If you'd like to get in touch, feel free to reach out!</p>
        <a href="mailto:your-email@example.com" style={{ color: 'white', textDecoration: 'underline' }}>Email Me</a>
      </ContactContainer>
    </AnimatedSection>
  );
};

export default Contact;
