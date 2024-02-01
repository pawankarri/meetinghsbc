import { Box, Card, Grid } from '@mui/material'
import React from 'react'
import LeftChart from './LeftChart'
import MiddleChart from './MiddleChart'
import NotStrated from './NotStrated'

export default function Charts() {
  return (
    <Grid container sx={{display:'flex',justifyContent:'space-between',width:'60vw',marginLeft:'-200px'}}>
        <Grid item md={3} >
         <LeftChart/>
        </Grid>
        <Grid item md={5}>
            <MiddleChart/>
            </Grid>
            <Grid item md={3}>
            <Card sx={{width:'300px'}}>
            <Box sx={{backgroundColor:'#F3E9E9'}}>Tasks</Box>
            <NotStrated/>
            </Card>
            </Grid>

    </Grid>
  )
}
