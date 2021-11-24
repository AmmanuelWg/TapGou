import React, { useState } from 'react';



import
{
    TextField,
    Collapse,
    Button,
    Box,
} from '@mui/material';


import ExpandMore from '@mui/icons-material/ExpandMore';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import IconButton from '@mui/material/IconButton';




export default function ContactForm()
{

    const [open, setOpen] = useState(false);

    const handleClick = () =>
    {
        setOpen(!open);
    };

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '100%' },
            }}
            noValidate
            autoComplete="off"
        >

            <IconButton color="primary" aria-label="upload picture" component="span" onClick={handleClick}>
                {open ? <ExpandMore /> : <AddCircleOutlineIcon />}
            </IconButton>

            <Collapse in={open} timeout="auto" unmountOnExit>

                <div>
                    <TextField
                        required
                        id="outlined-required"
                        label="Name"

                    />



                    <TextField
                        id="outlined-number"
                        label="Number"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                    <Button fullWidth sx={{ m: 1 }} variant="contained">
                        Add Contact
                    </Button>

                </div>

            </Collapse>

        </Box >
    );
}





















