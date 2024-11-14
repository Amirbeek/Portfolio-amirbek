import React from 'react';
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

const Blog_text = styled.h1`
    color: ${props => props.theme.text_color_header};
    font-weight: bold;
`;

const Blog_p = styled.p`
    font-size: 18px;
    font-weight: 400;
    line-height: 32px;
    color: ${props => props.theme.text_color_header};!important;);`;

const ImageBIO = styled.img`
    max-width: 300px;
    height: auto;
    border-radius: 100%;
`
function BlogAbout() {
    return (
        <div className="container mt-5">
            <div className="row align-items-center">
                <div className="col-12 col-md-8 order-2 order-md-1 p-5 ">
                    <Blog_text>Amirbek Shomurodov | Personal Blog</Blog_text>
                    <Blog_p>
                        Welcome to my personal blog. Here I share my stories and ideas with the world. I am very passionate about programming and design. Currently, I am a Computer Science student at Stony Brook University.
                    </Blog_p>
                </div>
                <div className="col-12 col-md-4 order-1 order-md-2 d-flex justify-content-center">
                    <ImageBIO
                        src={require('../images/hello.jpeg')}
                        alt="Amirbek's picture"
                    />
                </div>
            </div>
        </div>
    );
}

export default BlogAbout;
