
import React from 'react';
import { makeStyles } from '@mui/styles';
import
{
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Avatar,
    Grid,
    Typography,
    TablePagination,
    TableFooter
} from '@mui/material';

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
    },
    tableContainer: {
        borderRadius: 15,
        margin: '3.5rem 10px',
        maxWidth: 950
    },
    tableHeaderCell: {
        fontWeight: 'bold',
        fontSize: '1.1rem'


    },
    avatar: {
        marginRight: '6rem'

    },
    name: {
        fontWeight: 'bold',

    },
    status: {
        fontWeight: 'bold',
        fontSize: '0.75rem',
        color: 'white',
        backgroundColor: 'grey',
        borderRadius: 8,
        padding: '3px 10px',
        display: 'inline-block'
    }
}));



const Vistor = [
    {
        name: 'Ammanuel',
        phone: '234-334-3322',
        Location: 'Roof top',
        TimeIn: '10:00am',
        TimeOut: '1:00pm'

    },
    {
        name: 'Ammanuel',
        phone: '234-334-3322',
        Location: '8933',
        TimeIn: '10:00am',
        TimeOut: '1:00pm'

    },
    {
        name: 'Ammanuel',
        phone: '234-334-3322',
        Location: '9000',
        TimeIn: '10:00am',
        TimeOut: '1:00pm'

    },
    {
        name: 'Ammanuel',
        phone: '234-334-3322',
        Location: '8989',
        TimeIn: '10:00am',
        TimeOut: '1:00pm'

    },
    {
        name: 'Ammanuel',
        phone: '234-334-3322',
        Location: '8989',
        TimeIn: '10:00am',
        TimeOut: '1:00pm'

    },
    {
        name: 'Ammanuel',
        phone: '234-334-3322',
        Location: '8989',
        TimeIn: '10:00am',
        TimeOut: '1:00pm'

    },
    {
        name: 'Ammanuel',
        phone: '234-334-3322',
        Location: '8989',
        TimeIn: '10:00am',
        TimeOut: '1:00pm'

    },
    {
        name: 'Ammanuel',
        phone: '234-334-3322',
        Location: '8989',
        TimeIn: '10:00am',
        TimeOut: '1:00pm'

    },
    {
        name: 'Ammanuel',
        phone: '234-334-3322',
        Location: '8989',
        TimeIn: '10:00am',
        TimeOut: '1:00pm'

    },
]








function Output()
{
    const classes = useStyles();
    return (
        <TableContainer className={classes.tableContainer}>
            <Table className={classes.table} stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.tableHeaderCell}>Name</TableCell>
                        <TableCell className={classes.tableHeaderCell}>Location</TableCell>
                        <TableCell className={classes.tableHeaderCell}>Time In</TableCell>
                        <TableCell className={classes.tableHeaderCell}>Time Out</TableCell>

                    </TableRow>
                </TableHead>



                <TableBody>
                    {Vistor.map((row) => (
                        <TableRow key={row.name}>

                            <TableCell>
                                <Grid container>
                                    <Grid item lg={2}>
                                        <Avatar alt={row.name} src='.' className={classes.avatar} />
                                    </Grid>
                                    <Grid item lg={8}>
                                        <Typography className={classes.name}>{row.name}</Typography>
                                        {/* <Typography color="textSecondary" variant="body2">{row.email}</Typography> */}
                                        <Typography color="textSecondary" variant="body2">{row.phone}</Typography>
                                    </Grid>
                                </Grid>
                            </TableCell>


                            <TableCell>
                                <Typography color="primary" variant="subtitle2" className={classes.name}> {row.Location}</Typography>
                                {/* <Typography color="textSecondary" variant="body2">{row.TimeOut}</Typography> */}
                            </TableCell>

                            <TableCell>{row.TimeIn}
                            </TableCell>

                            <TableCell>{row.TimeOut}
                            </TableCell>

                            {/* <TableCell> */}
                            {/* <Typography
                                    className={classes.status}
                                    style={{
                                        backgroundColor:
                                            ((row.status === 'Active' && 'green') ||
                                                (row.status === 'Pending' && 'blue') ||
                                                (row.status === 'Blocked' && 'orange'))
                                    }}
                                >{row.status}</Typography> */}
                            {/* </TableCell> */}



                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>

                </TableFooter>
            </Table>
        </TableContainer>
    );
}

export default Output;