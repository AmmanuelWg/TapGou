import React from 'react'
import { Container, CssBaseline, Paper, Grid } from '@mui/material'
import Form from './Components/Form'


function CheckInPage()
{


    return (

        <Paper sx={{ mt: 10 }}>
            <Grid container>
                <Grid item>
                    <Form />

                </Grid>
            </Grid>
        </Paper>


    )
}

export default CheckInPage
