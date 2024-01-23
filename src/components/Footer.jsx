// Footer.jsx
import React from 'react';
import { Box } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box
      as="footer"
      textAlign="center"
      p={6}  // Increase the padding
      mt={10} // Increase the margin-top
      borderTop="1px"
      borderColor="gray.300"
      height={100}
    >
      {/* Add your footer content here */}
    </Box>
  );
};

export default Footer;
