import React, { useState, useEffect } from 'react'; // Doğru import

import {
    Box, Button, Card, Divider, Grid, TextField, Typography, IconButton, Avatar, Rating
} from '@mui/material';
import { MoreHoriz, Clear, Search } from '@mui/icons-material';
import axios from 'axios';
import CustomBreadcrumbs from '../commons/CustomBreadcrumbs';

const OrderFormPage = (props) => {
    const [orderDetails, setOrderDetails] = useState({});

    useEffect(() => { // useEffect doğru şekilde kullanılıyor
        axios.get('/api/ecommerce/get-order-details').then((res) => setOrderDetails(res.data));
    }, []);

    return (
        <Box p={5}>
            <CustomBreadcrumbs title="Order Form" />
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                <Box>
                    <Typography variant="h5">Order #{orderDetails.orderNumber}</Typography>
                    <Box display="flex" mt={1}>
                        <Typography sx={{ mr: 2 }} color="success.main">{orderDetails.paymentStatus}</Typography>
                        <Typography color="error.main">{orderDetails.orderStatus}</Typography>
                    </Box>
                </Box>
                <Box>
                    <IconButton><MoreHoriz /></IconButton>
                    <Button variant="contained" color="primary">Fulfill Order</Button>
                </Box>
            </Box>

            {/* Main Grid */}
            <Grid container spacing={3}>
                {/* Order Overview & Items */}
                <Grid item xs={12} md={8}>
                    <Card elevation={1}>
                        <Box p={3}>
                            {/* Overview */}
                            <Box display="flex" justifyContent="space-between">
                                <Typography variant="h6">Overview</Typography>
                                <Typography>{orderDetails.orderDate}</Typography>
                            </Box>
                        </Box>
                        <Divider />
                        <Box p={2}>
                            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                                <TextField
                                    fullWidth
                                    placeholder="Search products..."
                                    InputProps={{
                                        startAdornment: <Search />,
                                    }}
                                    sx={{ mr: 2 }}
                                />
                                <Button variant="outlined" color="primary" size='small'>Browse Catalog</Button>
                            </Box>

                            {/* Product Items */}
                            <Box>
                                <Grid container>
                                    <Grid item xs={6}><Typography>Product Details</Typography></Grid>
                                    <Grid item xs={2}><Typography>Price</Typography></Grid>
                                    <Grid item xs={2}><Typography>Quantity</Typography></Grid>
                                    <Grid item xs={2}><Typography>Total</Typography></Grid>
                                </Grid>

                                {orderDetails.items?.map(item => (
                                    <React.Fragment key={item.id}>
                                        <Divider />
                                        <Grid container alignItems="center" spacing={2} mt={2}>
                                            <Grid item xs={5}>
                                                <Box display="flex" alignItems="center">
                                                    <img src={item.image} alt={item.name} style={{ width: '100px', marginRight: '20px' }} />
                                                    <Box>
                                                        <Typography>{item.name}</Typography>
                                                        <Typography variant="body2">Category: {item.category}</Typography>
                                                        <Typography variant="body2">Brand: {item.brand}</Typography>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={2}>
                                                <TextField fullWidth value={item.price} size="small" />
                                            </Grid>
                                            <Grid paddingX={2} />
                                            <Grid item xs={2}>
                                                <TextField fullWidth value={item.quantity} size="small" />
                                            </Grid>
                                            <Grid paddingX={2} />
                                            <Grid item xs={2}>
                                                <Box display="flex" alignItems="center">
                                                    <Typography>${item.total}</Typography>
                                                    <IconButton size="small"><Clear /></IconButton>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </React.Fragment>
                                ))}
                            </Box>
                        </Box>
                    </Card>
                </Grid>

                {/* Notes & Billing Details */}
                <Grid item xs={12} md={4}>
                    <Card elevation={1}>
                        <Box p={3}>
                            <Typography variant="h6">Customer</Typography>
                            <Box display="flex" alignItems="center" my={2}>
                                <Avatar src={orderDetails.customer?.avatar} alt={orderDetails.customer?.name} sx={{ mr: 2 }} />
                                <Box>
                                    <Typography variant="h6">{orderDetails.customer?.name}</Typography>
                                    <Typography>{orderDetails.customer?.email}</Typography>
                                    <Typography>{orderDetails.customer?.phone}</Typography>
                                </Box>
                            </Box>
                            <Rating value={orderDetails.customer?.rating || 0} readOnly />
                            <Divider sx={{ my: 2 }} />
                            <Typography variant="subtitle1">Shipping Address</Typography>
                            <Typography>{orderDetails.customer?.shippingAddress}</Typography>
                            <Divider sx={{ my: 2 }} />
                            <Typography variant="subtitle1">Billing Address</Typography>
                            <Typography>{orderDetails.customer?.billingAddress}</Typography>
                        </Box>
                    </Card>
                </Grid>

                {/* Notes & Bill Summary */}
                <Grid item xs={12} md={7}>
                    <Typography variant="h6">Notes</Typography>
                    <TextField
                        fullWidth
                        multiline
                        rows={6}
                        placeholder="Write a note"
                        variant="outlined"
                        sx={{ mb: 2 }}
                    />
                    <Button variant="contained" color="primary">Add a note</Button>
                </Grid>

                {/* Bill Details */}
                <Grid item xs={12} md={5}>
                    <Typography variant="h6">Bill Details</Typography>
                    <Box display="flex" justifyContent="space-between" mb={1}>
                        <Typography>Subtotal:</Typography>
                        <Typography>${orderDetails.subtotal}</Typography>
                    </Box>
                    <Box display="flex" justifyContent="space-between" mb={1}>
                        <Typography>Shipping ({orderDetails.shipping?.method}):</Typography>
                        <Typography>${orderDetails.shipping?.price}</Typography>
                    </Box>
                    <Box display="flex" justifyContent="space-between" mb={1}>
                        <Typography>{orderDetails.tax?.type} ({orderDetails.tax?.rate}%):</Typography>
                        <Typography>${orderDetails.tax?.amount}</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default OrderFormPage;