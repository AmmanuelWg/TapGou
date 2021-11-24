import React from 'react'
import { Container, CssBaseline, Paper, Grid, Box } from '@mui/material'

import Form from './Components/Form'
import Output from "./Components/Output"


function CheckInPage()
{


    return (

        <Box sx={{ height: '80vh', mt: 10, overflow: 'hidden' }}>
            <Paper style={{ display: 'flex', height: '100%' }}>
                <Form />
                <Output />
            </Paper>
        </Box>


    )
}
export default CheckInPage
