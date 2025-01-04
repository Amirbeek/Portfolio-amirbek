import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
    margin-top: 15px;
`;
const ProjectTitle = styled.h1`
    color: ${props => props.theme.text_color_header}; );
    margin-top: 100px;
    font-weight: bold;
    @media (min-width: 768px) {
        font-size: 60px;
        line-height: 72px;
    }
`

const Title = ({ title}) => {
    return (
        <CardContainer className={'container'}>
            <ProjectTitle>{title}</ProjectTitle>
        </CardContainer>
    );
};

export default Title;
