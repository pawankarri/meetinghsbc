import { Box, Card, Typography } from '@mui/material'
import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
export default function ScheduleLeft() {
  return (
    <Card sx={{marginLeft:'30px',width:'300px',height:'500px'}}>
    <Typography variant='h6' sx={{backgroundColor:'#e6e6e6'}}>Unscheduled tasks</Typography> 
    <Box sx={{display:'flex',justifyContent:'space-between',marginTop:'20px'}}>
    <Typography>Not started</Typography>
    <KeyboardArrowDownIcon/>
    </Box> 
    <Box sx={{display:'flex',justifyContent:'space-between',marginTop:'20px'}}>
    <Typography>In progress</Typography>
    <KeyboardArrowDownIcon/>
    </Box>
    <Box sx={{display:'flex',justifyContent:'space-between',marginTop:'20px'}}>
    <Typography>Completed</Typography>
    <KeyboardArrowUpIcon/>
    </Box>
  </Card>
  )
}
