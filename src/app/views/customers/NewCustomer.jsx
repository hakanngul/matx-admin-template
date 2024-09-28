import React from 'react';
import {
    Box,
    Grid,
    Card,
    Typography,
    Divider,
    TextField,
    Button,
    RadioGroup,
    FormControlLabel,
    Radio,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
} from '@mui/material';
import FacebookIcon from 'app/components/icons/FacebookIcon';
import GoogleIcon from 'app/components/icons/GoogleIcon';
import CustomBreadcrumbs from '../commons/CustomBreadcrumbs';

const NewCustomerPage = () => {
    const [customerType, setCustomerType] = React.useState('business');
    const [currency, setCurrency] = React.useState('');
    const [terms, setTerms] = React.useState('');
    const [salutation, setSalutation] = React.useState('');
    const [facebook, setFacebook] = React.useState('');
    const [google, setGoogle] = React.useState('');

    return (
        <Box p={3}>
            <CustomBreadcrumbs title="New Customer" />
            <Card elevation={3} sx={{ p: 3 }} className="card">
                <Typography variant="h5" gutterBottom>
                    Add a New Customer
                </Typography>
                <Divider />
                <form style={{ marginTop: 20, maxWidth: '60%' }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={2}>
                            <Typography>Customer Type</Typography>
                        </Grid>
                        <Grid item xs={12} md={10}>
                            <RadioGroup
                                row
                                value={customerType}
                                onChange={(e) => setCustomerType(e.target.value)}
                            >
                                <FormControlLabel
                                    value="business"
                                    control={<Radio />}
                                    label="Business"
                                />
                                <FormControlLabel
                                    value="individual"
                                    control={<Radio />}
                                    label="Individual"
                                />
                            </RadioGroup>
                        </Grid>

                        <Grid item xs={12} md={2}>
                            <Typography>Primary Contact</Typography>
                        </Grid>
                        <Grid item xs={12} md={10}>
                            <Grid container spacing={2}>
                                <Grid item xs={4}>
                                    <TextField
                                        fullWidth
                                        label="Salutation"
                                        value={salutation}
                                        onChange={(e) => setSalutation(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField fullWidth label="First Name" />
                                </Grid>
                                <Grid item xs={4}>
                                    <TextField fullWidth label="Last Name" />
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={12} md={2}>
                            <Typography>Company Name</Typography>
                        </Grid>
                        <Grid item xs={12} md={10}>
                            <TextField fullWidth label="Company Name" />
                        </Grid>

                        <Grid item xs={12} md={2}>
                            <Typography>Customer Email</Typography>
                        </Grid>
                        <Grid item xs={12} md={10}>
                            <TextField fullWidth type="email" label="Customer Email" />
                        </Grid>

                        <Grid item xs={12} md={2}>
                            <Typography>Customer Phone</Typography>
                        </Grid>
                        <Grid item xs={12} md={10}>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <TextField fullWidth label="Work Phone" />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField fullWidth label="Mobile" />
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={12} md={2}>
                            <Typography>Currency</Typography>
                        </Grid>
                        <Grid item xs={12} md={10}>
                            <FormControl fullWidth>
                                <InputLabel>Currency</InputLabel>
                                <Select
                                    value={currency}
                                    onChange={(e) => setCurrency(e.target.value)}
                                    label="Currency"
                                >
                                    <MenuItem value="USD">USD</MenuItem>
                                    <MenuItem value="EUR">EUR</MenuItem>
                                    <MenuItem value="GBP">GBP</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} md={2}>
                            <Typography>Payment Terms</Typography>
                        </Grid>
                        <Grid item xs={12} md={10}>
                            <FormControl fullWidth>
                                <InputLabel>Terms</InputLabel>
                                <Select
                                    value={terms}
                                    onChange={(e) => setTerms(e.target.value)}
                                    label="Terms"
                                >
                                    <MenuItem value="Net 30">Net 30</MenuItem>
                                    <MenuItem value="Net 60">Net 60</MenuItem>
                                    <MenuItem value="Net 90">Net 90</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} md={2}>
                            <Typography>Social Media</Typography>
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <TextField
                                fullWidth
                                label="Facebook"
                                value={facebook}
                                onChange={(e) => setFacebook(e.target.value)}
                                InputProps={{
                                    startAdornment: <FacebookIcon />,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <TextField
                                fullWidth
                                label="Google"
                                value={google}
                                onChange={(e) => setGoogle(e.target.value)}
                                InputProps={{
                                    startAdornment: <GoogleIcon />,
                                }}
                            />
                        </Grid>
                    </Grid>

                    <Box mt={3}>
                        <Button variant="contained" color="primary" type="submit">
                            Submit
                        </Button>
                    </Box>
                </form>
            </Card>
        </Box>
    );
};

export default NewCustomerPage;