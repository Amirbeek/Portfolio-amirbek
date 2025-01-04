import React from 'react';
import styled from 'styled-components';
import IconLinks from './IconLinks';
import { Grid } from "@mui/material";

const Wrapper = styled.div`
    background-color: ${props => props.theme.skill_color};
    height: 482px;
    overflow: hidden;

`;

const Images = styled.img`
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 482px;
    border-radius: inherit; 
    z-index: -1;
`;

const StyledTitle = styled.h2`
    color: ${props => props.theme.text_color_header};
    font-weight: 600;
`;

const StyleDesc = styled.p`
    font-size: 21px;
    
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
                <Wrapper className={projectData.additional_images.length > 0 ? 'universal-card-right p-5':'normal-card-right p-5'}>
                    <StyledTitle>{projectData.title}</StyledTitle>
                    <StyleDesc dangerouslySetInnerHTML={{ __html: projectData.description }} />
                    <IconLinks links={projectData} />
                </Wrapper>
            </Grid>

            <Grid item xs={12} md={6}>
                <Wrapper className={projectData.additional_images.length > 0 ? 'universal-card-left':'normal-card-left '}>
                    <a href={projectData.links.repoLink} target="_blank" rel="noopener noreferrer">
                        <Images src={projectData.image} alt={`${projectData.title} preview`} />
                    </a>
                </Wrapper>
            </Grid>

            {projectData.additional_images.length > 1 && (
                <>
                    {projectData.additional_images.map((image, index) => (
                        <Grid item xs={12} md={6} key={index}>
                            <Wrapper className={index === 0 ? 'uni_img-left' : 'uni_img-right'}>
                                <Images src={image} alt={`${projectData.title} preview`} />
                            </Wrapper>
                        </Grid>
                    ))}
                </>
            )}
        </Grid>
    );
};

export default ProCard;
