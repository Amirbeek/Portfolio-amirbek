import React from 'react';
import About from '../sections/About';
import BIO from '../sections/BIO';
import Projects from '../sections/Projects';

function HomePage() {
    return (
        <div>
            <About />
            <BIO />
            <Projects />
            {/*<h1>Skils</h1>*/}
        </div>
    );
}

export default HomePage;
