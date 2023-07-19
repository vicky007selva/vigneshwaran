import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Paper from '@mui/material/Paper';

import { Box} from "@mui/material";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_m48vktv', 'template_cnt2p97', form.current, 'X1KKN20AhRMYO-dhJ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <Paper variant="outlined" 
    square 
    sx={{margin:'auto',
    maxWidth:'50%',
    display:'flex',
    flexDirection:'row', flexWrap:'wrap',
    justifyContent:'center',
     alignItems:'center',
     border: '5px solid',
     position: 'absolute',
     top: '50%',
     left: '50%',
     transform: 'translate(-50%, -50%)',
     backgroundColor:'#192030',
     minWidth:'50%',
     minHeight:'50%',
     gap:'1rem'
     }}
    >
    <Box sx={{fontSize:'1.5rem',alignSelf:'flex-end',color:'#a42ec8'}}> CONTACT ME</Box>
    
  
    <form style={{display:'flex', flexDirection:'column',
    justifyContent:'space-between',
    color:'white',marginLeft:'1rem',width:'80%', height:'20%',gap:'1rem'}} ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input style={{width:'100%'}} type="text" name="user_name" />
      <label>Email</label>
      <input style={{width:'100%'}} type="email" name="user_email" />
      <label>Message</label>
      <textarea style={{width:'100%',height:'40%'}} name="message" />
      <input style={{width:'50%'}} type="submit" value="Send" />
    </form>
  
   
    </Paper>
  )
}

export default Contact