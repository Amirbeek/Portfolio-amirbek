import React, { useState } from 'react';
import styled from 'styled-components';

const ContactWrapper = styled.div`
    max-width: 600px;
    margin: 2rem auto;
    padding: 2rem;
    background-color: ${props => props.theme.background};
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
`;

const ContactTitle = styled.h2`
    text-align: center;
    color: ${props => props.theme.text_color_header};
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const Input = styled.input`
    padding: 0.8rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
    color: ${props => props.theme.text_color};
`;

const Textarea = styled.textarea`
    padding: 0.8rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
    color: ${props => props.theme.text_color};
    resize: vertical;
`;

const Button = styled.button`
    padding: 0.8rem;
    border: none;
    background-color: #8862f8;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 4px;

    &:hover {
        background-color: #551a8b;
    }
`;

function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <ContactWrapper>
            <ContactTitle>Contact Me</ContactTitle>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    required
                />
                <Button type="submit">Send Message</Button>
            </Form>
        </ContactWrapper>
    );
}

export default ContactPage;
