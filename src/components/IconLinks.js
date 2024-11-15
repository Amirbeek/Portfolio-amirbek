import React from 'react';
import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';

const Wrapper = styled.footer`
    svg {
        color: ${props => props.theme.text_color_header};
    }
`;

const IconLinks = ({ repoLink, GitHubLink, DomainLink, PagePath, Project_Title, Project_type, Project_date, pro_1, pro_1_text }) => {
    const handleClick = () => {
        localStorage.removeItem('project')
        localStorage.setItem('project', JSON.stringify({
            Project_Title,
            Project_type,
            Project_date,
            pro_1,
            pro_1_text
        }));

    };

    return (
        <Wrapper>
            {GitHubLink && (
                <IconButton href={GitHubLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <GitHubIcon />
                </IconButton>
            )}
            {DomainLink && (
                <IconButton href={DomainLink} target="_blank" rel="noopener noreferrer" aria-label="OutLineIcon">
                    <LanguageOutlinedIcon />
                </IconButton>
            )}
            {PagePath && (
                <IconButton
                    href={PagePath}
                    aria-label="PageLink"
                    onClick={handleClick}>
                    <MenuBookOutlinedIcon />
                </IconButton>
            )}
            {repoLink && (
                <IconButton href={repoLink} target="_blank" rel="noopener noreferrer" aria-label="OpenInNewOutlinedIcon">
                    <OpenInNewOutlinedIcon />
                </IconButton>
            )}
        </Wrapper>
    );
};

export default IconLinks;
