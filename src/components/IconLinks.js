import React from 'react';
import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';

const Wrapper = styled.footer`
    svg {
        color: ${(props) => props.theme.text_color_header};
    }
`;

const IconLinks = ({ links }) => {
    const handleClick = () => {
        localStorage.setItem('project', JSON.stringify(links));
    };

    return (
        <Wrapper>
            {links.GitHubLink && (
                <IconButton href={links.GitHubLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <GitHubIcon />
                </IconButton>
            )}
            {links.DomainLink && (
                <IconButton href={links.DomainLink} target="_blank" rel="noopener noreferrer" aria-label="Website">
                    <LanguageOutlinedIcon />
                </IconButton>
            )}
            {links.PagePath && (
                <IconButton href={links.PagePath} aria-label="Project Page" onClick={handleClick}>
                    <MenuBookOutlinedIcon />
                </IconButton>
            )}
            {links.repoLink && (
                <IconButton href={links.repoLink} target="_blank" rel="noopener noreferrer" aria-label="Repository">
                    <OpenInNewOutlinedIcon />
                </IconButton>
            )}
        </Wrapper>
    );
};

export default IconLinks;