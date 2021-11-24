import * as React from 'react';
import
{
    Typography,
    Box,
    List,
    IconButton,
    ListItem
} from '@mui/material';


import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { green, pink, orange } from '@mui/material/colors';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';



////MY FILES
import ContactForm from './ContactForm';

export default function PhoneNumber()
{
    const [open, setOpen] = React.useState(true);

    const handleClick = () =>
    {
        setOpen(!open);
    };

    return (
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"

        >


            {/* OPENING AND CLOSING FORMS */}

            {/* <IconButton color="primary" aria-label="upload picture" component="span" onClick={handleClick}>
                {open ? <ExpandMore /> : <AddCircleOutlineIcon />}
            </IconButton>

            <Collapse in={open} timeout="auto" unmountOnExit>
                <ContactForm />
            </Collapse> */}





            {/* AVATAR */}

            <ListItem
                style={{ display: 'flex', alginItems: 'center' }}
            >

                <Box sx={{ marginRight: 3 }}>
                    <LocalPhoneIcon />
                </Box>

                {/* PHONE NUMBER AND NAME  */}

                <Box>
                    <Typography variant="body1" style={{ fontSize: '15px' }} >
                        Conceraige
                    </Typography>
                    <Typography variant="body2" style={{ fontSize: '12px' }}  >
                        240-333-232
                    </Typography>
                </Box>

                {/* DELETE AND EDIT BTN */}
                <Box style={{ display: 'flex' }}>
                    <IconButton edge="end" aria-label="delete">
                        <EditIcon sx={{ color: orange[500] }} />
                    </IconButton>

                    <IconButton edge="end" aria-label="delete">
                        <DeleteIcon sx={{ color: pink[500] }} />
                    </IconButton>
                </Box>

            </ListItem>

        </List >
    );
}











