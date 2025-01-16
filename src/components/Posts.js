import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "./Cards";

function Posts() {

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-12 col-md-4">
                    <Cards image={'./images/Tint.png'}
                           title={'Image color classifier web application inspired by Figma Image Color Picker'}
                           date={'January 10, 2025'}
                           ProjectType={'Development'}
                           Url={'/tintthrove'}
                    />
                </div>
                <div className="col-12 col-md-4">
                    <Cards image={'./images/Thumbnail.png'}
                           title={'Discovering ThreePage.js. How and why this blog was built.'}
                           date={'February 9, 2024'}
                           ProjectType={'Development'}
                           Url={'/threejs'}
                    />
                </div>
                <div className="col-12 col-md-4">
                    <Cards image={'./images/personal.jpg'}
                           title={'My favorite Photo albums that I discovered in 2023'}
                           date={'August 01, 2023'}
                           ProjectType={'Personal'}
                           Url={'/albom'}
                    />
                </div>
                <div className="col-12 col-md-4">
                    <Cards image={'./images/GitHub_Globe1.png'}
                           title={'Flight data visualization on a globe, inspired by Github\'s homepage'}
                           date={'December 29, 2024'}
                           ProjectType={'Development'}
                           Url={'/gitglobe'}
                    />
                </div>
            </div>
        </div>
    );
}

export default Posts;
