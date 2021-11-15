import React from 'react'
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Contact from './Contact';

import QRcode from "../../Data/Layout/QRcode"
///The array for the side bar 
import { Data } from "../../Data/Layout/Data"



function Drawholder({ drawerWidth, handleDrawerClose, theme, open, DrawerHeader })
{
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
            {/* 
            <List style={{ padding: '0rem 1rem' }}>
                <Typography >
                    Dashboard
                </Typography>

                {['Check In', 'Search', 'Shift Log', 'Gmail', "analysis", "Package"].map((text, index) => (
                    <ListItem button key={text} style={{ margin: '1rem 0rem' }}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List> */}

            <List style={{ padding: '0rem 1rem' }}>
                <Typography>
                    Dashboard
                </Typography>
                {Data.map((text, index) => (
                    <ListItem button key={text} style={{ margin: '1rem 0rem' }}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>

            <List style={{ padding: '0rem 1rem' }}>
                <Typography >
                    Contact
                </Typography>

                {['Check In', 'Search'].map((text, index) => (
                    <ListItem button key={text} style={{ margin: '1rem 0rem' }}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>

            <List style={{ padding: '0rem 1rem' }}>
                <QRcode />
            </List>
        </Drawer>
    )
}

export default Drawholder
