import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const StyledBox = styled(Box)`
    text-decoration: none;
    color: #fff;
    width: 100%;
    margin-top: 2rem;
    height: 370px;
    background-image: url(${props => props.background});
    background-size: cover; 
    background-position: center; 
    background-repeat: no-repeat;
    position: relative;
    border-radius:  20px;
`;


const CardWrapper = styled(CardContent)`
    position: absolute;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.13);
    padding: 2rem 1rem 1.5rem 1rem;
    bottom: 0;
    width: 100%;
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.53));
    border-radius: 20px;

`;

export const Card = ({ title, description, background, children, url }) => {

    const handleRedirect = () => {
        window.open(url, '_blank');
    };

    return (
        <>
            <StyledBox
                background={background}
                onClick={handleRedirect}
            >

                <CardActionArea
                    sx={{
                        height: '100%',
                        width: '100%',
                        display: 'block',
                        '&[data-active]': {
                            '&:hover': {
                                backgroundColor: 'action.selectedHover',
                            },
                        },
                    }}
                >
                    <CardWrapper sx={{ height: '100%' , width:'100%'}}>
                       <div style={{position:'absolute', bottom:'14px'}}>
                           <Typography variant="h5" component="h1">
                               {title}
                           </Typography>
                           <Typography variant="body2" color="#d9d9d9">
                               {description}

                           </Typography>
                           <Typography variant="body1" color="#d9d9d9" sx={{marginTop:2}}>
                               {children}
                           </Typography>

                       </div>
                    </CardWrapper>
                </CardActionArea>
            </StyledBox>
        </>
    );
};
