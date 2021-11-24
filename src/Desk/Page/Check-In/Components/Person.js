
import React, { useState, useEffect } from 'react'


import
{
    Avatar,
    List,
    ListItem,
    ListItemAvatar,
    Button,
    Grid,
    Divider,

} from "@mui/material"

function Person({ name, PhoneNumber, Location, TimeIn, TimeOut, Company })
{
    return (
        <List >
            {/* <ListItem>
                <ListItemAvatar>
                    <Avatar  >
                        <AccountCircleIcon />
                    </Avatar>
                </ListItemAvatar> */}
            <Grid container style={{ width: '100%' }}>
                <Grid item style={{ flex: '1.6' }}>{name}</Grid>
                <Grid item style={{ flex: '2' }}> {Location}</Grid>
                <Grid item style={{ flex: '1' }}> {TimeIn}</Grid>

                {/* <Grid item style={{ flex: '1' }}> {!timeOut ? (<Button size="small" variant='contained' color="primary" onClick={handlePersonLeft}>Out</Button>) : TimeOut} </Grid> */}

                <Grid item style={{ flex: '2', display: 'flex', justifyContent: 'center' }}>{PhoneNumber}</Grid>


            </Grid>

            <Divider />


        </List >
    )
}

export default Person
