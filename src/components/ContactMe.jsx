// ContactMe.jsx
import React from 'react';
import { Box, Text, Heading, Link, Flex, IconButton } from '@chakra-ui/react';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaClock } from 'react-icons/fa';
import './ContactMe.css'; // Import the CSS file

const ContactMe = () => {
  return (
    <Box className="box-container" >
      <Heading as="h2" size="lg" className="heading" id='contact'>
        Let's Sync!
      </Heading>

      <Box className='contact-grid'>
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
          <Text fontSize="sm">Preferred Timezone (Pacific, Eastern)</Text>
        </Box>
      </Box>

      <Flex className="contact-grid">
        <Box className='Socials'>
          {/* LinkedIn and GitHub icons */}
          <Flex>
            <Box className="icon-item socioIcon">
              <IconButton
                as={Link}
                href="https://www.linkedin.com/in/tasmimrashid/"
                isExternal
                aria-label="LinkedIn Profile"
                icon={<FaLinkedin />}
                size="lg"
                variant="ghost"
                className="icon-button"
              />
           
            </Box>
            <Box className="icon-item">
              <IconButton
                as={Link}
                href="https://github.com/Tasmimdristy7"
                isExternal
                aria-label="GitHub Profile"
                icon={<FaGithub />}
                size="lg"
                variant="ghost"
                className="icon-button"
              />
       
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default ContactMe;
