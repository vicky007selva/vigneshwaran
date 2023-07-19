import React from 'react'

// project import
import './Aboutme.css'
import softimage from "./craiyon_184046_software_developer.png"

// material ui import
import { Box } from "@mui/material";

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Avatar from '@mui/material/Avatar';

const Aboutme = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ marginTop: '1rem', width: `${matches ? '100%' : '50%'}`, height: '50%', justifyContent: 'center' }}>
    <Avatar id="img"
      // src="/public/craiyon_184046_software_developer.png"
      alt="Remy Sharp"
      src={softimage}
      sx={{ width: '100%', height: '100%' }}
    >

    </Avatar>

    <h1 data-hover="I can do CODE 🙃">what can i do 🤔?</h1>
    <h2 style={{ fontSize: '2rem' }}>Well . i do know how to develop software products using reactJS nodeJS mongoDB and muchmore...</h2>
    <h2 style={{ marginLeft: '3rem', color: '#9734b5' }}>Let's join and make some change in the world... 🤘</h2>
    <br />

    <h2 className='quote' data-hover="Success................................👏" style={{ marginLeft: '8rem', color: 'black' }}>While(!(succeed == try()))</h2>
  </Box>
  )
}

export default Aboutme