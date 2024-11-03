import React, { useState } from 'react';
import styled from 'styled-components';
import AnimatedSection from '../components/AnimatedSection';
import { Button, Form } from 'react-bootstrap'; // Importing Bootstrap components
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactContainer = styled.div`
  padding: 100px 2rem;
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

  .social-icons {
    margin: 1rem 0;

    a {
      color: white;
      margin: 0 1rem;
      transition: color 0.3s;

      &:hover {
        color: #ffdd57; // Change color on hover
      }
    }
  }

  .contact-form {
    max-width: 600px;
    margin: auto;
    text-align: left;

    input, textarea {
      width: 100%;
      margin-bottom: 1rem;
      border: none;
      border-radius: 4px;
      padding: 10px;
    }

    textarea {
      resize: none;
    }
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to your email service)
    alert(`Message sent! ${formData.name}: ${formData.message}`);
    setFormData({ name: '', email: '', message: '' }); // Reset form
  };

  return (
    <AnimatedSection id="contact">
      <ContactContainer>
        <h2>Contact Me</h2>
        <p>If you'd like to get in touch, feel free to reach out!</p>

        <div className="social-icons">
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={30} />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
        </div>

        <Form className="contact-form" onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Control
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              as="textarea"
              name="message"
              rows={4}
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Button type="submit" variant="primary">Send Message</Button>
        </Form>

        <p style={{ marginTop: '2rem' }}>
          Or, you can email me directly at{' '}
          <a href="mailto:your-email@example.com" style={{ color: 'white', textDecoration: 'underline' }}>
            your-email@example.com
          </a>
        </p>
      </ContactContainer>
    </AnimatedSection>
  );
};

export default Contact;
