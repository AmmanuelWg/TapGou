import React from 'react'
import { Container, Box, Typography, Button } from "@mui/material"
import { makeStyles } from "@mui/styles"

import ReactPlayer from 'react-player'



const useStyles = makeStyles({

    BodyHolder: {

        display: 'flex',
        height: '70vh',
        margin: '3rem 2rem',
        alignItems: 'center',
        fontFamily: 'poppins',
        justifyContent: 'center'



    },



    contentHolder: {

        display: 'flex',
        justifyContent: 'space-evenly',


    },

    btnHolder: {
        width: '33%'
    },

    title: {


        fontSize: '8rem'
    },

    imgCon: {

        marginTop: '5rem'
    }
})

function Index()
{
    const classes = useStyles()
    return (
        <Box className={classes.BodyHolder}>

            <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />

        </Box>
    )
}

export default Index






