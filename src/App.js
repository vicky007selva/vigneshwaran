
// Project import
import CommonAppbar from "./components/CommonAppbar";
import './App.css'
import SkillCard from "./components/SkillCard";
import softimage from "./craiyon_184046_software_developer.png"

//material ui import
import { Box, colors } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';




function App() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
   
    <>
     {console.log(matches)}
      <CommonAppbar />
      <Box sx={{ display: 'flex', flexDirection: `${matches?'column':'row'}`, gap: '4rem', width: '100%', maxHeight: '100%' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: "#182535", marginTop: '1rem', padding: '5%', }} width={matches?'100%':'50%'} height='50%' >
          <h1 style={{ color: '#9734b5', fontWeight: 'bold' }}>
            <span>Hey </span>I am <span>Vigneshwaran</span>
          </h1>
          <h3 style={{ color: 'white' }}>Welcome to my software development portfolio! </h3>
          <h4 style={{ color: '#f0fcfa' }}> As a passionate and dedicated
            software developer
            I invite you to embark on a journey through
            the digital landscapes I have crafted with
            lines of code and an insatiable drive for innovation.
          </h4>

          <SkillCard/>



        </Box>
        <Box sx={{ marginTop: '1rem', width:`${matches?'100%':'50%'}`, height: '50%' ,justifyContent:'center' }}>
          <Avatar id="img"
            // src="/public/craiyon_184046_software_developer.png"
            alt="Remy Sharp"
            src={softimage}
            sx={{ width: '100%', height: '100%' }}
          >

          </Avatar>

          <h1>what can i do 🤔?</h1>
          <br />
          <h2>Well . i do know how to develop software products using reactJS nodeJS mongoDB and muchmore...</h2>
          <h4 style={{ marginLeft: '3rem', color: '#9734b5' }}>Let's join and make somechange in the world... 🤘</h4>
        </Box>
      </Box >
    </>
  );
}

export default App;
