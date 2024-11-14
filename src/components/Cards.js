import Card from 'react-bootstrap/Card';
import styled from "styled-components";

// Styled components
const FunCard = styled(Card)`
    transition: 1s;
    background-color: ${props => props.theme.face_color};
    color: ${props => props.theme.text_color_header};

    .title-card {
        transition: 0.3s;
    }
    a{
        color:${props => props.theme.text_color_header} ;
    }
    &:hover .title-card {
        color: ${props => props.theme.primary_color};
    }
`;

const Card_p = styled.div`
    color: ${props => props.theme.text_color_header}!important;
    font-size: 13px;
    margin: 0;

    span {
        font-weight: bold;
        color: ${props => props.theme.face_color_hover};
    }
`;

// Card component
function Cards({ image, title, date, ProjectType, Url }) {
    return (
        <FunCard style={{ width: '18rem', marginBottom: '20px', borderRadius: '15px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
            <a href={Url} target="_blank" rel="noopener noreferrer">
                <Card.Img variant="top" src={image} style={{ borderRadius: '15px 15px 0 0', objectFit: 'cover', height: '180px' }} />
            </a>
            <Card.Body>
                <Card_p className="text-muted">
                    <span>{ProjectType}</span> · {date}
                </Card_p>
                <a href={Url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <Card.Title className="title-card">{title}</Card.Title>
                </a>
            </Card.Body>
        </FunCard>
    );
}

export default Cards;
