import React from 'react';
import styled from 'styled-components';
import {Container, Grid} from "@mui/material";
const Parent = styled.div`
    background-color: ${props => props.theme.face_color};
    padding: 3.5rem;
    border-radius: 30px;
`

const AboutMe = styled.h1`
    color: ${props => props.theme.text_color_header};!important;);
    font-weight: bold;
`
const Stylep = styled.p`
    font-size: 21px;
    font-weight: 400;
    line-height: 32px;
    color: ${props => props.theme.text_color_header};!important;);
`
const ImageBIO = styled.img`
    width: 100%;
    max-height: 500px;
    border-radius: 30px;
    object-fit: cover;
`;

const GitHubLink = styled.a`
    color: #8862f8;
    text-decoration: none;
    font-weight: bold;
    &:hover {
        color: #551a8b;
    }
`;
const BIO = () => {
  return (
      <Container  sx={{ maxWidth: '1390px' }} maxWidth={'1200px'}>
          <Parent>
              <Grid  container spacing={1}  >
                  <Grid item xs={12} md={6}>

                          <AboutMe>About Me</AboutMe>
                          <Stylep>
                              My name is Amirbek Shomurodov. I am a student software developer. I believe in design quality and always pay attention to details because that's what makes a great product.
                          </Stylep>
                          <Stylep>
                              At Brunel University, I led a team to create{' '}
                              <GitHubLink
                                  href="https://github.com/RandomUser/Nutri-Book"
                                  target="_blank"
                                  rel="noopener noreferrer"
                              >
                                  Nutri-Book
                              </GitHubLink>
                              , an app for sharing ingredients, which enhanced my leadership and development skills.
                          </Stylep>
                          <Stylep>
                              I am currently pursuing an Bachelor degree in Computer Science with a specialization in AI and Data Science at Brunel University London
                          </Stylep>
                  </Grid>
                  <Grid item xs={12} md={6}>
                      <ImageBIO
                          src={require('../images/default_image.webp')}
                          alt="Amirbek's picture"
                      />
                  </Grid>
              </Grid>
          </Parent>
      </Container>
  );
};

export default BIO;
