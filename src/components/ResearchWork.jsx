// ResearchWork.jsx
import React from 'react';
import { Box, Heading,  } from '@chakra-ui/react';

const ResearchWork = () => {
  return (
    <Box id='research' p={8} borderWidth="1px" borderRadius="lg" textAlign="center" mt={100}mb={250}>
      <Heading as="h1" size="lg" fontFamily="Raleway" mb={40}>
        Research Work
      </Heading>
      <Box mt={4}mb={4}>
        <Heading as="h3" size="md" fontFamily="Libre Baskerville" fontStyle={'italic'}>
          Coming Soon !!!
        </Heading>
   
      </Box>
    </Box>
  );
};

export default ResearchWork;
