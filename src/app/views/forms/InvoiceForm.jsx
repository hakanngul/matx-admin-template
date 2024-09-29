import React, { useState } from 'react';
import {
    Box, Button, Card, Divider, Grid, TextField, Typography, Select, MenuItem, IconButton, InputAdornment
} from '@mui/material';
import { CloudUpload, CalendarToday } from '@mui/icons-material';
import CustomBreadcrumbs from '../commons/CustomBreadcrumbs';

const InvoiceFormPage = () => {
    const [subtotal, setSubtotal] = useState(0);
    const [shippingCharges, setShippingCharges] = useState(0);
    const [adjustment, setAdjustment] = useState(0);
    const [total, setTotal] = useState(0);

    // Function to calculate the total
    const calculateTotal = () => {
        const calculatedTotal = subtotal + shippingCharges + adjustment;
        setTotal(calculatedTotal);
    };

    // Update total whenever shipping charges or adjustment changes
    React.useEffect(() => {
        calculateTotal();
    }, [subtotal, shippingCharges, adjustment]);

    return (
        <Box p={3}>
            <CustomBreadcrumbs title="Invoice Form" />
            <Card elevation={3} sx={{ padding: 3 }}>
                <Typography variant="h4" mb={2}>New Invoice</Typography>
                <Divider />

                <form style={{ padding: '16px' }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={4} md={2}>
                            <Typography>Customer Name</Typography>
                        </Grid>
                        <Grid item xs={12} sm={8} md={10}>
                            <TextField
                                fullWidth
                                label="Name"
                                size="small"
                                select
                                variant="outlined"
                            >
                                <MenuItem value=""><em>None</em></MenuItem>
                            </TextField>
                        </Grid>

                        <Grid item xs={12} sm={4} md={2}>
                            <Typography>Invoice#</Typography>
                        </Grid>
                        <Grid item xs={12} sm={8} md={10}>
                            <TextField
                                fullWidth
                                label="Invoice No"
                                size="small"
                                variant="outlined"
                                value="INV-000001"
                            />
                        </Grid>

                        <Grid item xs={12} sm={4} md={2}>
                            <Typography>Order Number</Typography>
                        </Grid>
                        <Grid item xs={12} sm={8} md={10}>
                            <TextField
                                fullWidth
                                label="Order Number"
                                size="small"
                                variant="outlined"
                            />
                        </Grid>

                        <Grid item xs={12} sm={4} md={2}>
                            <Typography>Invoice Date</Typography>
                        </Grid>
                        <Grid item xs={12} sm={8} md={10}>
                            <TextField
                                fullWidth
                                label="Invoice Date"
                                size="small"
                                variant="outlined"
                                value="September 29, 2024"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton>
                                                <CalendarToday />
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>

                        <Grid item xs={12} sm={4} md={2}>
                            <Typography>Terms</Typography>
                        </Grid>
                        <Grid item xs={12} sm={8} md={10}>
                            <Select
                                fullWidth
                                size="small"
                                displayEmpty
                            >
                                <MenuItem value=""><em>None</em></MenuItem>
                            </Select>
                        </Grid>

                        <Grid item xs={12} sm={4} md={2}>
                            <Typography>Due Date</Typography>
                        </Grid>
                        <Grid item xs={12} sm={8} md={10}>
                            <TextField
                                fullWidth
                                label="Due Date"
                                size="small"
                                variant="outlined"
                                value="September 29, 2024"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton>
                                                <CalendarToday />
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                    </Grid>

                    <Divider sx={{ my: 3 }} />

                    {/* Item Details Section */}
                    <Typography variant="h6" mb={2}>Item Details</Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={6} sm={8}>
                            <Typography>Item Name</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography>Quantity</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography>Rate</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography>Discount</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography>Amount</Typography>
                        </Grid>
                    </Grid>

                    <Button variant="contained" color="primary" sx={{ my: 2 }}>
                        + Add New Item
                    </Button>

                    <Divider sx={{ my: 3 }} />

                    {/* Notes and Calculation Section */}
                    <Grid container spacing={3}>
                        {/* Custom Notes */}


                        {/* Summary */}
                        <Grid item xs={12} sm={6}>
                            <Typography variant="body1">Sub Total</Typography>
                            <Typography variant="h6">${subtotal.toFixed(2)}</Typography>

                            <Typography variant="body1" sx={{ mt: 2 }}>Shipping Charges</Typography>
                            <TextField
                                fullWidth
                                size="small"
                                type="number"
                                variant="outlined"
                                value={shippingCharges}
                                onChange={(e) => setShippingCharges(Number(e.target.value))}
                            />

                            <Typography variant="body1" sx={{ mt: 2 }}>Adjustment</Typography>
                            <TextField
                                fullWidth
                                size="small"
                                type="number"
                                variant="outlined"
                                value={adjustment}
                                onChange={(e) => setAdjustment(Number(e.target.value))}
                            />

                            <Divider sx={{ my: 2 }} />

                            <Typography variant="h6">Total ( $ )</Typography>
                            <Typography variant="h6">${total.toFixed(2)}</Typography>


                        </Grid>
                        {/* Terms and Conditions */}
                        <Grid item xs={12} sm={6}>

                            <Typography variant="body1" sx={{ mb: 2 }}>Terms & Conditions</Typography>
                            <TextField
                                fullWidth
                                multiline
                                rows={4}
                                label="Terms & Conditions"
                                variant="outlined"
                                size="small"
                            />

                            <Typography variant="body1" sx={{ mt: 3 }}>Custom Notes</Typography>

                            <TextField
                                fullWidth
                                multiline
                                rows={6}
                                label="Custom Notes"
                                variant="outlined"
                                size="small"
                            />
                        </Grid>
                    </Grid>

                    <Divider sx={{ my: 3 }} />

                    <Grid container spacing={3}>

                        {/* File Upload */}
                        <Grid item xs={12} sm={6}>
                            <label htmlFor="upload-multiple-file">
                                <Button variant="contained" color="primary" component="span" startIcon={<CloudUpload />}>
                                    Upload File
                                </Button>
                            </label>
                            <input multiple type="file" id="upload-multiple-file" style={{ display: 'none' }} />
                        </Grid>

                    </Grid>

                    {/* Submit Button */}
                    <Box sx={{ textAlign: 'center', mt: 4 }}>
                        <Button variant="contained" color="primary" size="large" type="submit">
                            Submit
                        </Button>
                    </Box>
                </form>
            </Card>
        </Box>
    );
};

export default InvoiceFormPage;