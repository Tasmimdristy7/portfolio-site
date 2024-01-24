import React from 'react';
import { Heading, Text, Box } from '@chakra-ui/react';
import './SkillsSection.css';
import Skill from './Skill';
import Skill2 from './Skill2';
import './Experience.css';

const SkillsSection = () => {
  return (
    <div className="skills-section" id='Skill'>
      <Box textAlign="center" marginBottom="4" alignItems="center">
        <Heading className="skills-heading">Skills</Heading>
        <Text className="skills-description">
          These are the Skills I Possess and am trying to Master.
        </Text>
      </Box>
      <div className="simple-grid">
        <Skill />
        <Skill2 />
      </div>
    </div>
  );
};

export default SkillsSection;
