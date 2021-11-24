import React, { useRef, useState } from 'react'
import { styled, useTheme } from '@mui/material/styles';
import
{
    Drawer,
    List,
    Typography,
    ListItem,
    ListItemText,
    Button,
    Collapse,

} from '@mui/material';


///Icons
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemIcon from '@mui/material/ListItemIcon';

import ListItemButton from '@mui/material/ListItemButton';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

// import SearchIcon from '@mui/icons-material/Search';
// import CreateIcon from '@mui/icons-material/Create';
// import EqualizerIcon from '@mui/icons-material/Equalizer';
// import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';


///PACKAGES
import ReactToPrint from 'react-to-print';
import QRCode from 'qrcode-react'

///The array for the side bar 
import { Data } from "../../Data/Layout/Data"
import { useNavigate } from "react-router-dom"


//MY FILE
import PhoneNumber from './PhoneNumber';
import ContactForm from './ContactForm';
import PrintAbleContent from './PrintAbleContent';




function Drawholder({ drawerWidth, handleDrawerClose, theme, open, DrawerHeader })
{

    /////clicked link

    const nav = useNavigate()



    ///COLLAPSES

    const [phoneDrawOpen, setOpen] = useState(false);
    const handleClick = () =>
    {
        setOpen(!phoneDrawOpen);
    };


    const [QRCODEOpen, setQROpen] = useState(false);

    const handleQRClick = () =>
    {
        setQROpen(!QRCODEOpen);
    };







    const componentRef = useRef();

    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="persistent"
            anchor="left"
            open={open}

        >
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </DrawerHeader>





            {/* DASHBOARD */}

            <List style={{ padding: '0rem 1rem' }}>
                <Typography>
                    Dashboard
                </Typography>
                {Data.map((text, index) => (
                    <ListItem button key={text} style={{ margin: '1rem 0rem' }} onClick={() => { nav(text.link) }} >
                        <ListItemIcon>
                            {text.icons}
                        </ListItemIcon>
                        <ListItemText primary={text.name} />
                    </ListItem>
                ))}
            </List>



            {/* INFO SECTIONS  */}

            <List style={{ padding: '0rem 1rem' }}>
                <Typography >
                    Info
                </Typography>


                {/* PHONE NUMBER FORM AND OUT PUT */}


                <ListItemButton onClick={handleClick}>

                    <ListItemText primary="Phone Number" />
                    {phoneDrawOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                <Collapse in={phoneDrawOpen} timeout="auto" unmountOnExit>

                    {/* COLLAPSING FORMS */}
                    <ContactForm />

                    <List component="div" disablePadding>
                        <PhoneNumber />
                        <PhoneNumber />

                    </List>
                </Collapse>
            </List>


            {/* QR CODE */}

            <List style={{ padding: '0rem 1rem', margin: '1rem 0rem' }}>


                <ListItemButton onClick={handleQRClick}>

                    <ListItemText primary="QR code" />
                    {QRCODEOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                {/* QR CODE THAT CLOSES AND OPNES  */}
                <Collapse in={QRCODEOpen} timeout="auto" unmountOnExit>

                    <div ref={componentRef}>
                        <PrintAbleContent />
                    </div>

                    <ReactToPrint
                        trigger={() => <Button fullWidth variant="contained" sx={{ mt: 1 }}>Print</Button>}
                        content={() => componentRef.current}
                    />

                </Collapse>

            </List>

        </Drawer>
    )
}

export default Drawholder













