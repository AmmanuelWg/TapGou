import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Box'
import Stack from '@mui/material/Stack';
import { makeStyles } from "@mui/styles"




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

        fontSize: '4rem',
        fontWeight: 'bolder',
        fontFamily: 'poppins',
        display: 'flex',
        justifyContent: 'center',
        margin: '7rem 0rem',

        [theme.breakpoints.down('sm')]: {

            fontSize: '5rem',
            textAlign: 'center',
            fontWeight: '1rem',
        }
    },



    paragraph: {

        fontSize: '1.5rem',
        fontFamily: 'poppins',
        textAlign: 'center',
        textAlign: 'center',


        [theme.breakpoints.down('sm')]: {

            fontSize: '2rem',
            color: "black",
            textAlign: 'center',
        }
    },







}))











export default function Testitmony({ name, word, p })
{

    const classes = useStyles()
    return (
        <Box sx={{ width: '100%', mx: 1 }} sm={12}>

            <CardContent>



                <Box className={classes.paragraph}>
                    {word}
                </Box>
                <Box>

                    <Typography gutterBottom variant="h5" component="div" style={{ padding: '3rem 0rem' }} style={{ textAlign: 'center', padding: '2rem 0rem', fontWeight: 'bold' }}>
                        {name}

                    </Typography>

                    <Typography style={{ textAlign: 'center' }} variant="body2" color="text.secondary">
                        {p}
                    </Typography>


                </Box>
            </CardContent>

            <CardActions>

            </CardActions>
        </Box >
    );
}
