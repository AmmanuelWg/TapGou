
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
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';


import FilterListIcon from '@mui/icons-material/FilterList';




const theme = createTheme();

export default function Form()
{


    return (
        <ThemeProvider theme={theme}>
            <Box component="form" noValidate style={{ padding: '0rem 5rem', width: '100%', display: 'flex' }}>

                <Container >
                    <TextField
                        fullWidth
                        required
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        sx={{ mt: 4 }}></TextField>
                </Container>

                <Box sx={{ mt: 4 }}>
                    <Button variant="outlined" startIcon={<FilterListIcon />} sx={{ height: '100%' }}>
                        Filter
                    </Button>
                </Box>

            </Box >
        </ThemeProvider >
    );
}






