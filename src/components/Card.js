import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap');
  body {
    font-family: 'Open Sans', sans-serif;
  }
`;

const StyledCard = styled(Link)`
    text-decoration: none;
    color: #fff!important;
    width: 350px;
    margin-top: 5rem;
    height: 350px;
    background-image: url(${props => props.background});
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    position: relative;
    border-radius: 20px;
    margin-right: 40px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    
    h3 {
        margin: 0;
        font-size: 1.5rem;
        font-weight: 700;
    }

    p {
        font-size: 15px;
        font-weight: 400;
        color: #d3d3d3;
    }

    a {
        color: #d3d3d3;
        font-size: 15px;
        margin-top: 10px;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`;

const CardWrapper = styled.div`
    position: absolute;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.38);
    padding: 2rem 1rem 1.5rem 1rem;
    border-radius: 0 0 20px 20px;
    bottom: 0;
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
`

export const Card = ({ title, description, background, children, url }) => {
    return (
        <>
            <GlobalStyle />
            <StyledCard background={background} to={url} target={'_blank'}>
                <CardWrapper>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    {children}
                </CardWrapper>
            </StyledCard>
        </>
    );
};
