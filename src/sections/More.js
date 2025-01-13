import React from "react";
import { Card } from "../components/Card";
import Title from "../components/Title";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import moreImage from "../images/more.jpg";
import elbeImage from "../images/elbe.jpg";
import Blog from "../images/Blog.png";
import Grid from '@mui/material/Grid';
import {Container} from "@mui/material";

function More() {

    return (
        <Container sx={{ maxWidth: '1390px' }} maxWidth={'1200px'}>
            <Title title="More" />
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12} sm={6} md={4}>
                    <Card
                        url={'https://unsplash.com/@amirbeek'}
                        title="Shot On iPhone Series"
                        description="My gallery of photos shot and edited on iPhone 14 Pro Max."
                        background={moreImage}
                    >
                           Unsplash.com <ArrowForwardIcon style={{ verticalAlign: 'middle', width: 18 }} />
                    </Card>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                    <Card
                        title="ELBE MENSWEAR"
                        url={'https://elbe.uk/'}
                        description="Collaborating as a Frontend Developer and Web designer on an E-Commerce Platform for Emerging Designers and Artists"
                        background={elbeImage}
                    >
                            Elbe.co.uk <ArrowForwardIcon style={{ verticalAlign: 'middle', width: 18 }} />
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card
                        title="ThreePage.js Projects"
                        url={'https://www.behance.net/amirbekshomuro'}
                        description="Explore interactive 3D experiences! Dive into my ThreePage.js projects, showcasing cutting-edge graphics and animations. Click to discover the art of code"
                        background={Blog}
                    >
                            Behance.net <ArrowForwardIcon style={{ verticalAlign: 'middle', width: 18 }} />
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}

export default More;
