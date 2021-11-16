import React from 'react'
import { Container, CssBaseline, Paper, Grid, Box } from '@mui/material'

import Charts from './Components/Charts'
import Calander from "./Components/Calander"



function CheckInPage()
{


    return (

        <Box sx={{ height: '80vh', mt: 10, overflow: 'hidden' }}>
            <Paper style={{ display: 'flex', height: '100%', flexDirection: 'column' }}>
                <Calander />
                <Charts />
            </Paper>
        </Box>


    )
}
export default CheckInPage



