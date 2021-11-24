import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { FormLabel, Container, Typography, Box } from '@mui/material';

import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


export default function RowRadioButtonsGroup()
{






    return (
        <Box sx={{ mt: 10 }}>

            <Box style={{ display: 'flex', margin: '3rem 0rem' }}>


                <Typography align="center" variant="body1" style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold', margin: '0px 9px' }} >
                    Proioty
                </Typography>


                <RadioGroup row aria-label="gender" name="row-radio-buttons-group">

                    <FormControlLabel value="female" control={<Radio />} label="Normal" />
                    <FormControlLabel value="male" control={<Radio />} label="High" />
                </RadioGroup>


            </Box>


            {/* FORM */}



            <TextareaAutosize
                maxRows={4}
                maxColums={4}
                aria-label="maximum height"
                placeholder="Maximum 4 rows"
                style={{
                    height: 200, width: '100 % ', maxWidth: 300, maxHeight: 300, marginBottom: '1rem 0rem'
                }}
            />

            < Button variant="contained" sx={{ my: 3 }} fullWidth>
                Add Shift Log
            </Button>

        </Box >


    );
}








