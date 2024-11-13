import React from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
const Wrapper = styled.div`
    min-height: 484px;
    
    div{
        background-color: ${props => props.theme.face_color};
        height: 100%;
        width: 100%;
    }
    @media (min-width: 960px) {
        .p{
            border-radius: 30px 0 0 30px;
        }
        .k{
            border-radius: 0 30px 30px 0;
        }
    }
`
const RowWrapper = styled.div`

`

const Images = styled.img`
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    transition: transform 0.5s;
    &:hover {
        transform: scale(1.01);
    }

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
    span{
        color: ${props => props.theme.face_color_hover};
    }
`;
const Icons =  styled(IconButton)`
    
    font-size: 1.25rem;
    .MuiSvgIcon-root{
        color: ${props => props.theme.text_color_header};
    }
    
`
const ProCard = ({ title, description, image, repoLink }) => {
    return (
        <RowWrapper className="row p-0">
            <Wrapper className="col-12 col-md-6">
                <div className="j p p-5">
                    <StyledTitle className="">{title}</StyledTitle>
                    <StyleDesc
                        className=""
                        dangerouslySetInnerHTML={{__html: description}}
                    />
                    <IconButton href="#" aria-label="GitHub">
                        <GitHubIcon/>
                    </IconButton>
                    <IconButton href="#" aria-label="OutLineIcon">
                        <LanguageOutlinedIcon/>
                    </IconButton>
                    <IconButton href="#" aria-label="NewWindowIcon">
                        <OpenInNewOutlinedIcon/>
                    </IconButton>
                </div>
            </Wrapper>
            <Wrapper className="col-12 col-md-6">
                <div className="j k">
                    <a href={repoLink} target="_blank" rel="noopener noreferrer">
                        <Images src={image} className="k" alt={`${title} preview`}/>
                    </a>
                </div>
            </Wrapper>
        </RowWrapper>
    );
};

export default ProCard;
