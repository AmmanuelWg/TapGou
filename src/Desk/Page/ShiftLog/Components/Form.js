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

            <Container style={{ display: 'flex', margin: '3rem 0rem' }}>

                <Box style={{ display: 'center', alignItems: 'center', padding: '0rem 1rem' }} >
                    <Typography>
                        Proioty
                    </Typography>
                </Box>

                <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                    <FormControlLabel value="female" control={<Radio />} label="Normal" />
                    <FormControlLabel value="male" control={<Radio />} label="High" />
                </RadioGroup>


            </Container>


            {/* FORM */}



            <TextareaAutosize
                maxRows={4}
                maxColums={4}
                aria-label="maximum height"
                placeholder="Maximum 4 rows"
                style={{ height: 100, width: '100%', maxWidth: 440, maxHeight: 500, marginBottom: '1rem 0rem' }}
            />


            <Box style={{ display: 'flex', justifyContent: 'space-between', width: '70%' }}>
                <Button variant="contained">Add Shift Log</Button>
                <Button variant="contained">End Shift</Button>

            </Box>

        </Box>


    );
}








