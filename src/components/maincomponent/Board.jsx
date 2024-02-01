import { Box, } from '@mui/material'
import React from 'react'
import NotStrated from './NotStrated'
import Draggable from 'react-draggable'

export default function Board() {
  return (
    <Box sx={{width:'60vw',display:'flex',justifyContent:'space-between',marginLeft:'-200px'}}>
        <Box >
            Not Started
            <Draggable>
            <NotStrated/>
            </Draggable>
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
