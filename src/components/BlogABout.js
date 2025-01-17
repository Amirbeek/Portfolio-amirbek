import React from 'react';
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Blog_text = styled.h2`
    color: ${props => props.theme.text_color_header};
    font-weight: bold;
`;

const Blog_p = styled.p`
    font-size: 18px;
    font-weight: 400;
    line-height: 32px;
    color: ${props => props.theme.text_color_header};!important;);`;

const ImageBIO = styled.img`
    width: 300px;
    height: 300px;
    border-radius: 100%;
    border: 6px solid ${props => props.theme.primary_color};
`
const ButtonStyle = styled(Link)`
    background-color: ${props => props.theme.primary_color};
    color: #fff;
    padding: 10px 15px;
    border: none;
    border-radius: 10px;
    transition: 0.3s ease-in-out;
    &:hover {
        background-color: #3912af;
    }
`
function BlogAbout() {
    return (
        <div className="container">
            <div className="row align-items-center flex-lg-row-reverse p-md-5 ">


                <div className="col-12 col-md-4   d-flex justify-content-center">
                    <ImageBIO
                        src={require('../images/hello.jpeg')}
                        alt="Amirbek's picture"
                    />
                </div>
                <div className="col-12 col-md-8   p-5  ">
                    <Blog_text>Amirbek Shomurodov | Personal Blog</Blog_text>
                    <Blog_p>
                        Welcome to my personal blog. Here I share my stories and ideas with the world. I am very
                        passionate about programming and design. Currently, I am a Computer Science student at Brunel
                        University London.
                    </Blog_p>
                    <ButtonStyle to={'/contact'} style={{textDecoration: 'none'}}>Get in touch <ArrowForwardIcon
                        style={{verticalAlign: 'middle', width: 18}}/></ButtonStyle>
                </div>

            </div>
        </div>
    );
}

export default BlogAbout;
