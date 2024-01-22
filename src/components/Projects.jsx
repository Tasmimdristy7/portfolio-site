// Projects.jsx
import React from 'react';
import { Box, Text, Heading, Link, Tabs, TabList, TabPanels, Tab, TabPanel, SimpleGrid } from '@chakra-ui/react';
import Slider from 'react-slick';
import './projects.css'; // Import the project-specific CSS file
import { projectCategories, allProjects } from './ProjectsData';

const Project = ({ imageSrc, title, details, githubLink, stacks }) => {
  return (
    <Box className="project-card" >
      {/* <Image src={imageSrc} alt={title} className="project-image" /> */}
      <Link href={githubLink} isExternal style={{ textDecoration: 'none' }}>
        <Text className="project-title" >{title}</Text>
      </Link>
      <p className="project-details">{details}</p>
      <Text className='project-stack'>{stacks}</Text>
    </Box>
  );
};

const Projects = () => {
  // Settings for the slider with arrows
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 2,
    slidesPerRow: 2,
  };

  return (
    <Box className="project-container">
      <Heading
      id='projects'
        className='projects-heading'
        textAlign="center"
        borderBottom="none" // Add this line to remove the underline
      >
        Projects
      </Heading>
      <Text className='skills-description ' textAlign="center" marginBottom={35} marginTop={-15}>
        When I am bored or I learn something new, I create projects. These are the projects I've created so far.
      </Text>

      <Tabs isLazy>
        <TabList justifyContent="center" mb={4}>
          {projectCategories.map((category, index) => (
            <Tab key={index} className="tab-button">
              {category}
            </Tab>
          ))}
        </TabList>

        <TabPanels>
          {projectCategories.map((category, index) => (
            <TabPanel key={index}>
              {allProjects
                .filter((project) => project.category === category)
                .length > 4 ? (
                  <Slider {...sliderSettings}>
                    {allProjects
                      .filter((project) => project.category === category)
                      .map((project, index) => (
                        <Box key={index} p={2}>
                          <Project {...project} />
                        </Box>
                      ))}
                  </Slider>
                ) : (
                  <SimpleGrid columns={2} spacing={4} className="project-grid">
                    {allProjects
                      .filter((project) => project.category === category)
                      .map((project, index) => (
                        <Box key={index}>
                          <Project {...project} />
                        </Box>
                      ))}
                  </SimpleGrid>
                )}
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Projects;
