import React from 'react';
import styled from 'styled-components';
import IconLinks from './IconLinks';
import { Grid } from "@mui/material";

const Wrapper = styled.div`
    background-color: ${props => props.theme.skill_color};
    height: 482px;
`;

const Images = styled.img`
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 482px;
    transition: transform 0.5s;
`;

const StyledTitle = styled.h2`
    color: ${props => props.theme.text_color_header};
    font-weight: 600;
`;

const StyleDesc = styled.p`
    color: ${props => props.theme.text_color_header};
    a {
        color: ${props => props.theme.primary_color};
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }

    span {
        color: ${props => props.theme.face_color_hover};
    }
`;

const ProCard = ({ ...projectData }) => {
    return (
        <Grid container spacing={1} sx={{ mt: 8 }}>
            <Grid item xs={12} md={6}>
                <Wrapper className="j p p-5 icons">
                    <StyledTitle>{projectData.title}</StyledTitle>
                    <StyleDesc dangerouslySetInnerHTML={{ __html: projectData.description }} />
                    <IconLinks links={projectData} />
                </Wrapper>
            </Grid>

            <Grid item xs={12} md={6}>
                <Wrapper className="j k">
                    <a href={projectData.repoLink} target="_blank" rel="noopener noreferrer">
                        <Images src={projectData.image} alt={`${projectData.title} preview`} />
                    </a>
                </Wrapper>
            </Grid>
        </Grid>
    );
};

export default ProCard;
