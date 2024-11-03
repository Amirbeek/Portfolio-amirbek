import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SkillsContainer = styled.section`
  padding: 2rem 0;
`;

const Skill = styled.div`
  margin-bottom: 20px;

  h4 {
    margin-bottom: 5px;
  }

  .progress-bar {
    background-color: #e0e0e0;
    border-radius: 5px;
    height: 10px;
    overflow: hidden;

    div {
      height: 100%;
      background-color: ${({ theme }) => theme.primary};
      transition: width 0.5s ease;
    }
  }
`;

const Skills = ({ skills }) => {
  return (
    <SkillsContainer>
      {skills.map((skill) => (
        <Skill key={skill.name}>
          <h4>{skill.name}</h4>
          <div className="progress-bar">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              style={{ backgroundColor: skill.color }}
            />
          </div>
        </Skill>
      ))}
    </SkillsContainer>
  );
};

export default Skills;
