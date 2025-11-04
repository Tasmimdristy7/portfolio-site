import React from 'react';
import { Box,  } from '@chakra-ui/react';
import './Experience.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCookie, faCloud, faNotesMedical, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const ExperienceItem = ({ icon, companyName, jobTitle, date, description ,location}) => (
  <Box className="accordion-item">
    <Box flex="1" textAlign="left" display="flex" alignItems="center">
      {icon}
      <Box>
        <span className="company-name">{companyName}</span>
        <Box className=' .job-title'>{jobTitle}</Box>
      </Box>
    </Box>
    <Box className='details'
    textAlign="right" ml="20px" mt="20px" >{location}</Box>
    <Box textAlign="right" ml="auto">
      <Box className="details">{date}</Box>
    </Box>
    <Box className="accordion-panel">
      {description}
    </Box>
  </Box>
);

const Experience = () => {
  return (
    
    <Box className="experience-container" >
       
      {/* Work Section */}
      
      <Box p={18} className="flex-section work-section">
       


        <ExperienceItem
          icon={<FontAwesomeIcon icon={faCloud} size="2x" style={{ marginRight: '5px', marginTop: '-24px' }} />}
          companyName="Klover Cloud"
          jobTitle="Software Test Engineer"
          location="Dhaka,Bangladesh"
          date="Nov 2021 - Nov 2022"
          description=""
        />

        <ExperienceItem
          icon={<FontAwesomeIcon icon={faNotesMedical} size="2x" style={{ marginRight: '5px', marginTop: '-24px' }} />}
          companyName="Shastho Limited"
          jobTitle="Software QA Engineer"
          location="Dhaka,Bangladesh"
          date="Jul'20 - June'21"
          description=""
        />
      </Box>

      {/* Vertical Divider */}
      <Box className="divider"></Box>

      {/* Education Section */}
      <Box p={18} className="flex-section education-section">
        

        <ExperienceItem
          icon={<FontAwesomeIcon icon={faGraduationCap} size="2x" style={{ marginRight: '5px', marginTop: '-24px' }} />}
          companyName="Brac University"
          jobTitle="BSc in Computer Science" 
          location="Dhaka,Bangladesh"
          date="June'17 - December'21"
          description=""
        />
      </Box>
    </Box>
  );
};

export default Experience;
