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


//MY FILES
import Person from './Person';

function createData(name, code, population, size)
{
    const density = population / size;
    return { name, code, population, size, density };
}



const columns = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
    {
        id: 'population',
        label: 'Population',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'size',
        label: 'Size\u00a0(km\u00b2)',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'density',
        label: 'Density',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toFixed(2),
    },
];




const rows = [
    createData('Ammanuel', '240-333-4433', '10:00am', 1324171354, 3287263),
    createData('China', 'CN', 1403500365, 9596961),
    createData('Italy', 'IT', 60483973, 301340),
    createData('United States', 'US', 327167434, 9833520),
    createData('Canada', 'CA', 37602103, 9984670),
    createData('Australia', 'AU', 25475400, 7692024),
    createData('Germany', 'DE', 83019200, 357578),
    createData('Ireland', 'IE', 4857000, 70273),
    createData('Mexico', 'MX', 126577691, 1972550),
    createData('Japan', 'JP', 126317000, 377973),
    createData('France', 'FR', 67022000, 640679),
    createData('United Kingdom', 'GB', 67545757, 242495),
    createData('Russia', 'RU', 146793744, 17098246),
    createData('Nigeria', 'NG', 200962417, 923768),
    createData('Brazil', 'BR', 210147125, 8515767),
    createData('France', 'FR', 67022000, 640679),
    createData('United Kingdom', 'GB', 67545757, 242495),
    createData('Russia', 'RU', 146793744, 17098246),
    createData('Nigeria', 'NG', 200962417, 923768),
    createData('Brazil', 'BR', 210147125, 8515767)
];



// const rows = [
//     {
//         name: 'Ammanuel',
//         PhoneNumber: '240-330-3344',
//         Location: '12002',
//         TimeIn: '10:12am',
//         TimeOut: '1:00pm',
//         Company: '-'
//     },
//     {
//         name: 'Emmay',
//         PhoneNumber: '240-330-3344',
//         Location: '12002',
//         TimeIn: '10:12am',
//         TimeOut: '1:00pm',
//         Company: '-'
//     },
//     {
//         name: 'Luke',
//         PhoneNumber: '240-330-3344',
//         Location: '12002',
//         TimeIn: '10:12am',
//         TimeOut: '1:00pm',
//         Company: '-'
//     },
//     {
//         name: 'Mark',
//         PhoneNumber: '240-330-3344',
//         Location: '12002',
//         TimeIn: '10:12am',
//         TimeOut: '1:00pm',
//         Company: 'Otis'
//     },
// ]

export default function Body()
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

        <TableBody>
            {rows.map((row) =>
            {
                return (

                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                        {columns.map((column) =>
                        {
                            const value = row[column.id];
                            return (
                                <TableCell
                                    key={column.id}
                                    align={column.align}>

                                    {column.format && typeof value === 'number' ? column.format(value) : value}


                                </TableCell>
                            );
                        })}
                    </TableRow>
                );
            })}
        </TableBody>





    );
}









