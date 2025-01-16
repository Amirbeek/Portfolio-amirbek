import React, { useState, useEffect } from "react";
import { Typography, Grid } from "@mui/material";

function UnsplashGallery() {
    const [photos, setPhotos] = useState([]);
    const collectionId = "QTGTnGqF5vI";
    const accessKey = "F_m5vYnTS9mDqW2Zxcz62djK0Ldc5xxHZJuKqC9hXOg";

    useEffect(() => {
        fetch(`https://api.unsplash.com/collections/${collectionId}/photos?client_id=${accessKey}`)
            .then((response) => response.json())
            .then((data) => setPhotos(data))
            .catch((error) => console.error("Error fetching Unsplash photos:", error));
    }, [collectionId]);

    return (
        <div>
            <Typography variant="h6" gutterBottom>
                Discover breathtaking images from the <a href="https://unsplash.com/collections/QTGTnGqF5vI/discovering-the-beauty-of-the-seven-sisters" className={'navigate'}>Seven Sisters collection</a>:
            </Typography>
            <Grid container spacing={2}>
                {photos.map((photo) => (
                    <Grid item xs={12} sm={6} md={4} key={photo.id}>
                        <a href={photo.links.html} target="_blank" rel="noopener noreferrer">
                            <img
                                src={photo.urls.small}
                                alt={photo.alt_description || "Unsplash Image"}
                                style={{
                                    width: "100%",
                                    borderRadius: "8px",
                                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                                }}
                            />
                        </a>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default UnsplashGallery;
