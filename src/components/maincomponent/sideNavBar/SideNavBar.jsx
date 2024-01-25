import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { BorderRight } from '@mui/icons-material';
export default function SideNavBar() {
    const data=[
        {icon:<AddIcon/>, tt:'New Plan'},
        {icon:<HomeIcon/>, tt:'Hub'},
        {icon:<PersonIcon/>, tt:'Assigned to me'},
        
    ]
  return (
   <Box  >
    <DensityMediumIcon fontSize='medium' sx={{marginTop:'5px',marginLeft:'10px',}}/>
    <hr style={{borderBottom: 1, borderColor: 'divider',width:'80%' ,marginLeft:'-10px'}}/>

    <Box >
    {data.map(item =>
  <Box sx={{display:'flex',justifyContent:'space-between',marginRight:'100px',marginBottom:'15px',marginLeft:'10px'}}  key={item.id}>
    <Box >{item.icon}</Box >
    <Box ><Typography>{item.tt}</Typography></Box >
  </Box >
)}


    </Box>

    <Box sx={{display:'flex',marginBottom:'15px'}}>
    <KeyboardArrowDownIcon/>
    <Typography variant='subtitle1' display={'inline'} >Pinned</Typography>
    </Box> 
    <Box sx={{display:'flex',marginBottom:'15px'}}>
    <KeyboardArrowDownIcon/>
    <Typography variant='subtitle1' display={'inline'} >All</Typography>
    </Box>
    <Box sx={{display:'flex',marginBottom:'15px',marginLeft:'10px'}}>
    <Avatar sx={{marginRight:'20px'}}/>
    <Typography variant='subtitle1' display={'inline'} >WSO2 DEVELOPMENT</Typography>
    </Box>
    <Box sx={{display:'flex',marginBottom:'15px',marginLeft:'10px'}}>
    <Avatar sx={{marginRight:'20px'}}/>
    <Box sx={{display:'flex',flexDirection:'column'}}>
    <Typography variant='subtitle1' display={'inline'} >WSO2 Issues</Typography>
    <Typography variant='subtitle1' display={'inline'} >WSO2 Support</Typography>
    </Box>
    
    
    </Box>
    <Box sx={{display:'flex'}}>
    <Typography variant='h6'>Show More</Typography>
    </Box>

   </Box>
   
  )
}
