// ContactMe.jsx
import React from 'react';
import { Box, Text, Heading, Link, Flex, IconButton } from '@chakra-ui/react';
import { FaEnvelope, FaMapMarkerAlt,  FaClock, FaFile } from 'react-icons/fa';
import './ContactMe.css'; // Import the CSS file

const ContactMe = () => {
  return (
    <Box className="box-container">
      <Heading as="h2" size="lg" className="heading" id='contact'>
        Let's Sync!
      </Heading>

      <Flex className="contact-grid">
        {/* Email */}
        <Box className="contact-item">
          <IconButton
            as={Link}
            href="mailto:your.email@example.com"
            aria-label="Email"
            icon={<FaEnvelope size={24} />}
            size="lg"
            variant="ghost"
            className="icon-button"
          />
          <Link href="mailto:your.email@example.com" className="link">
            <Text fontSize="md" fontWeight="bold">
              tasmimdristy7@gmail.com
            </Text>
          </Link>
        </Box>

        {/* Resume */}
        

        {/* Location */}
        <Box className="contact-item">
          <IconButton
            as={Link}
            href="#location"
            aria-label="Location"
            icon={<FaMapMarkerAlt size={24} />}
            size="lg"
            variant="ghost"
            className="icon-button"
          />
          <Text fontSize="md" fontFamily="Libre Baskerville">
            Dhaka, Bangladesh
          </Text>
        </Box>
        <Box className="contact-item">
          <IconButton
            as={Link}
            href="/path/to/your/resume.pdf" // Update with the actual path to your resume PDF
            aria-label="Resume"
            icon={<FaFile size={24} />}
            size="lg"
            variant="ghost"
            className="icon-button"
          />
          <Link href="https://drive.google.com/file/d/1emRvYN25pMZdQu2Ri1u2VuLx9FP_wdTC/view?usp=sharing" className="link" target="_blank" rel="noopener noreferrer">
            Download Resume
          </Link>
        </Box>
        {/* Timezone */}
        <Box className="contact-item">
          <IconButton
            as={Link}
            href="#working-timezone"
            aria-label="Working Timezone"
            icon={<FaClock />}
            size="lg"
            variant="ghost"
            className="icon-button"
          />
          <Text fontSize="10px" fontWeight='bold'>Preferred Timezone: (Pacific, Eastern)</Text>
        </Box>
      </Flex>

    </Box>
  );
};

export default ContactMe;
