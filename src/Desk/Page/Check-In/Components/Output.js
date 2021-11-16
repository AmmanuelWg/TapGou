import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Box, Container } from '@mui/material';


//MY FILES
import Head from './Head';
import Body from './Body';




function createData(name, code, population, size)
{
    const density = population / size;
    return { name, code, population, size, density };
}

export default function StickyHeadTable()
{
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) =>
    {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) =>
    {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Container  >
            <TableContainer sx={{ maxHeight: "80%", maxWidth: '100%', marginTop: 8 }}>
                <Table stickyHeader aria-label="sticky table">

                    <Head />

                    <Body />
                </Table>
            </TableContainer>


        </Container>

    );
}