import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import './SkillsSection.css';
import Skill from './Skill';
import Skill2 from './Skill2'
import './Experience.css';

const SkillsSection = () => {
  return (
    <Flex direction="column" align="center" className="skills-section" id='Skills' >
      <Heading className="skills-heading">
        Skills
      </Heading>
      <Text className="skills-description" textAlign="center">
        These are the Skills I Posses and trying Master.
      </Text>
      {/* Use Flex to arrange Skill and "D" side by side */}
      <Flex>
        <Box>
          <Skill />
        </Box>
        <Box>
          <Skill2/>
        </Box>
      </Flex>
    </Flex>
  );
};

export default SkillsSection;
