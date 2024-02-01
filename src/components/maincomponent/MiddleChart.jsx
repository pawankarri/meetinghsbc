import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { Box, Card } from '@mui/material';

const uData = [30,0,0,0,0];
const xLabels = [
  'Completed',
];

export default function MiddleChart() {
  return (
    <Card>
          <Box sx={{backgroundColor:'#F3E9E9'}}>Priority</Box>
    <BarChart
      height={400}
      series={[
        { data: uData, id: 'uvId' },
      ]}
      xAxis={[{ data: xLabels, scaleType: 'band' }]}
    />
    </Card>
  );
}