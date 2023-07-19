import React from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';

const SkillCard = () => {
    return (
        <>
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
                                color: 'white',
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
                                        {["Java", "python basics", "Html", "CSS", "JS", "React JS", "REDUX", "NODEJS", "mongoDB", "RestAPI", "Junit"].map((item) => (
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
                                color: 'white',
                                position: 'relative',
                                overflow: 'auto',
                                maxHeight: 300,
                                '& ul': { padding: 0 },
                            }}
                            subheader={<li />}
                        >
                            {["For Code Management"].map((sectionId) => (
                                <li key={`section-${sectionId}`}>
                                    <ul sx={{ marginLeft: '4rem' }}>
                                        <ListSubheader>{`${sectionId}`}</ListSubheader>
                                        {["GIT", "GitHub"].map((item) => (
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
        </>
    )
}

export default SkillCard