
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Outlet } from 'react-router';
import { makeStyles } from '@mui/styles';
import { collapseClasses } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Button from "@mui/material/Button"


import NavLocal from "./components/NavLocal"
import OpenMenu from "./components/OpenMenu"



const useStyles = makeStyles({

    phoneMeanu: {
        display: 'none',
        '@media screen and (max-width: 600px)': {
            display: 'flex'
        }
    },


    logBtn: {


        display: "flex",
        width: '30%',
        justifyContent: 'space-evenly',

        '@media screen and (max-width: 600px)': {
            display: 'none',
        }
    },

    navLocal: {

        display: 'flex',
        justifyContent: 'flex-start',
        minWidth: '70%',

        '@media screen and (max-width: 600px)': {
            display: 'none',
        }
    }



})



function ElevationScroll(props)
{
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default function ElevateAppBar(props)
{

    const classes = useStyles()
    return (
        <React.Fragment>
            <CssBaseline />
            <ElevationScroll {...props}>



                <AppBar style={{ backgroundColor: 'white', padding: '4px' }}  >
                    <CssBaseline />

                    <Toolbar>

                        <Typography
                            variant="h6"
                            component="div"
                            sx={{
                                flexGrow: 1, color: 'black', fontWeight: 'bold', color: '#9c27b0'
                            }}


                        >
                            TapGou
                        </Typography>

                        <Box className={classes.navLocal}>
                            <NavLocal />
                        </Box>

                        <Box className={classes.logBtn}>
                            <Button color="inherit" variant="outlined" color="primary" sx={{ mx: 2 }} color="secondary">Login</Button>

                            <Button color="secondary" variant="contained" sx={{ mx: 2 }} fullWidth>Sign Up</Button>
                        </Box>


                        <Box className={classes.phoneMeanu}>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                            >

                                <OpenMenu />
                            </IconButton>
                        </Box>

                    </Toolbar>


                </AppBar>




            </ElevationScroll>
            <Toolbar />
            <Box>
                <Outlet />
            </Box>
        </React.Fragment>
    );
}