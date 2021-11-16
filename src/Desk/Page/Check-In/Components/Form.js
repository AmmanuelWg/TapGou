
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';



const theme = createTheme();

export default function Form()
{


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
                        <Grid item xs>
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Vistor"
                            />
                        </Grid>
                        <Grid item>
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Contractor"
                            />
                        </Grid>
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