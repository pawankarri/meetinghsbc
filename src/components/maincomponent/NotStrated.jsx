import { Box, Card, Typography } from '@mui/material'
import React from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
export default function NotStrated() {
  return (
   <Card>
    <Box >
     <Box sx={{display:'flex',justifyContent:'space-between',}}>
        <Typography variant='subtitle2' sx={{backgroundColor:'#EDD4D4'}}>Awaiting Details</Typography>
         <MoreHorizIcon/>
     </Box>
     <Typography>WSO2 DEVELOPMENT</Typography>
     
    </Box>
   </Card>
  )
}
