import React from 'react';
import {
    Box, Button, IconButton, Typography, Card, Divider, Table, TableBody,
    TableCell, TableHead, TableRow, Paper
} from '@mui/material';
import { ArrowBack, Print, Edit } from '@mui/icons-material';

const ViewOrderPage = () => {
    const orderDetails = {
        orderNumber: 235,
        orderStatus: 'delivered',
        orderDate: 'September 29, 2024',
        billFrom: {
            name: 'UI Lib',
            email: 'sales@ui-lib.com',
            address: '8254 S. Garfield Street, Villa Rica, GA 30180',
            phone: '+1-202-555-0170'
        },
        billTo: {
            name: 'Hane PLC',
            email: 'nader.savanna@lindgren.org',
            address: '858 8th St. Nanuet, NY 10954',
            phone: '+202-555-0131'
        },
        items: [
            { id: 1, name: 'Item 1', unitPrice: 4000, quantity: 3, cost: 12000 },
            { id: 2, name: 'Item 2', unitPrice: 5000, quantity: 1, cost: 5000 },
            { id: 3, name: 'Item 3', unitPrice: 4000, quantity: 3, cost: 12000 },
            { id: 4, name: 'Item 4', unitPrice: 5000, quantity: 1, cost: 5000 },
        ],
        subTotal: 34000,
        vat: 10,
        grandTotal: 37400,
    };

    return (
        <Box p={3}>
            <Card elevation={6} sx={{ padding: 3 }}>
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                    <IconButton href="/invoice/list" aria-label="back">
                        <ArrowBack />
                    </IconButton>
                    <Box>
                        <Button variant="contained" color="primary" startIcon={<Edit />}>
                            Edit Invoice
                        </Button>
                        <Button variant="contained" color="secondary" startIcon={<Print />} sx={{ ml: 2 }}>
                            Print Invoice
                        </Button>
                    </Box>
                </Box>

                <Box id="print-area">
                    {/* Order Info */}
                    <Box display="flex" justifyContent="space-between" mb={2}>
                        <Box>
                            <Typography variant="h6">Order Info</Typography>
                            <Typography>Order Number: #{orderDetails.orderNumber}</Typography>
                        </Box>
                        <Box textAlign="right">
                            <Typography variant="h6">
                                <strong>Order Status: </strong>
                                <span>{orderDetails.orderStatus}</span>
                            </Typography>
                            <Typography variant="h6">
                                <strong>Order Date: </strong>
                                <span>{orderDetails.orderDate}</span>
                            </Typography>
                        </Box>
                    </Box>

                    <Divider />

                    {/* Billing Info */}
                    <Box display="flex" justifyContent="space-between" my={2}>
                        <Box>
                            <Typography variant="h6">Bill From</Typography>
                            <Typography>{orderDetails.billFrom.name}</Typography>
                            <Typography>{orderDetails.billFrom.email}</Typography>
                            <Typography>{orderDetails.billFrom.address}</Typography>
                            <Typography>{orderDetails.billFrom.phone}</Typography>
                        </Box>
                        <Box textAlign="right">
                            <Typography variant="h6">Bill To</Typography>
                            <Typography>{orderDetails.billTo.name}</Typography>
                            <Typography>{orderDetails.billTo.email}</Typography>
                            <Typography>{orderDetails.billTo.address}</Typography>
                            <Typography>{orderDetails.billTo.phone}</Typography>
                        </Box>
                    </Box>

                    {/* Order Items */}
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>#</TableCell>
                                <TableCell align="center">Item Name</TableCell>
                                <TableCell align="center">Unit Price</TableCell>
                                <TableCell align="center">Quantity</TableCell>
                                <TableCell align="center">Cost</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {orderDetails.items.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell>{item.id}</TableCell>
                                    <TableCell align="center">{item.name}</TableCell>
                                    <TableCell align="center">${item.unitPrice}</TableCell>
                                    <TableCell align="center">{item.quantity}</TableCell>
                                    <TableCell align="center">${item.cost}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                    {/* Summary */}
                    <Box display="flex" justifyContent="flex-end" mt={3}>
                        <Paper elevation={0} sx={{ p: 2, minWidth: '300px' }}>
                            <Box display="flex" justifyContent="space-between" mb={1}>
                                <Typography>Sub Total:</Typography>
                                <Typography>${orderDetails.subTotal}</Typography>
                            </Box>
                            <Box display="flex" justifyContent="space-between" mb={1}>
                                <Typography>Vat (%):</Typography>
                                <Typography>{orderDetails.vat}</Typography>
                            </Box>
                            <Divider />
                            <Box display="flex" justifyContent="space-between" mt={1}>
                                <Typography variant="h6">Grand Total:</Typography>
                                <Typography variant="h6">${orderDetails.grandTotal}</Typography>
                            </Box>
                        </Paper>
                    </Box>
                </Box>
            </Card>
        </Box>
    );
};

export default ViewOrderPage;