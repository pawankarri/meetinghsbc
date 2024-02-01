import { Box, Card } from '@mui/material'
import { PieChart } from '@mui/x-charts'
import React from 'react'

export default function LeftChart() {
    const data2 = [
        { label: 'Not Started', value: 1 },
        { label: 'In progress', value: 0 },
        { label: 'Late', value: 0 },
        { label: 'Completed', value: 30 },
      ];

      const colors =[ '#23B031','#4B544C','#A66C45','#4555A6']
  return (
    <Card>
        <Box sx={{backgroundColor:'#F3E9E9'}}>Status</Box>
       <PieChart
       series={[
        {
          data: data2,
          cx: 100,
          cy: 100,
          innerRadius: 90,
          outerRadius: 80,
          colors:colors
        },
      ]}
     
      height={400}
      
      slotProps={{
        
        legend: {
            direction: 'column',
            position: { vertical: 'bottom', horizontal: 'middle' },
            padding: 10,
          },
         
      }}
      
    > <text
    aria-orientation='horizontal'
    x="50%"
    y="25%"
    textAnchor='middle'
    fontSize={"20px"}
      >
        1 
        Tasks left
      </text></PieChart>
    </Card>
  )
}
