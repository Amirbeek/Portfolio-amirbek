import React from 'react';
import styled from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';


const Container = styled.div`
    background-color: ${props => props.theme.background};
    padding: 2rem 0;
    div{
        background-color:  ${props => props.theme.skill_color};);
        border-radius: 30px;
        min-height: 420px;
    }
 `
const Title = styled.h1`
    color: ${props => props.theme.text_color_header}; );
    font-weight: bold;
    @media (min-width: 768px) {
            font-size: 60px;
            line-height: 72px;
    }
`

const Projects = () => {

  return (
      <Container >
          <Title className={'container'}>
              Projects
          </Title>
          <div className="container">
            
          </div>
      </Container>
  );
};

export default Projects;
