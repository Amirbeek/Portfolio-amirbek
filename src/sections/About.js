import React from 'react';
import styled from 'styled-components';
import { ReactTyped } from 'react-typed';
import { motion } from 'framer-motion';

const AboutContainer = styled.div`
    padding: 100px 0px;
    text-align: left;   
    h1 {
        color:${props => props.theme.text_color_header};
        line-height: 72px;
        margin-top: 18px;
        font-size: 60px;
        font-weight: 700;
        .short-name {
            color: #828282;
        }
    }

    p {
        font-size: 1.2rem;
        max-width: 800px;
        line-height: 1.6;
        font-weight: 700;
    }

    @media (max-width: 768px) {
        padding: 40px 20px; 

        h1 {
            font-size: 36px;
            line-height: 1.1;
        }

        p {
            font-size: 0.9rem;
        }
    }
`;

const FaceImg = styled(motion.div)`
    width: 100px;
    height: 100px;
    transition:  0.3s ease-in-out;

    background-color: ${props => props.theme.face_color};
    border-radius: 50%;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        background-color: ${props => props.theme.face_color_hover};
        transform: scale(1.1); 
    }
`;

const FaceColor = styled.span`
    color: ${props => props.theme.primary_color} !important;
`;

const About = () => {
    return (
        <AboutContainer className={'container-lg'}>
            <div style={{height:'300px'}}>
                <FaceImg
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <img src={require('../images/sticker2.webp')} alt="Amirbek's avatar" />
                </FaceImg>
                <motion.h1
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, type: 'spring', stiffness: 100 }}
                >
                    Hi, I'm Amirbek <span className={'short-name'}>(Amir)</span>
                    <br />
                    I <FaceColor>
                    <ReactTyped
                        strings={["design", "develop", "create"]}
                        typeSpeed={100}
                        backSpeed={50}
                        backDelay={1000}
                        startDelay={500}
                        loop
                    />
                </FaceColor> user-friendly products.
                </motion.h1>
            </div>
        </AboutContainer>
    );
};

export default About;
