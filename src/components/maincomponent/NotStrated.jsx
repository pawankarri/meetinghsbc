import { Box, Card, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material'
import React from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
export default function NotStrated() {
  return (
   <Card sx={{width:'300px'}}>
    <Box >
     <Box sx={{display:'flex',justifyContent:'space-between', marginBottom:'10px'}}>
        <Typography variant='subtitle2' sx={{backgroundColor:'#EDD4D4'}}>Awaiting Details</Typography>
         <MoreHorizIcon/>
     </Box>
     <Typography color={'green'}>WSO2 DEVELOPMENT</Typography>

      <RadioGroup sx={{marginBottom:'20px'}} 
       defaultValue="female"
      >
      <FormControlLabel value={'CR-12218_TPA Inttegration at upfront dgsdgsdfg'} control={<Radio />} label="CR-12218_TPA Inttegration at upfront dgsdgsdfg" />
      <FormControlLabel value={'Swagger Created'} control={<Radio />} label="Swagger Created" />
      <FormControlLabel value={'Validation done'} control={<Radio />} label="Validation done" />
      <FormControlLabel value={'Unit Testing Done'} control={<Radio />} label="Unit Testing Done" />
    </RadioGroup>

    <Box sx={{display:'flex'}}>
      <AttachFileIcon/>
      <Typography sx={{marginRight:'50px'}}>1</Typography>
      <CheckCircleOutlineIcon/>
      <Typography sx={{marginLeft:'10px'}}>0 / 3</Typography>
    </Box>
    <hr style={{borderBottom: 1, borderColor: 'divider',marginLeft:'-10px'}}/>
    <Box sx={{display:'flex',justifyContent:'space-between'}}>
      <Box sx={{display:'flex'}}>
      <FolderOpenIcon fontSize='large'/>
      <Typography sx={{marginLeft:'10px',marginTop:'7px'}}>Due</Typography>
      </Box>
       <Box sx={{display:'flex', marginRight:'10px'}}>
        <PersonAddAltIcon fontSize='large' sx={{marginRight:'10px'}}/>
      <Box sx={{height:'30px',width:'30px',backgroundColor:'#927D8D',borderRadius:'50%'}}>
        <Typography  align='center' color={'white'} padding={'12%'}>UU</Typography>
    </Box>
    </Box> 
    </Box>
    </Box>
   </Card>
  )
}
