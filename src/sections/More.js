import React from "react";
import Title from "../components/Title";
import { Link } from "react-router-dom";
import styled from "styled-components";
import avatarImage from "../images/more.jpg"; // Import the image correctly
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Card = styled(Link)`
    text-decoration: none;
    color: #fff!important;
    width: 400px;
    margin-top: 5rem;
    height: 400px;
    background-image: url(${avatarImage}); // Use the imported image
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    position: relative;
    border-radius: 20px;
    transition: transform 0.3s, box-shadow 0.3s;

    h3 {
        margin: 0;
        font-size: 1.5rem;
        font-weight: bold;
    }

    p {
        font-size: 15px;
        font-weight: 200!important;
    }

    a {
        color: #fff;

        margin-top: 10px;
        text-decoration: none;

        &:hover {
            text-decoration: underline;

        }
    }
`;
const CardWrapper = styled.div`
    position: absolute;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    padding: 2rem 1rem 1.5rem 1rem;
    border-radius: 0 0 20px 20px;
    bottom: 0;
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));

`
function More() {
    return (
        <>
            <Title title={'More'} />
            <div className="container" >
                <Card to={'https://unsplash.com/@amirbeek'} target={'_blank'}>
                    <CardWrapper>
                        <h3>Shot On iPhone Series</h3>
                        <p>My gallery of photos shot and edited on iPhone 14 Pro Max.</p>
                        <a href="https://unsplash.com/@amirbeek" target="_blank" rel="noreferrer">
                            unsplash.com  <ArrowForwardIcon style={{verticalAlign: 'middle', width:18}}/>
                        </a>
                    </CardWrapper>
                </Card>
            </div>
        </>
    );
}

export default More;
