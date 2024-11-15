import React from 'react';
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "./Cards";


function Posts() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-12 col-md-4">
                    <Cards image={'https://janarosmonaliev.com/static/tinydesk-feature-2-8664c1aea65b568a24054b6c0c1ce1a2.png'}
                           title={'My research project for CSE 487 at SUNY Korea'}
                           date={'February 01, 2021'}
                           ProjectType={'Development'}
                           Url={'https//:github.com'}
                    />
                </div>
                <div className="col-12 col-md-4">
                    <Cards image={'https://janarosmonaliev.com/static/tinydesk-feature-2-8664c1aea65b568a24054b6c0c1ce1a2.png'}
                           title={'My research project for CSE 487 at SUNY Korea'}
                           date={'February 01, 2021'}
                           ProjectType={'Development'}
                           Url={'https//:github.com'}
                    />
                </div>
                <div className="col-12 col-md-4">
                    <Cards image={'https://janarosmonaliev.com/static/tinydesk-feature-2-8664c1aea65b568a24054b6c0c1ce1a2.png'}
                           title={'My research project for CSE 487 at SUNY Korea'}
                           date={'February 01, 2021'}
                           ProjectType={'Development'}
                           Url={'https//:github.com'}
                    />
                </div>
            </div>
        </div>
    );
}

export default Posts;
