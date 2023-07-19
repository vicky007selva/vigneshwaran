
// Project import

import './App.css'
import SkillCard from "./components/SkillCard";
import Aboutme from "./components/Aboutme/Aboutme";


//material ui import
import { Box } from "@mui/material";


import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';







function App() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (

    <div style={{ backgroundColor: 'white', minwidth: '100%', minheight: '100%', padding: '1rem' }}>

     
      {console.log(matches)}
      <Box sx={{ display: 'flex', flexDirection: `${matches ? 'column' : 'row'}`, gap: '2rem', width: '100%', maxHeight: '100%' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: "#182535", marginTop: '1rem', padding: '5%', }} width={matches ? '100%' : '50%'} height='50%' >
          <h1 style={{ color: '#9734b5', fontWeight: 'bold', fontSize: '5vw' }}>
            <span>Hey </span>I am <span>Vigneshwaran</span>
          </h1>
          <h3 style={{ color: 'white' }}>Welcome to my software development portfolio! </h3>
          <h4 style={{ color: '#f0fcfa' }}> As a passionate and dedicated
            software developer
            I invite you to embark on a journey through
            the digital landscapes I have crafted with
            lines of code and an insatiable drive for innovation.
          </h4>

          <SkillCard />
        </Box>
        <Aboutme/>
      </Box >
     
    </div>
  );
}

export default App;
