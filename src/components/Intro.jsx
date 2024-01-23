// Intro.js
import React, { useState, useEffect } from 'react';
import { Flex, Text, Box, Link ,IconButton} from '@chakra-ui/react';
import{FaLinkedin, FaGithub} from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Intro.css';

const Intro = () => {
  const [animateScrollIndicator, setAnimateScrollIndicator] = useState(false);

  // UseEffect for triggering the animation after component mount
  useEffect(() => {
    setAnimateScrollIndicator(true);
  }, []);

  return (
    <Flex
      direction={{ base: 'column', md: 'column', lg: 'column', xl: 'row' }} // Adjust the breakpoints as needed
      align="center"
      justify="center"
      className="intro-container"
    >
      {/* Use motion.div for animation on the greeting */}
      <motion.div className="greeting" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
        Hiii, This is Tasmim.
      </motion.div>
      <Text
        textAlign="center"
        className={`intro-text ${animateScrollIndicator ? 'fade-in' : ''}`}
        mt={{ base: 4, md: 4, lg: 0, xl: 0 }} // Adjust the spacing as needed
      >
        I like to think Big, Dream Bigger, and Make it Happen. Alongside that, I have been working as a Software Test Engineer for quite some time. I find research fun and AI cool too. I'm also involved in various other things too. Let's take a stroll to see if our paths align!
      </Text>

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
      <Box className="scroll-indicator-box" mt={4} mb={4}>
        <Link
          href="#demo" // Adjust the href as needed
          className={`scroll-indicator${animateScrollIndicator ? ' animate' : ''}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Box as="svg" className="arrows" viewBox="0 0 60 80" xmlns="http://www.w3.org/2000/svg">
            <motion.path className="a1" d="M0 0 L30 32 L60 0"></motion.path>
            <motion.path className="a2" d="M0 20 L30 52 L60 20"></motion.path>
            <motion.path className="a3" d="M0 40 L30 72 L60 40"></motion.path>
          </Box>
        </Link>
      </Box>
    </Flex>
  );
};

export default Intro;
