import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';

const buttons = [
    <Button key="one">Today</Button>,
    <Button key="two">Week</Button>,
    <Button key="three">Month</Button>,
    <Button key="three">Year</Button>,
];

export default function Calander()
{
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                '& > *': {
                    my: 15,
                },
            }}
        >

            <ButtonGroup size="large" aria-label="large button group">
                {buttons}
            </ButtonGroup>
        </Box>
    );
}