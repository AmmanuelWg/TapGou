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
        margin: '4rem'


    },


    contentHolder: {

        display: 'flex',
        justifyContent: 'space-evenly',
        padding: '5rem',



        [theme.breakpoints.down('md')]: {
            width: '100%'
        },

        [theme.breakpoints.down('sm')]: {
            width: '100%',

        },


    },





    btnHolder: {
        width: '33%',
        backgroundColor: [theme.palette.primary.main],



        [theme.breakpoints.down('sm')]: {
            width: '100%',
            margin: '0px 3px'
        }
    },





    t: {

        fontSize: '4rem',
        fontWeight: 'Bold',
        fontFamily: 'poppins',




        [theme.breakpoints.down('sm')]: {

            fontSize: '3rem',
            textAlign: 'center',
            fontWeight: '1rem',
        }
    },



    pragraph: {

        fontSize: '20px',
        fontFamily: 'poppins',
        color: 'black',


        [theme.breakpoints.down('sm')]: {

            fontSize: '15px',
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

    svg: {
        width: '100%',
        height: '100%',
        objectFit: 'contain',

        [theme.breakpoints.down('md')]: {
            display: 'none'
        }

    }
}))






function Index()
{
    const classes = useStyles()
    return (
        <Box className={classes.BodyHolder}>
            <Container className={classes.contentHolder}>
                <Box className={classes.t}>
                    Welcome To The Best Front Desk Software.
                </Box>

                <Box sx={{ my: 7 }} className={classes.pragraph} >
                    Lorem t. Non voluptatem nulla erunt corporis! Iste earum doloremque ab magni incidunt consequuntur, qui, explicabo quasi neque itaque inventore delectus necessitatibus quia!
                </Box>
                <Box className={classes.btnHolder}>
                    <Button variant="contained" fullWidth color="secondary" >
                        Sign Up Now
                    </Button>
                </Box>
            </Container>




            <Box className={classes.imgCon} >
                {/* <img src={Tv} alt="tv" /> */}
                <img src={pplwalk} alt="tv" className={classes.svg} />
            </Box>


        </Box>
    )
}

export default Index

