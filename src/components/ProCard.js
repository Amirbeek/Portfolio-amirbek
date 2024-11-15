import React from 'react';
import styled from 'styled-components';
import IconLinks from './IconLinks';

const Wrapper = styled.div`
    min-height: 484px;
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
    .icons{
        svg{
            color: ${props => props.theme.text_color_header};
        }
    }
`;

const RowWrapper = styled.div`
    .col-md-6{
        @media (min-width: 960px) {
            padding-right: 0!important;
        }
    }
`;

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
`;

const ProCard = ({ title, description, image, repoLink, GitHubLink, DomainLink, PagePath, Project_Title, Project_type, Project_date, pro_1, pro_1_text }) => {
    return (
        <RowWrapper className="row p-0 mr-0">
            <Wrapper className="col-12 col-md-6">
                <div className="j p p-5 icons">
                    <StyledTitle className="">{title}</StyledTitle>
                    <StyleDesc dangerouslySetInnerHTML={{ __html: description }} />
                    <IconLinks
                        repoLink={repoLink}
                        DomainLink={DomainLink}
                        GitHubLink={GitHubLink}
                        PagePath={PagePath}
                        Project_Title={Project_Title}
                        Project_type={Project_type}
                        Project_date={Project_date}
                        pro_1={pro_1}
                        pro_1_text={pro_1_text}
                    />
                </div>
            </Wrapper>
            <Wrapper className="col-12 col-md-6">
                <div className="j k">
                    <a href={repoLink} target="_blank" rel="noopener noreferrer">
                        <Images src={image} className="k" alt={`${title} preview`} />
                    </a>
                </div>
            </Wrapper>
        </RowWrapper>
    );
};

export default ProCard;
