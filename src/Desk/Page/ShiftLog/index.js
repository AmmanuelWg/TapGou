import React from 'react'
import { Container, CssBaseline, Paper, Grid, Box } from '@mui/material'

import Form from './Components/Form'
import Output from "./Components/Output"
import { makeStyles } from '@mui/styles';







const useStyles = makeStyles({

    containerScroll: {
        overflow: 'scroll'
    }



})
function CheckInPage()
{


    const classes = useStyles()


    return (

        <Box sx={{ height: '80vh', mt: 10, overflow: 'hidden' }}>
            <Paper style={{ display: 'flex', height: '100%' }}>
                <Container style={{ display: 'flex', width: '100%' }}>

                    <Form style={{ flex: 1, margin: "0rem 2rem" }} sm={12} />
                    <Output style={{ flex: 3, width: '100%' }} sm={12} />

                </Container>


            </Paper>


        </Box >


    )
}
export default CheckInPage
