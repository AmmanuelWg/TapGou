import React from 'react'
import { styled, useTheme } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';



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

                    <Box style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
                        <IconButton>
                            <SettingsIcon />
                        </IconButton>
                    </Box>

                    <SettingsIcon />

                </Toolbar>

            </MuiAppBar>
        </div>
    )
}

export default TopAppBar
