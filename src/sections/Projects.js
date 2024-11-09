import React, { useState } from 'react';
import styled from 'styled-components';
import AnimatedSection from '../components/AnimatedSection';
import HoverCard from '../components/HoverCard';
import { Modal, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaGithub } from 'react-icons/fa';

const ProjectsContainer = styled.div`
  padding: 100px 2rem;
  background-color: #f8f9fa;
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

  const projects = [
    {
      title: 'Project 1',
      description: 'This is a description of project 1.',
      githubLink: 'https://github.com/example/project1',
      image: 'https://via.placeholder.com/600x400',
    },
    {
      title: 'Project 2',
      description: 'This is a description of project 2.',
      githubLink: 'https://github.com/example/project2',
      image: 'https://via.placeholder.com/600x400',
    },
  ];



  return (
      <div>

      </div>
  );
};

export default Projects;
