import React, { useState } from 'react';
import {
    Card, CardContent, Typography, Table, TableBody, TableCell,
    TableContainer, TableHead, TableRow, Checkbox, IconButton,
    TablePagination, TableSortLabel
} from '@mui/material';
import { FilterList, Done, Clear, TrendingFlat, Start } from '@mui/icons-material';

const OrderList = () => {

    const [orders, setOrders] = useState([
        {
            id: 'd3a2f7f4-18c6-4d33-8c1e-7f4d3b6faa5f',
            customer: 'Ben Schieldman',
            product: 'Bit Bass Headphone',
            date: '29 Sep, 2024',
            status: 'delivered',
            method: 'PayPal',
            total: 15.25,
            cartImage: 'paypal.png',
        },
        {
            id: '6b2f4c3f-8f41-4464-8a7e-0de73d0f7f45',
            customer: 'Joyce Watson',
            product: 'Comlion Watch',
            date: '29 Sep, 2024',
            status: 'cancelled',
            method: 'Visa Card',
            total: 75.25,
            cartImage: 'visa.png',
        },
        {
            id: 'a6fc4f70-2c3f-4b7c-9c13-6f6b25d7c9cc',
            customer: 'Kayle Brown',
            product: 'Beats Headphone',
            date: '29 Sep, 2024',
            status: 'processing',
            method: 'Master Card',
            total: 45.25,
            cartImage: 'master-card.png',
        },
        {
            id: 'f7f9b6a0-8b16-46e6-9994-5f2c6b90a8a8',
            customer: 'Ven Helsing',
            product: 'BMW Bumper',
            date: '29 Sep, 2024',
            status: 'delivered',
            method: 'Master Card',
            total: 2145.25,
            cartImage: 'master-card.png',
        },
        {
            id: 'f7f9b6a0-8b16-46e6-9994-5f2c6b90a8a9',
            customer: 'Sandy Foster',
            product: 'Nike Shoes',
            date: '29 Sep, 2024',
            status: 'pending',
            method: 'Amazon Pay',
            total: 75.25,
            cartImage: 'amazon.png',
        },
        {
            id: 'f7f9b6a0-8b16-46e6-9994-5f2c6b90a8aa',
            customer: 'Mark Zuckerberg',
            product: 'Meta Watch',
            date: '29 Sep, 2024',
            status: 'delivered',
            method: 'Western Union',
            total: 2145.25,
            cartImage: 'western-union.png',
        },
        {
            id: 'f7f9b6a0-8b16-46e6-9994-5f2c6b90a8ab',
            customer: 'Steve Jobs',
            product: 'Apple Macbook',
            date: '29 Sep, 2024',
            status: 'cancelled',
            method: 'Amex',
            total: 105.25,
            cartImage: 'amex.png',
        }
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

    const handleStatusChange = (orderId, status) => {
        setOrders((prevOrders) =>
            prevOrders.map((order) =>
                order.id === orderId ? { ...order, status } : order
            )
        );
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
                                        <TableCell align="center">
                                            <img src={process.env.PUBLIC_URL + "/assets/images/payment-methods/" + order.cartImage} alt={order.cartImage} />

                                        </TableCell>
                                        <TableCell align="center">${order.total.toFixed(2)}</TableCell>
                                        <TableCell align="center">
                                            <IconButton
                                                aria-label="Mark as Delivered"
                                                onClick={() => handleStatusChange(order.id, 'delivered')}
                                            >
                                                <Done color="success" />
                                            </IconButton>
                                            <IconButton
                                                aria-label="Cancel Order"
                                                onClick={() => handleStatusChange(order.id, 'cancelled')}
                                            >
                                                <Clear color="error" />
                                            </IconButton>
                                            <IconButton
                                                aria-label="Mark as Processing"
                                                onClick={() => handleStatusChange(order.id, 'processing')}>
                                                <Start color="primary" size={20} />
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