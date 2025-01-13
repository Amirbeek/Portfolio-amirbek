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
                {/*<div className="col-12 col-md-4">*/}
                {/*    <Cards image={'https://janarosmonaliev.com/static/tinydesk-feature-2-8664c1aea65b568a24054b6c0c1ce1a2.png'}*/}
                {/*           title={'My research project for CSE 487 at SUNY Korea'}*/}
                {/*           date={'February 01, 2021'}*/}
                {/*           ProjectType={'Development'}*/}
                {/*           Url={'https//:github.com'}*/}
                {/*    />*/}
                {/*</div>*/}
            </div>
        </div>
    );
}

export default Posts;
