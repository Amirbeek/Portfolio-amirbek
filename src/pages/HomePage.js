import React from 'react';
import About from '../sections/About';
import BIO from '../sections/BIO';
import Projects from '../sections/Projects';
import styled from "styled-components";
const BackgroundColor = styled.div`
    background-color: ${props => props.theme.background};
    transition: .3s ease-in-out;
`
function HomePage() {

    return (
        <BackgroundColor>
            <div>
                <About/>
            </div>
            <div style={{marginTop:150}}>
                <BIO/>
            </div>
            <div>
                <Projects/>
            </div>
        </BackgroundColor>
    );
}

export default HomePage;
