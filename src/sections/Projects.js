import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Title from "../components/Title";
import ProCard from "../components/ProCard";
import { projectData } from "../project_data";
import { Container } from "@mui/material";

const Projects = () => {
    return (
        <div>
            <Title title="Project Page" />
            <Container sx={{ maxWidth: '1390px' }} maxWidth={'1200px'}>
                {projectData.map((project, index) => (
                    <ProCard key={index} projectData{...project} />
                ))}
            </Container>
        </div>
    );
};

export default Projects;
