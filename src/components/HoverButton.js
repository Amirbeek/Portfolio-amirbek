import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.secondary};
    transform: scale(1.05);
  }
`;

const HoverButton = ({ text }) => {
  return <Button>{text}</Button>;
};

export default HoverButton;
