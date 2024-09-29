import React, { useEffect, useState } from 'react';
import { Grid, Box, TextField, Typography, Button, FormControlLabel, Checkbox, Card, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import CustomBreadcrumbs from '../commons/CustomBreadcrumbs';

const CheckoutPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("/api/ecommerce/get-cart-list").then(response => {
            setProducts(response.data || []);
        });
    }, []);

    const totalPrice = products.reduce((acc, product) => acc + product.price, 0);

    return (
        <Box sx={{ padding: '20px' }}>
            <CustomBreadcrumbs title="Checkout" />
            <Grid container spacing={3}>
                {/* Billing Details */}
                <Grid item xs={12} md={8}>
                    <Card sx={{ padding: '20px' }}>
                        <Typography variant="h6" gutterBottom>Billing Details</Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField label="First Name" fullWidth variant="outlined" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField label="Last Name" fullWidth variant="outlined" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField label="Company" fullWidth variant="outlined" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField label="Email" fullWidth variant="outlined" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField label="Mobile" fullWidth variant="outlined" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField label="Country" fullWidth select variant="outlined">
                                    <option value="USA">USA</option>
                                    <option value="Canada">Canada</option>
                                    <option value="UK">UK</option>
                                </TextField>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField label="City" fullWidth variant="outlined" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField label="Address" fullWidth variant="outlined" />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel control={<Checkbox />} label="Create an account?" />
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>

                {/* Order Summary */}
                <Grid item xs={12} md={4}>
                    <Card sx={{ padding: '20px' }}>
                        <Typography variant="h6" gutterBottom>Order Summary</Typography>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Product</TableCell>
                                        <TableCell align="right">Total Price</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {products.map((product) => (
                                        <TableRow key={product.id}>
                                            <TableCell>{product.title}</TableCell>
                                            <TableCell align="right">${product.price}</TableCell>
                                        </TableRow>
                                    ))}
                                    <TableRow>
                                        <TableCell>Total</TableCell>
                                        <TableCell align="right">${totalPrice}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <Box height={35} />
                        <Box sx={{ marginTop: '20px' }}>
                            <TextField label="Discount Coupon" fullWidth variant="outlined" />
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                                <Button variant="contained" color="secondary">Apply</Button>
                                <Button variant="contained" color="primary">Place Order</Button>
                            </Box>
                        </Box>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default CheckoutPage;