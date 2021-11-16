import * as React from 'react';
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



import Drawholder from './Components/Drawholder';
import TopAppBar from './Components/TopAppBar';



//MY FILES
import CheckInPage from "../Page/Check-In/index"
import SearchPage from "../Page/Search/index"
import ChartPage from "../Page/Chart/Index"
import ShiftLogPage from "../Page/ShiftLog/index"


const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function Layout()
{
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () =>
    {
        setOpen(true);
    };

    const handleDrawerClose = () =>
    {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            {/* TOP BAR */}
            <TopAppBar open={open} handleDrawerOpen={handleDrawerOpen} />


            {/* THE DRAWER THE OPENS WHEN CLICKED */}
            <Drawholder drawerWidth={drawerWidth} handleDrawerClose={handleDrawerClose} theme={theme} open={open} DrawerHeader={DrawerHeader} />



            <Main open={open} style={{ backgroundColor: '#F9FBFA' }}>

                {/* PAGES SOON TO BE INSIDE ROUTERS */}


                {/* <CheckInPage /> */}
                {/* <SearchPage /> */}
                {/* <ChartPage /> */}
                <ShiftLogPage />
            </Main>

        </Box>
    );
}