import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
    margin-top: 15px;
`;

const ProjectCard = ({ title, description, onClick }) => {
  return (
    <CardContainer onClick={onClick} className={'container'}>

      <h3>{title}</h3>
      <p>{description}</p>
    </CardContainer>
  );
};

export default ProjectCard;
