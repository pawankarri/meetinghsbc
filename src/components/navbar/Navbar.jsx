import { Avatar, Box, Card, Typography } from '@mui/material'
import React from 'react'
import AppsIcon from '@mui/icons-material/Apps';
import canara from '../images/canara_logo (1).png'
import DiamondIcon from '@mui/icons-material/Diamond';
import SettingsIcon from '@mui/icons-material/Settings';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
export default function Navbar() {
  return (
   <Card sx={{height:'15%',backgroundColor:'white'}} elevation={0}>
    <Box sx={{display:'flex'}}>
        <AppsIcon fontSize='large'sx={{marginTop:'20px'}}/>
        <img src={canara} alt='nnnn' style={{marginLeft:'10px'}}/>
        <Typography variant='h6' display={'block'} sx={{marginLeft:'60px',marginTop:'20px'}}>Planner</Typography>
        <Box sx={{display:'flex',marginLeft:'630px'}}>
            <Box sx={{display:'flex',marginTop:'20px'}}>  
            <DiamondIcon/>
      <Typography variant='subtitle2'>Try Project</Typography>
      <SettingsIcon sx={{marginLeft:'10px'}}/>
      <QuestionMarkIcon sx={{marginLeft:'20px'}}/>
      <Typography variant='subtitle2' sx={{marginLeft:'30px'}} textTransform={'uppercase'} display={'block'}>useruser</Typography>
      <Avatar sx={{marginLeft:'10px',marginTop:'-10px'}}/>
      </Box>
    
    </Box>
    </Box>
   </Card>
  )
}
