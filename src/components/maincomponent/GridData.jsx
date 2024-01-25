import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React from 'react'

export default function GridData() {
    const data = [
        {id:'1', title: 'CR-12218_TPA Integration at Upfront System', assignment: 'useruser', startDate: '1/23/2024', dueDate: '', plan: 'WSO2 DEVELOPMENT' },
        { id:'2',title: 'CR-12218_TPA Integration at Upfront System', assignment: 'useruser', startDate: '1/23/2024', dueDate: '', plan: 'WSO2 DEVELOPMENT' },
        { id:'3',title: 'CR-12218_TPA Integration at Upfront System', assignment: 'useruser', startDate: '1/23/2024', dueDate: '', plan: 'WSO2 DEVELOPMENT' },
        {id:'4', title: 'CR-12218_TPA Integration at Upfront System', assignment: 'useruser', startDate: '1/23/2024', dueDate: '', plan: 'WSO2 DEVELOPMENT' },
        {id:'5', title: 'CR-12218_TPA Integration at Upfront System', assignment: 'useruser', startDate: '1/23/2024', dueDate: '', plan: 'WSO2 DEVELOPMENT' },
        { id:'6',title: 'CR-12218_TPA Integration at Upfront System', assignment: 'useruser', startDate: '1/23/2024', dueDate: '', plan: 'WSO2 DEVELOPMENT' },
        {id:'7', title: 'CR-12218_TPA Integration at Upfront System', assignment: 'useruser', startDate: '1/23/2024', dueDate: '', plan: 'WSO2 DEVELOPMENT' },
        {id:'8', title: 'CR-12218_TPA Integration at Upfront System', assignment: 'useruser', startDate: '1/23/2024', dueDate: '', plan: 'WSO2 DEVELOPMENT' },
        {id:'9', title: 'CR-12218_TPA Integration at Upfront System', assignment: 'useruser', startDate: '1/23/2024', dueDate: '', plan: 'WSO2 DEVELOPMENT' },
        {id:'10', title: 'CR-12218_TPA Integration at Upfront System', assignment: 'useruser', startDate: '1/23/2024', dueDate: '', plan: 'WSO2 DEVELOPMENT' },
        {id:'11', title: 'CR-12218_TPA Integration at Upfront System', assignment: 'useruser', startDate: '1/23/2024', dueDate: '', plan: 'WSO2 DEVELOPMENT' },
        { id:'12',title: 'CR-12218_TPA Integration at Upfront System', assignment: 'useruser', startDate: '1/23/2024', dueDate: '', plan: 'WSO2 DEVELOPMENT' },
        {id:'13', title: 'CR-12218_TPA Integration at Upfront System', assignment: 'useruser', startDate: '1/23/2024', dueDate: '', plan: 'WSO2 DEVELOPMENT' },
        {id:'14', title: 'CR-12218_TPA Integration at Upfront System', assignment: 'useruser', startDate: '1/23/2024', dueDate: '', plan: 'WSO2 DEVELOPMENT' },
      ];



      const columns = [
       
        {
          field: 'title',
          headerName: 'Title',
          width: 350,
          editable: true,
        },
        {
          field: 'assignment',
          headerName: 'Assignment',
          width: 150,
          editable: true,
        },
        {
          field: 'startDate',
          headerName: 'Start Date',
          type: 'number',
          width: 100,
          editable: true,
        },
        {
            field: 'dueDate',
            headerName: 'Due Date',
            type: 'number',
            width: 100,
            editable: true,
          },
        {
          field: 'plan',
          headerName: 'Plan',
          sortable: false,
          width: 300,
        },
      ];
      
  return (
    <Box sx={{marginLeft:'-250px'}} >
    <DataGrid
      rows={data}
      columns={columns}
     
      disableRowSelectionOnClick
    />
  </Box>
  )
}
