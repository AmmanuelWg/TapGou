import React from 'react'

///MY FLILES

import Welcome from "./LandingPage/Intro"
import Vidoe from "./LandingPage/Video"
import Features from "./LandingPage/Features"
import Testimony from './LandingPage/Testimony'
import WhyUs from './LandingPage/WhyUs'
import Footer from './LandingPage/Footer'

import { ThemeProvider } from '@mui/styles'
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#6C63FF'
        },
        secondary: {
            main: '#fff'
        }
    },
});


function index()
{
    return (
        <>
            <ThemeProvider theme={theme} >
                <Welcome />
                <Vidoe />
                <Features />
                <WhyUs />
                <Testimony />
                <Footer />

            </ThemeProvider>

        </>



    )
}

export default index
