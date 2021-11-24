import React from 'react'
import { Container, CssBaseline, Paper, Grid, Box } from '@mui/material'

import Form from './Components/Form'
import Output from "./Components/Output"


function index()
{


    return (

        <Box sx={{ height: '80vh', mt: 10, overflow: 'hidden' }}>
            <Paper style={{ height: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                <Form />
                <Output />
            </Paper>
        </Box>


    )
}
export default index
