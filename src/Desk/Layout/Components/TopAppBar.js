import React from 'react'
import { styled, useTheme } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';



function TopAppBar({ handleDrawerOpen, open })
{
    return (
        <div>
            <MuiAppBar position="fixed" open={open} >
                <Toolbar style={{ backgroundColor: "white" }}>
                    <IconButton

                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Persistent drawer
                    </Typography>
                </Toolbar>
            </MuiAppBar>
        </div>
    )
}

export default TopAppBar
