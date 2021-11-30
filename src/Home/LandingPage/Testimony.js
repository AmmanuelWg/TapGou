import React from 'react'
import { Container, Box, Typography, Button } from "@mui/material"
import { makeStyles } from "@mui/styles"



// MY FILEs
import Testimony from './Components/Testitmony'
import { Test } from "./Data/Test"



const useStyles = makeStyles((theme) => ({

    BodyHolder: {

        display: 'flex',
        margin: '3rem 2rem',
        alignItems: 'center',
        fontFamily: 'poppins',


        [theme.breakpoints.down('sm')]: {

            flexDirection: 'column',
            margin: '25rem 0rem'
        }


    },



    contentHolder: {

        display: 'flex',
        justifyContent: 'space-evenly',
        flexDirection: 'row'


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
}))

function Index()
{
    const classes = useStyles()
    return (
        <Box className={classes.BodyHolder} >


            {Test.map((text) => (

                <Testimony name={text.Name} word={text.Word} p={text.Posistion} />

            ))}


        </Box>
    )
}

export default Index
