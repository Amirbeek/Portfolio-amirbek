import React, { useEffect } from 'react';
import styled from "styled-components";

const Date = styled.span`
    font-weight: bold;
    margin-top: 15px;
    color: ${props => props.theme.face_color_hover};
`;

const Title = styled.h1`
    font-weight: 600;
    color: ${props => props.theme.text_color_header};
`;

const FaceImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 100px;
    border: 3px solid #6f42c1;
`;

const Desc = styled.p`
    color: ${props => props.theme.text_color_header};
    span{
        font-weight: bold;
    }
    a{
        color:#6f42c1;
        font-weight: bold;
        text-decoration: none;
        &:hover{
            text-decoration: underline;
        }
    }
`;

const Ip = styled.h6`
    margin: 0;
    color: ${props => props.theme.text_second_color};
`;

const SpanColor = styled.span`
    color: #758695;
`;
const Body_Title= styled.h2`
    color: ${props => props.theme.text_color_header};
    font-weight: bold;
`

const Project_Page = ({ projectData }) => {
    useEffect(() => {


    }, [projectData]);
    console.log('PROJECTDATA: ' + JSON.stringify(projectData));
    const { Project_Title, Project_type, Project_date, Pro_Highlight, Pro_Desc ,Project_image } = projectData || {};

    return (
        <div className="container my-5">
            <Title>{Project_Title || 'No project data'}</Title>
            <Date>{Project_type || 'No project type'}</Date>
            <div className="d-grid gap-2 d-flex my-4">
                <FaceImage src={require('../images/hello.jpeg')} alt="Amirbek's picture" />

                <div className="align-items-center">
                    <Ip>Amirbek Shomurodov</Ip>
                    <SpanColor>{Project_date || 'No project date'}</SpanColor>
                </div>
            </div>

            <div>
                {Project_image &&
                    <img src={Project_image1} className={'img-fluid'} alt=""/>
                }
                {Pro_Highlight &&
                    <Body_Title className={'mt-4 mb-2'}> {Pro_Highlight}</Body_Title>}
                {Pro_Desc && (
                    <Desc
                        dangerouslySetInnerHTML={{
                            __html: Pro_Desc,
                        }}
                    />
                )}
                {Project_image1 &&
                    <img src={Project_image1} className={'img-fluid'} alt=""/>
                }
                {Pro_Highlight &&
                    <Body_Title className={'mt-4 mb-2'}> {Pro_Highlight}</Body_Title>}
                {Pro_Desc && (
                    <Desc
                        dangerouslySetInnerHTML={{
                            __html: Pro_Desc,
                        }}
                    />
                )}
            </div>
        </div>
    );
};

export default Project_Page;
