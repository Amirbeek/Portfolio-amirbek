import React from "react";
import Blog_header from "../components/Blog_header";
import { Typography, Button } from "@mui/material";
import UnsplashGallery from "../components/UnsplashGallery";

function Albom() {
    return (
        <>
            <Blog_header
                type={"Personal"}
                title={"My favorite Photo albums that I discovered in 2023"}
                date={"August 01, 2023"}
                image={"./images/albom.png"}
            >
                <Typography variant="h6" gutterBottom sx={{ marginBottom: "var(--space-md)" }}>
                    For me, photography has always been a source of inspiration, enabling me to explore new ideas and push the boundaries of my creativity. Seeing a beautiful landscape transports me to a different emotional state, where I can close my eyes and vividly dream of something imaginary yet deeply personal. It also serves as an abstract medium through which I can connect with others' emotions without the need for verbal expression.
                    <br />
                    <br />
                    With that in mind, I wanted to share my favorite photo albums from 2023. These collections offer a chance to discover stunning landscapes and immerse yourself in the vibrant emotional narratives they convey. I’ve also highlighted my personal favorite from each album—a piece that resonated with me the most—as a starting point for your journey.
                </Typography>

                <div style={{ width: "100%", textAlign: "center", marginTop: "20px" }}>
                    <iframe
                        src="https://www.behance.net/embed/project/216917071?ilo0=1"
                        width="404"
                        height="316"
                        allowFullScreen
                        lazyload="true"
                        frameBorder="0"
                        allow="clipboard-write"
                        referrerPolicy="strict-origin-when-cross-origin"
                        title="Behance Project Embed"
                        style={{
                            width:'100%',
                            marginTop: 'var(--space-lg)',
                            borderRadius: "8px",
                            border: "1px solid #e0e0e0",
                            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                        }}
                    ></iframe>
                </div>
                <div style={{marginTop: 'var(--space-lg)'}}>
                    <UnsplashGallery />
                </div>

            </Blog_header>
        </>
    );
}

export default Albom;
