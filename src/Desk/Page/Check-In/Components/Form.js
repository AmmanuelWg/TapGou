
import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { makeStyles } from '@mui/styles';




const theme = createTheme();


//STYLES

const useStyles = makeStyles({

    Radiogroup: {
        display: 'flex',
        width: '100%',
        margin: '0rem 2rem',
        justifyContent: 'space-around'
    }



})

export default function Form()
{

    const classes = useStyles()

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs" sx={{ pb: 20 }}>
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >


                    <Grid container>
                        <RadioGroup row aria-label="gender" name="row-radio-buttons-group" className={classes.Radiogroup}>
                            <FormControlLabel value="female" control={<Radio />} label="Vistor" />
                            <FormControlLabel value="male" control={<Radio />} label="Contractor" />
                        </RadioGroup>
                    </Grid>




                    <Box component="form" noValidate sx={{ mt: 4 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            sx={{ mt: 4 }}></TextField>


                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            sx={{ mt: 4 }}
                        />


                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 5 }}
                        >
                            Sign In
                        </Button>

                    </Box>



                </Box>

            </Container>
        </ThemeProvider>
    );
}