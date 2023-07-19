
// Project import
import CommonAppbar from "./components/CommonAppbar";
import './App.css'
import SkillCard from "./components/SkillCard";

//material ui import
import { Box, colors } from "@mui/material";
import Avatar from '@mui/material/Avatar';




function App() {


  return (
    <>
      <CommonAppbar />
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: '4rem', width: '100%', maxHeight: '50%' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: "#182535", marginTop: '1rem', padding: '5%', }} width='50%' height='50%' >
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
        <Box sx={{ marginTop: '1rem', width: '50%', height: '50%' }}>
          <Avatar id="img"
            src="./craiyon_184046_software_developer.png"
            alt="Remy Sharp"
            //  src="/20221007_134628.png"
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
