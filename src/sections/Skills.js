import React from 'react';
import styled from 'styled-components';
import AnimatedSection from '../components/AnimatedSection';
import { motion } from 'framer-motion'; // For smooth animations

const SkillsContainer = styled.div`
  padding: 100px 2rem;
  background-color: #282c34;
  color: white;
  text-align: center;

  h2 {
    font-size: 2.8rem;
    margin-bottom: 2.5rem;
  }

  .skills-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
  }
`;

const SkillCard = styled(motion.div)`
  background: #333;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  h4 {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
    color: #ffdd57;
  }

  .progress-bar-container {
    background: #444;
    border-radius: 5px;
    overflow: hidden;
    height: 10px;
    margin: 1rem 0;
  }

  .progress-bar {
    height: 10px;
    background: #ffdd57;
    width: ${({ level }) => `${level}%`};
    transition: width 0.4s ease;
  }

  .skill-level {
    font-size: 0.9rem;
    color: #ddd;
  }
`;

const Skills = () => {
  const skillsData = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'CSS', level: 80 },
    { name: 'Git', level: 75 },
    { name: 'MongoDB', level: 70 },
    { name: 'Python', level: 80 },
    { name: 'Django', level: 75 },
    { name: 'HTML', level: 90 },
    { name: 'TypeScript', level: 70 },
    { name: 'Next.js', level: 75 },
    { name: 'AWS', level: 60 },
    { name: 'GraphQL', level: 65 },
    { name: 'Docker', level: 60 },
    { name: 'SQL', level: 70 },
  ];

  return (
    <AnimatedSection id="skills">
      <SkillsContainer>
        <h2>Skills</h2>
        <div className="skills-wrapper">
          {skillsData.map((skill, index) => (
            <SkillCard 
              key={index}
              level={skill.level}
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <h4>{skill.name}</h4>
              <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: `${skill.level}%` }} />
              </div>
              <div className="skill-level">{skill.level}%</div>
            </SkillCard>
          ))}
        </div>
      </SkillsContainer>
    </AnimatedSection>
  );
};

export default Skills;
