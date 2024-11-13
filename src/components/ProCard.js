import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    height: 484px;
    
    div{
        background-color: ${props => props.theme.face_color};
        height: 100%;
        width: 100%;
    }
    @media (min-width: 960px) {
        .p{
            border-radius: 30px 0 0 30px;
        }
        .k{
            border-radius: 0 30px 30px 0;
        }
    }
`
const RowWrapper = styled.div`
    //position: relative;
    //
    
`

const Images = styled.img`
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    transition: transform 0.5s;
    &:hover {
        transform: scale(1.01);
    }

`;
const StyledTitle = styled.h2`
    color: ${props => props.theme.text_color_header};
    font-weight: 600;
    
`;
const StyleDesc = styled.p`
    color: ${props => props.theme.text_color_header};

    a {
        color: ${props => props.theme.primary_color};
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
    span{
        color: ${props => props.theme.face_color_hover};
    }
`;

const ProCard = ({ title, description, image, repoLink }) => {
    return (
        <RowWrapper className="row">
            <Wrapper className="col-12 col-md-6">
                <div className="j p p-5">
                    <StyledTitle className="card-title">{title}</StyledTitle>
                    <StyleDesc
                        className="card-text"
                        dangerouslySetInnerHTML={{ __html: description }}
                    />
                </div>
            </Wrapper>
            <Wrapper className="col-12 col-md-6">
                <div className="j k">
                    <a href={repoLink} target="_blank" rel="noopener noreferrer">
                        <Images src={image} className="k" alt={`${title} preview`}/>
                    </a>
                </div>
            </Wrapper>
        </RowWrapper>
    );
};

export default ProCard;
