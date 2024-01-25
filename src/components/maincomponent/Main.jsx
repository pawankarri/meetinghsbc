import { Box, Tab, Tabs, Typography } from '@mui/material'
import React from 'react'
import GridData from './GridData';
import Board from './Board';

export default function Main() {
    function CustomTabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box sx={{ p: 3 }}>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }
      function a11yProps(index) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
      }
      const [value, setValue] = React.useState(0);

      const handleChange = (event, newValue) => {
        setValue(newValue);
      };
  return (
    <Box sx={{display:'flex'}}>
   <Box sx={{display:'flex'}}>
    <Box sx={{height:'50px',width:'50px',backgroundColor:'grey'}}>
        <Typography variant='h5' align='center' color={'white'} >UU</Typography>
    </Box>
    <Typography variant='subtitle1' textTransform={'capitalize'} display={'block'} sx={{marginLeft:'15px'}}>assigned to me</Typography>
   </Box>
    <Box sx={{marginLeft:'10px'}}>
    <Box >
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        <Tab label="Grid" {...a11yProps(0)} />
        <Tab label="Boards" {...a11yProps(1)} />
        <Tab label="Charts" {...a11yProps(2)} />
        <Tab label="Schedule" {...a11yProps(3)} />
      </Tabs>
    </Box>
    <CustomTabPanel value={value} index={0} >
     <GridData/>
    </CustomTabPanel>
    <CustomTabPanel value={value} index={1} >
     <Board/>
    </CustomTabPanel>
    <CustomTabPanel value={value} index={2}>
      Item Three
    </CustomTabPanel>
    <CustomTabPanel value={value} index={3}>
      Item Four
    </CustomTabPanel>
  </Box>
  </Box>
  )
}
