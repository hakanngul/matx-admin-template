import React, { useState } from 'react';
import {
    Card, CardContent, Typography, Table, TableBody, TableCell,
    TableContainer, TableHead, TableRow, Checkbox, IconButton,
    TablePagination, TableSortLabel
} from '@mui/material';
import { FilterList, Done, Clear, TrendingFlat } from '@mui/icons-material';

const OrderList = () => {
    const [orders, setOrders] = useState([
        {
            id: 'lkfjdfjdsjdslgkfjdskjfds',
            customer: 'Ben Schieldman',
            product: 'Bit Bass Headphone',
            date: '29 Sep, 2024',
            status: 'delivered',
            method: 'PayPal',
            total: 15.25,
        },
        {
            id: 'fkjjirewoigkjdhvkcxyhuig',
            customer: 'Joyce Watson',
            product: 'Comlion Watch',
            date: '29 Sep, 2024',
            status: 'cancelled',
            method: 'Visa Card',
            total: 75.25,
        },
        {
            id: 'fdskjkljicuviosduisjd',
            customer: 'Kayle Brown',
            product: 'Beats Headphone',
            date: '29 Sep, 2024',
            status: 'processing',
            method: 'Master Card',
            total: 45.25,
        },
        {
            id: 'fdskfjdsuoiucrwevbgd',
            customer: 'Ven Helsing',
            product: 'BMW Bumper',
            date: '29 Sep, 2024',
            status: 'delivered',
            method: 'Master Card',
            total: 2145.25,
        },
    ]);

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <Card>
            <CardContent>
                {/* Toolbar */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h6">All Orders</Typography>
                    <IconButton aria-label="Filter list">
                        <FilterList />
                    </IconButton>
                </div>

                {/* Table */}
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell padding="checkbox">
                                    <Checkbox />
                                </TableCell>
                                <TableCell>
                                    <TableSortLabel>Order No</TableSortLabel>
                                </TableCell>
                                <TableCell align="center">
                                    <TableSortLabel>Customer</TableSortLabel>
                                </TableCell>
                                <TableCell align="center">
                                    <TableSortLabel>Product</TableSortLabel>
                                </TableCell>
                                <TableCell align="center">
                                    <TableSortLabel>Date</TableSortLabel>
                                </TableCell>
                                <TableCell align="center">
                                    <TableSortLabel>Status</TableSortLabel>
                                </TableCell>
                                <TableCell align="center">
                                    <TableSortLabel>Method</TableSortLabel>
                                </TableCell>
                                <TableCell align="center">
                                    <TableSortLabel>Total</TableSortLabel>
                                </TableCell>
                                <TableCell align="center">Edit</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {orders
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((order) => (
                                    <TableRow key={order.id}>
                                        <TableCell padding="checkbox">
                                            <Checkbox />
                                        </TableCell>
                                        <TableCell>{order.id}</TableCell>
                                        <TableCell align="center">{order.customer}</TableCell>
                                        <TableCell align="center">{order.product}</TableCell>
                                        <TableCell align="center">{order.date}</TableCell>
                                        <TableCell align="center">
                                            <span
                                                style={{
                                                    backgroundColor:
                                                        order.status === 'delivered'
                                                            ? 'rgba(9, 182, 109, 1)'
                                                            : order.status === 'cancelled'
                                                                ? '#FF3D57'
                                                                : '#FFAF38',
                                                    padding: '4px 8px',
                                                    borderRadius: '4px',
                                                    color: '#fff',
                                                }}
                                            >
                                                {order.status}
                                            </span>
                                        </TableCell>
                                        <TableCell align="center">{order.method}</TableCell>
                                        <TableCell align="center">${order.total.toFixed(2)}</TableCell>
                                        <TableCell align="center">
                                            <IconButton aria-label="Mark as Delivered">
                                                <Done color="success" />
                                            </IconButton>
                                            <IconButton aria-label="Cancel Order">
                                                <Clear color="error" />
                                            </IconButton>
                                            <IconButton aria-label="View Order">
                                                <TrendingFlat />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                {/* Pagination */}
                <TablePagination
                    component="div"
                    count={orders.length}
                    page={page}
                    onPageChange={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    rowsPerPageOptions={[5, 10, 25]}
                    labelRowsPerPage="Rows per page:"
                />
            </CardContent>
        </Card>
    );
};

export default OrderList;