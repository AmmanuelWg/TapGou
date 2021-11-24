import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Box } from '@mui/material';





const columns = [
    { id: 'name', label: 'Name', maxWidth: 170 },
    { id: 'code', label: 'Location', maxWidth: 100 },
    {
        id: 'population',
        label: 'Time In',
        maxWidth: 100,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'size',
        label: 'Time Out',
        maxWidth: 100,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'density',
        label: 'Company',
        maxWidth: 170,
        align: 'right',
        format: (value) => value.toFixed(2),
    },
];



function Head()
{
    return (

        <TableHead>
            <TableRow>
                {columns.map((column) => (
                    <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ maxWidth: column.maxWidth }}
                    >
                        {column.label}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>


    )
}

export default Head
