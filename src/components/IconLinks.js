import React from 'react';
import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Wrapper = styled.footer`
    svg {
        color: ${(props) => props.theme.text_color_header};
    }
`;

const IconLinks = ({ links }) => {
    const handleClick = () => {
        localStorage.setItem('project', JSON.stringify(links));
    };
    const link = links.links
    return (
        <Wrapper>
            {link.GitHubLink && (
                <IconButton href={links.links.GitHubLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <GitHubIcon />
                </IconButton>
            )}
            {link.DomainLink && (
                <IconButton href={link.DomainLink} target="_blank" rel="noopener noreferrer" aria-label="Website">
                    <LanguageOutlinedIcon />
                </IconButton>
            )}
            {link.PagePath && (
                <IconButton href={link.PagePath} aria-label="Project Page" onClick={handleClick}>
                    <MenuBookOutlinedIcon />
                </IconButton>
            )}
            {link.repoLink && (
                <IconButton href={link.repoLink} target="_blank" rel="noopener noreferrer" aria-label="Repository">
                    <OpenInNewOutlinedIcon />
                </IconButton>
            )}
            {link.video && (
                <IconButton href={link.video} aria-label="Project Page" onClick={handleClick}>
                    <YouTubeIcon/>
                </IconButton>
            )}
        </Wrapper>
    );
};

export default IconLinks;