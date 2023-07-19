import React from 'react'

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Experience = () => {
    return (
        <div style={{marginTop:'1rem'}}> 
            <Accordion>
                <AccordionSummary
                    sx={{backgroundColor:'black',color:'white'}}
                    expandIcon={<ExpandMoreIcon sx={{color:'white'}} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Samsung - Software R&D Engineer(since 2022)</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        I am working @ samsung R&D Institute india As a Software engineer since 2022.
                        worked for samsung native apps feature development,bug fixes and  written multiple junit test cases.
                        I have developed website for samsung Internal development
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{marginTop:'1rem'}}>
                <AccordionSummary
                     sx={{backgroundColor:'black',color:'white'}}
                    expandIcon={<ExpandMoreIcon sx={{color:'white'}}  />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Samsung - Intern (Feb 2022 - Jul 2022) </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        I have done my internship in samsung R&D Institute india. During my internship i have worked in automation scripts using BRITY RPA and selenium. 
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{marginTop:'1rem'}}>
                <AccordionSummary
                     sx={{backgroundColor:'black',color:'white'}}
                    expandIcon={<ExpandMoreIcon sx={{color:'white'}}  />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography>India smart grid forum (VIT chapter) - Board Member(2019-2021)</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Have conducted and organized many events in india smart grid forum VIT university vellore 
                    </Typography>

                </AccordionDetails>
            </Accordion>
            <Accordion sx={{marginTop:'1rem'}}>
                <AccordionSummary
                     sx={{backgroundColor:'black',color:'white'}}
                    expandIcon={<ExpandMoreIcon sx={{color:'white'}}  />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography>Education - B.Tech(EEE) @ VIT vellore (2018-2022)</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        I have completed my B.tech in Electrical and Electonincs Engineering with the perncentile of 86.8 . During my college days i had an course  called java programming as mandatory subject due to the interest that i had in that object , i have started to explore in software domain
                    </Typography>

                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default Experience