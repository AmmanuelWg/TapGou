import React from 'react'
import { makeStyles } from '@mui/styles';
import { Container, Typography, Box } from '@mui/material'

///My files
import QRCode from 'qrcode-react'


const useStyles = makeStyles({

    ////Print able content before print and after 
    holder: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'center'

    },



    border: {
        '@media print': {

            border: '1px solid gray',
            padding: '4rem'

        }
    },

    PrintAble: {

        display: "none",

        '@media print': {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '2rem',
            height: '65%',

        }
    },


    text: {

        '@media print': {
            lineHeight: '200%',
            fontWeight: 'bold'

        }
    },


    qrCodeHolder: {

        display: 'flex',
        justifyContent: 'center',

        '@media print': {
            display: 'flex',
            justifyContent: 'center',

        }
    },

    printCode: {
        '@media print': {
            size: '500',
        }
    },



});






function PrintAbleContent()
{

    const classes = useStyles();

    return (
        <Container className={classes.holder}>


            <Box className={classes.border}>
                <Box className={classes.PrintAble}>
                    <Typography variant="h2" className={classes.text} >
                        <div>WELCOME</div>
                        PLEASE SCAN THE QR CODE BELOW
                        TO CHECK IN.
                    </Typography>

                </Box>

                <Box className={classes.qrCodeHolder}>
                    <QRCode value={`https://tapgou-266b2.firebaseapp.com/Landing`} size="100" />
                </Box>
            </Box>


        </Container>
    )
}

export default PrintAbleContent
