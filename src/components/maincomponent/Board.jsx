import { Box, Grid } from '@mui/material'
import React from 'react'
import NotStrated from './NotStrated'

export default function Board() {
  return (
    <Box sx={{width:'60vw',display:'flex',justifyContent:'space-between',marginLeft:'-200px'}}>
        <Box >
            Not Started
            <NotStrated/>
        </Box>
        <Box >
            In progress
        </Box>
        <Box >
            Completed
        </Box>
         
    </Box>
  )
}
