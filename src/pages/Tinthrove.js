import BlogHeader from "../components/Blog_header";
import Typography from "@mui/material/Typography";
import React from "react";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import Box from "@mui/material/Box";
import { Link as MuiLink } from '@mui/material';
import styled from "styled-components";


const StyledLink = styled(MuiLink)`
  margin-right: 12px;
  font-weight: bold;
  text-decoration: none;
  color: ${props => props.theme.text_second_color}!important;
  &:hover {
    text-decoration: underline;
  }
`;

function Tinthrove() {
    const codeString = `
def get_colors(image, number_of_colors):
    reshaped_image = image.reshape(image.shape[0] * image.shape[1], 3)
    clf = KMeans(n_clusters=number_of_colors)
    labels = clf.fit_predict(reshaped_image)
    counts = Counter(labels)
    center_colors = clf.cluster_centers_
    ordered_colors = [center_colors[i] for i in counts.keys()]
    return ordered_colors
    `
    return(
        <>
            <BlogHeader
                type={'Development'}
                title={'Image Color Classifier Web Application Inspired by Figma’s Image Color Picker'}
                date={'December 20, 2024'}
                image={'./images/Tint2.png'}
            >
                <Typography variant="h4" gutterBottom sx={{fontWeight: 'bold', paddingBottom: 'var(--space-sm)'}}>
                    Inspiration
                </Typography>
                <Typography variant="h6" gutterBottom sx={{marginBottom: 'var(--space-md)'}}>
                    As a daily user of Figma, I often leverage its image color picker, which I find not only useful but
                    also beautifully designed. This tool inspired me to develop a similar feature for my own website
                    that adheres to the intuitive and modern design principles seen in Figma.
                </Typography>
                <img src="./images/figma.png" style={{width: '100%'}} alt="Figma Inspiration"/>

                <Typography variant="h4" gutterBottom
                            sx={{fontWeight: 'bold', paddingBottom: 'var(--space-sm)', marginTop: 'var(--space-md)'}}>
                    Tinthrove Design Approach
                </Typography>
                <Typography variant="h6" gutterBottom sx={{marginBottom: 'var(--space-md)'}}>
                    In crafting Tinthrove, I scoured numerous templates and visual assets from the <a
                    href="https://www.figma.com/community" className="navigate">Figma Community</a> for inspiration. My
                    goal was to forge a design that stands out by incorporating vibrant animations and colors. For this
                    purpose, I integrated <span className="picked">Tailwind CSS</span> for its utility-first styling
                    and <span className="picked">GSAP</span> for smooth animations. The backend development was powered
                    by <span className="picked">Flask</span>.
                </Typography>

                <Typography variant="h4" gutterBottom
                            sx={{fontWeight: 'bold', paddingBottom: 'var(--space-sm)', marginTop: 'var(--space-md)'}}>
                    Creating the Color Classifier
                </Typography>
                <Typography variant="h6" gutterBottom sx={{marginBottom: 'var(--space-md)'}}>
                    The Color Classifier was engineered using the K-Means clustering algorithm. This tool effectively
                    groups similar colors from images, which simplifies the design process and enhances data
                    visualization by providing a palette of dominant colors based on their RGB values.
                </Typography>
                <SyntaxHighlighter language="python" style={dracula}>
                    {codeString}
                </SyntaxHighlighter>
                <img src="./images/my_KmeanAlgo.png" style={{width: '100%'}} alt="K-Means Algorithm Visualization"/>
                <Typography variant="h4" gutterBottom
                            sx={{fontWeight: 'bold', paddingBottom: 'var(--space-sm)', marginTop: 'var(--space-md)'}}>
                    Deployment
                </Typography>
                <Typography variant="h6" gutterBottom sx={{marginBottom: 'var(--space-md)'}}>
                    After rigorous testing and further refining the design, I deployed my application on Heroku using
                    GitHub. This setup enables continuous integration, meaning Heroku automatically fetches and deploys
                    new builds upon code changes. Initially, I attempted to deploy on Vercel; however, Vercel's 250 MB
                    limit proved restrictive, leading to an unsuccessful first attempt. Consequently, I decided to
                    switch to Heroku, leveraging the benefits offered through the GitHub Student Pack, which provides
                    additional resources for deployment.
                </Typography>
                <Box sx={{ width: '100%', overflow: 'hidden' }}>
                    <video
                        preload="metadata"
                        style={{width:'100%',height:'100%'}}
                        loop
                        autoPlay
                        muted
                    >
                        <source src="/images/tint.MOV" type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                </Box>
                <Typography
                    sx={{
                        marginY: 'var(--space-md)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap'}}>
                    <StyledLink href="https://tinttrove-66532836a19d.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                        Live Application
                    </StyledLink>
                    <StyledLink href="https://github.com/Amirbeek/TintTrove" target="_blank" rel="noopener noreferrer">
                        Source Code on GitHub
                    </StyledLink>
                </Typography>
            </BlogHeader>
        </>
    )
}

export default Tinthrove;
