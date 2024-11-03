import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: auto;
    display: block;
    transition: opacity 0.3s ease;
  }

  &:hover img {
    opacity: 0.8;
  }

  .caption {
    position: absolute;
    bottom: 10px;
    left: 10px;
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 5px 10px;
    border-radius: 5px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover .caption {
    opacity: 1;
  }
`;

const HoverImage = ({ src, caption }) => {
  return (
    <ImageContainer>
      <img src={src} alt="Project" />
      <div className="caption">{caption}</div>
    </ImageContainer>
  );
};

export default HoverImage;
