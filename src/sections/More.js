import React from "react";
import { Card } from "../components/Card";
import Title from "../components/Title";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import moreImage from "../images/more.jpg";
import elbeImage from "../images/elbe.jpg";
import Blog from "../images/Blog.png";

function More() {
    return (
        <>
            <Title title="More" />
            <div className="container d-flex">
                <Card
                    url={'https://unsplash.com/@amirbeek'}
                    title="Shot On iPhone Series"
                    description="My gallery of photos shot and edited on iPhone 14 Pro Max."
                    background={moreImage}
                >
                    <a href="https://unsplash.com/@amirbeek" target="_blank" rel="noreferrer">
                        Visit Unsplash <ArrowForwardIcon style={{ verticalAlign: 'middle', width: 18 }} />
                    </a>
                </Card>
                <Card
                    title="ELBE MENSWEAR"
                    url={'https://elbe.uk/'}
                    description="Collaborating as a Frontend Developer and Web designer on an E-Commerce Platform for Emerging Designers and Artists"
                    background={elbeImage}
                >

                    <a href="https://elbe.uk/" target="_blank" rel="noreferrer">
                        Visit ELBE <ArrowForwardIcon style={{ verticalAlign: 'middle', width: 18 }} />
                    </a>
                </Card>
                <Card
                    title="Three.js Projects"
                    url={'https://www.behance.net/amirbekshomuro'}
                    description="Explore interactive 3D experiences! Dive into my Three.js projects, showcasing cutting-edge graphics and animations. Click to discover the art of code"
                    background={Blog}
                >
                    <a href="https://www.behance.net/amirbekshomuro" target="_blank" rel="noreferrer">
                        visit behance.net  <ArrowForwardIcon style={{ verticalAlign: 'middle', width: 18 }} />
                    </a>
                </Card>
            </div>
        </>
    );
}

export default More;