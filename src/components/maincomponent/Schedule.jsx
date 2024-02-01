import { Card, Grid} from '@mui/material'
import React from 'react'
import CalendarComponent from './CalenderRight'
import ScheduleLeft from './ScheduleLeft'

export default function Schedule() {
  return (
    <Card sx={{marginLeft:'-250px'}}>
        <Grid container>
            <Grid item md={8} >
<CalendarComponent/>
            </Grid>
            <Grid item md={3} >
                <ScheduleLeft/>
            </Grid>
        </Grid>
    </Card>
  )
}
