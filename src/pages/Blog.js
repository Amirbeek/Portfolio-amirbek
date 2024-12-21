import React from 'react';
import BlogABout from "../components/BlogABout";
import Posts from '../components/Posts'
import styled from "styled-components"
const Title = styled.h3`
    color: ${props => props.theme.text_color_header};!important;);
`
function Blog() {
    return (
        <div className={'container  mt-5 pt-5   '}>
            <BlogABout/>
            <Title className={'mt-5'}>
                    Blog Posts ↓
            </Title>
            <Posts/>
        </div>
    );
}

export default Blog;
