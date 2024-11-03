import React, { useState } from 'react';
import styled from 'styled-components';
import AnimatedSection from '../components/AnimatedSection';
import HoverCard from '../components/HoverCard';
import { Modal, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaGithub } from 'react-icons/fa';

const ProjectsContainer = styled.div`
  padding: 100px 2rem; // Add top padding to account for fixed navbar
  background-color: #f8f9fa; // Light background for contrast
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  .project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
  }
`;

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'Project 1',
      description: 'This is a description of project 1.',
      githubLink: 'https://github.com/example/project1',
      image: 'https://via.placeholder.com/600x400', // Replace with your image URLs
    },
    {
      title: 'Project 2',
      description: 'This is a description of project 2.',
      githubLink: 'https://github.com/example/project2',
      image: 'https://via.placeholder.com/600x400', // Replace with your image URLs
    },
    // Add more projects as needed
  ];

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <AnimatedSection id="projects">
      <ProjectsContainer>
        <h2>Projects</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <HoverCard
              key={index}
              title={project.title}
              description={project.description}
              onClick={() => handleCardClick(project)}
            />
          ))}
        </div>
        {/* Modal */}
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedProject?.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={selectedProject?.image}
              alt={selectedProject?.title}
              style={{ width: '100%', marginBottom: '1rem' }}
            />
            <p>{selectedProject?.description}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                window.open(selectedProject?.githubLink, '_blank');
                toast.success('Opening GitHub repository!');
              }}
            >
              <FaGithub /> View on GitHub
            </Button>
          </Modal.Footer>
        </Modal>
        <ToastContainer />
      </ProjectsContainer>
    </AnimatedSection>
  );
};

export default Projects;
