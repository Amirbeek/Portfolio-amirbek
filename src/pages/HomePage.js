import React from 'react';
import About from '../sections/About';
import BIO from '../sections/BIO';
import Projects from '../sections/Projects';
import More from "../sections/More";

function HomePage() {

    return (
        <>
            <div>
                <About/>
            </div>
            <div style={{marginTop:150}}>
                <BIO/>
            </div >
            <div>
                <Projects/>
            </div>
            <More/>

        </>
    );
}

export default HomePage;
