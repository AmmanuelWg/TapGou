import React from 'react'
import { Container, Box, Typography, Button } from "@mui/material"
import { makeStyles } from "@mui/styles"


///img
import Tv from "./Image/tv.svg"
import pplwalk from "./Image/pplwalk.svg"


const useStyles = makeStyles((theme) => ({

    BodyHolder: {

        display: 'flex',
        height: '70vh',
        alignItems: 'center',
        fontFamily: 'poppins',
        flexDirection: 'column'


    },


    contentHolder: {

        display: 'flex',
        justifyContent: 'space-evenly',


        [theme.breakpoints.down('md')]: {
            width: '100%'
        },

        [theme.breakpoints.down('sm')]: {
            width: '100%',

        },


    },





    btnHolder: {
        width: '33%',


        [theme.breakpoints.down('sm')]: {
            width: '100%',
            margin: '0px 3px'
        }
    },





    title: {

        fontSize: '3rem',
        fontWeight: 'bolder',
        fontFamily: 'poppins',
        display: 'flex',
        justifyContent: 'center',
        margin: '7rem 0rem',
        color: '#9c27b0',

        [theme.breakpoints.down('sm')]: {

            fontSize: '3rem',
            textAlign: 'center',
            fontWeight: '1rem',
        }
    },



    paragraph: {

        fontSize: '2rem',
        fontFamily: 'poppins',
        textAlign: 'center',


        [theme.breakpoints.down('sm')]: {

            fontSize: '2rem',
            color: "black",
            textAlign: 'center',
        }
    },




    imgCon: {
        width: "60%",
        height: '70vh',


        [theme.breakpoints.down('md')]: {
            display: 'none'
        }


    },


}))






function Index()
{
    const classes = useStyles()
    return (
        <Box className={classes.BodyHolder}>

            <Container >
                <Box className={classes.title}>
                    Why Us?
                </Box>
            </Container>


            <Container className={classes.contentHolder}>

                <Box className={classes.paragraph}>
                    Our customers choose us because we provide leading technology, deliver unmatched services and training, and offer some of the best value in the industry, And we just keep it simple.
                </Box>
            </Container>

        </Box>
    )
}

export default Index

