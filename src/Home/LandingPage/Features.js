import React from 'react'
import { Container, Box, Typography, Button } from "@mui/material"
import { makeStyles } from "@mui/styles"

import { Grid } from '@mui/material'


///MY FILES
import Features from './Components/FeatureCard'
import { FeatureData } from "./Data/Features"



const useStyles = makeStyles((theme) => ({

    BodyHolder: {

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '3rem 2rem',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'poppins',

    },



    contentHolder: {

        display: 'flex',
        justifyContent: 'space-evenly',

    },

    featureHolder: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'


    },


    title: {
        fontSize: '4rem',
        fontWeight: 'bolder',
        fontFamily: 'poppins',
        display: 'flex',
        justifyContent: 'center',
        margin: '7rem 0rem',
        textAlign: 'center',
        color: '#9c27b0',

        [theme.breakpoints.down('sm')]: {

            fontSize: '2.9rem',
            textAlign: 'center',
            fontWeight: '1rem',
        }
    }



}))

function Index()
{
    const classes = useStyles()
    return (
        <Box className={classes.BodyHolder}>

            <Container sx={{ py: 5 }} style={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '5rem' }} >
                <Box className={classes.title} >
                    With All The Features You Need
                </Box>
            </Container>


            <Box md={12}>
                <Grid container spacing={10} className={classes.featureHolder} >

                    {FeatureData.map((text) => (

                        <Grid item xs={12} sm={12} md={6} lg={3} >
                            <Features title={text.title} dis={text.dis} svg={text.svg} />
                        </Grid>


                    ))}


                </Grid>
            </Box>


        </Box >
    )
}

export default Index
