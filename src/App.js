
// Project import
import CommonAppbar from "./components/CommonAppbar";
import './App.css'

//material ui import
import { Box, colors } from "@mui/material";
import Avatar from '@mui/material/Avatar';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';


function App() {


  return (
    <>
      <CommonAppbar />
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: '4rem', width: '100%', height: '50%' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: "#182535", marginTop: '1rem', padding: '5%', paddingBottom: '50%' }} width='50%' height='50%' >
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

          <Card sx={{ marginTop: '2rem', Width: '50%' }}>
            <CardActionArea>
              {/* <CardMedia
                component="img"
                height="140"
                image="/"
                alt=""
              /> */}
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  SKILLS
                </Typography>
        
                <List
                  sx={{
                    width: '100%',
                    maxWidth: 360,
                    bgcolor: 'black',
                    color:'white',
                    position: 'relative',
                    overflow: 'auto',
                    maxHeight: 300,
                    '& ul': { padding: 0 },
                  }}
                  subheader={<li />}
                >
                  {["For development"].map((sectionId) => (
                    <li key={`section-${sectionId}`}>
                      <ul>
                        <ListSubheader>{`${sectionId}`}</ListSubheader>
                        {["Java" , "python basics" , "Html" , "CSS", "JS", "React JS", "REDUX", "NODEJS", "mongoDB", "RestAPI" ,"Junit"].map((item) => (
                          <ListItem key={`item-${sectionId}-${item}`}>
                            <ListItemText primary={` ${item}`} />
                          </ListItem>
                        ))}
                      </ul>
                    </li>
                  ))}
                </List>
              

                <List
                  sx={{
                    width: '100%',
                    maxWidth: 360,
                    bgcolor: 'black',
                    color:'white',
                    position: 'relative',
                    overflow: 'auto',
                    maxHeight: 300,
                    '& ul': { padding: 0 },
                  }}
                  subheader={<li />}
                >
                  {["For Code Management"].map((sectionId) => (
                    <li key={`section-${sectionId}`}>
                      <ul sx={{marginLeft:'4rem'}}>
                        <ListSubheader>{`${sectionId}`}</ListSubheader>
                        {["GIT" , "GitHub"].map((item) => (
                          <ListItem key={`item-${sectionId}-${item}`}>
                            <ListItemText primary={` ${item}`} />
                          </ListItem>
                        ))}
                      </ul>
                    </li>
                  ))}
                </List>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card sx={{ marginTop: '2rem', Width: '50%' }}>
            <CardActionArea>
              {/* <CardMedia
                component="img"
                height="140"
                image="/"
                alt=""
              /> */}
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  EXPERIENCE
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  I am working @ samsung R&D Institute india As a Software engineer since 2022.
                  worked for samsung native apps feature development,bug fixes and  written multiple junit test cases.
                  I have developed website for samsung Internal development
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>



        </Box>
        <Box sx={{ marginTop: '1rem', width: '50%', height: '50%' }}>
          <Avatar id="img"
            src="/craiyon_184046_software_developer.png"
            alt="Remy Sharp"
            //  src="/20221007_134628.png"
            sx={{ width: '100%', height: '100%' }}
          >

          </Avatar>

          <h1>what can i do 🤔?</h1>
          <br />
          <h2>Well . i do know how to develop software products using reactJS nodeJS mongoDB and muchmore...</h2>
          <h4 style={{ marginLeft: '3rem', color: '#9734b5' }}>Lets join and make somechange in the world... 🤘</h4>
        </Box>
      </Box >
    </>
  );
}

export default App;
