import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  cursor: pointer; // Indicate that the card is clickable
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px); // Slight lift effect on hover
  }
`;

const HoverCard = ({ title, description, onClick }) => {
  return (
    <CardContainer onClick={onClick}>
      <h3>{title}</h3>
      <p>{description}</p>
    </CardContainer>
  );
};

export default HoverCard;
