import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import { useNavigate } from "react-router-dom"

export default function SimpleBottomNavigation()
{

    const nav = useNavigate()
    const [value, setValue] = React.useState(0);

    return (
        <Box sx={{ width: 600, mr: 100 }} >
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) =>
                {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction label="Home" onClick={() => { nav('Home') }} />
                <BottomNavigationAction label="Price" onClick={() => { nav('Price') }} />
                <BottomNavigationAction label="Why Us" onClick={() => { nav('WhyUs') }} />
                {/* <BottomNavigationAction label="How We Work" onClick={() => { nav('Works') }} /> */}

            </BottomNavigation>
        </Box >
    );
}