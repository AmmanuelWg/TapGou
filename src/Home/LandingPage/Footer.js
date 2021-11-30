import React from 'react'
import { Container, Box, Typography, Button } from "@mui/material"
import { makeStyles } from "@mui/styles"


///img
import Tv from "./Image/tv.svg"
import pplwalk from "./Image/pplwalk.svg"


const useStyles = makeStyles((theme) => ({

    BodyHolder: {

        display: 'flex',
        alignItems: 'center',
        fontFamily: 'poppins',
        justifyContent: 'center',
        backgroundColor: '#f7f7f7'

    },






    btnHolder: {
        width: '100',
        margin: '3rem 0rem',



        [theme.breakpoints.down('sm')]: {
            width: '100%',
            margin: '3rem 0rem',
            display: 'flex',
            justifyContent: 'center'
        }
    },


}))






function Index()
{

    const classes = useStyles()
    return (
        <Box className={classes.BodyHolder}>

            <Box className={classes.btnHolder} >
                <Button variant="outlined" color="secondary">
                    Contact Us
                </Button>
            </Box>

        </Box>
    )
}

export default Index

