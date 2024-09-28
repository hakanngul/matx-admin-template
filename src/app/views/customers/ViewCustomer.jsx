import styled from '@emotion/styled';
import {
    Box,
    Card,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableRow,
    Button,
    Icon,
    Divider,
    Typography,
    Tabs,
    Tab,
    IconButton,
    MenuItem,
    List,
    ListItemButton,
    ListItemText,
    Menu,
    Chip

} from '@mui/material';


import { useState } from 'react';
import CustomBreadcrumbs from '../commons/CustomBreadcrumbs';

const ViewCustomer = () => {
    const [tabIndex, setTabIndex] = useState(0);

    const handleTabChange = (event, newValue) => {
        setTabIndex(newValue);
    };

    return (
        <Box p={3}>
            {/* Breadcrumb and Header */}
            <CustomBreadcrumbs title="View Customer" />

            {/* Tabs */}
            <Tabs value={tabIndex} onChange={handleTabChange} indicatorColor="primary" textColor="primary">
                <Tab label="Details" />
                <Tab label="Invoices" />
                <Tab label="Logs" />
            </Tabs>

            <Divider sx={{ my: 2 }} />

            {/* Details Tab */}
            {tabIndex === 0 && (
                <Grid container spacing={3}>
                    {/* Customer Details */}
                    <Grid item xs={12} md={6} lg={4}>
                        <Card sx={{ p: 2 }} elevation={3} >
                            <Box display="flex" alignItems="center" flexDirection="column" p={2}>
                                <Box mb={2}>
                                    <img src="/assets/images/faces/10.jpg" alt="user" style={{ borderRadius: '50%', width: 80, height: 80 }} />
                                </Box>
                                <Typography variant="h5">Ben Peterson</Typography>
                                <Typography variant="body2" color="textSecondary">CEO, Brack Ltd.</Typography>
                            </Box>
                            <Divider />

                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>Email</TableCell>
                                        <TableCell>
                                            <Box>
                                                ui-lib@example.com
                                                <Typography variant="caption" color="primary" ml={1}>
                                                    Email Verified
                                                </Typography>
                                            </Box>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Phone</TableCell>
                                        <TableCell>+1 439 327 546</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Country</TableCell>
                                        <TableCell>USA</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>State/Region</TableCell>
                                        <TableCell>New York</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Address 1</TableCell>
                                        <TableCell>Street Tailwood, No. 17</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Address 2</TableCell>
                                        <TableCell>House #19</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                            <Box p={2} display="flex" justifyContent="space-between">
                                <Button variant="outlined" startIcon={<Icon>lock_open</Icon>}>
                                    Reset & Send Password
                                </Button>
                                <Button variant="outlined" startIcon={<Icon>person</Icon>}>
                                    Login as Customer
                                </Button>
                            </Box>
                        </Card>
                    </Grid>

                    {/* Billing Section */}
                    <Grid item xs={12} md={6} lg={4}>
                        <Card elevation={3} sx={{ p: 2 }} >
                            <Typography variant="h5" p={2}>Billing</Typography>
                            <Divider />
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>Credit Card</TableCell>
                                        <TableCell>**** **** **** 4242</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Paid</TableCell>
                                        <TableCell>5 ($500.00)</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Draft</TableCell>
                                        <TableCell>2 ($150.00)</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Unpaid/Due</TableCell>
                                        <TableCell>1 ($355.00)</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Refunded</TableCell>
                                        <TableCell>0 ($0.00)</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Gross Income</TableCell>
                                        <TableCell>$2,100.00</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                            <Box p={2} display="flex" justifyContent="space-between">
                                <Button variant="outlined" startIcon={<Icon>attach_money</Icon>}>
                                    Create Invoice
                                </Button>
                                <Button variant="outlined" startIcon={<Icon>receipt</Icon>}>
                                    Resend Due Invoices
                                </Button>
                            </Box>
                        </Card>
                    </Grid>

                    {/* Send Email Section */}
                    <Grid item xs={12} md={6} lg={4}>
                        <Card elevation={3} sx={{ p: 2 }} >
                            <Typography variant="h5" p={2}>Send Email</Typography>
                            <Divider />
                            <Box p={2}>
                                <SelectMenu />
                                <Button variant="contained" startIcon={<Icon>mail_outline</Icon>}>
                                    Send Email
                                </Button>
                                <Table sx={{ mt: 2 }}>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>27/10/2020 | 12:23</TableCell>
                                            <TableCell>Order Received</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>11/05/2020 | 01:19</TableCell>
                                            <TableCell>Order Confirmation</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </Box>
                        </Card>
                    </Grid>
                </Grid>
            )},

            {/* Invoices Tab */}
            {tabIndex === 1 && (
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Card elevation={3} sx={{ p: 2 }} >
                            <Typography variant="h5" p={2}>Invoices</Typography>
                            <Divider />
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>Invoice #5ece2cef3e562cbd61996dfds</TableCell>
                                        <TableCell>28 Sep, 2024 | 10:35 PM</TableCell>
                                        <TableCell>Bit Bass Headphone</TableCell>
                                        <TableCell>PayPal</TableCell>
                                        <TableCell>$15.25</TableCell>
                                        <TableCell><Typography color="primary">Paid</Typography></TableCell>
                                        <TableCell>
                                            <IconButton>
                                                <Icon>arrow_right_alt</Icon>
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Invoice #5ece2cef3efdsfsdfcbd61996</TableCell>
                                        <TableCell>28 Sep, 2024 | 10:35 PM</TableCell>
                                        <TableCell>Comlion Watch</TableCell>
                                        <TableCell>Visa Card</TableCell>
                                        <TableCell>$75.25</TableCell>
                                        <TableCell><Typography color="error">Unpaid</Typography></TableCell>
                                        <TableCell>
                                            <IconButton>
                                                <Icon>arrow_right_alt</Icon>
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Card>
                    </Grid>
                </Grid>
            )}

            {/* Logs Tab */}
            {tabIndex === 2 && (
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Card elevation={3} sx={{ p: 2 }} >
                            <Typography variant="h5" p={2}>Customer Activity Log</Typography>
                            <Divider />
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell><b>POST</b></TableCell>
                                        <TableCell>
                                            <Chip label={200} color="success" />
                                        </TableCell>
                                        <TableCell>/api/shop</TableCell>
                                        <TableCell>110.145.15.25</TableCell>
                                        <TableCell>28 Sep, 2024 | 10:35 PM</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell><b>GET</b></TableCell>
                                        <TableCell>
                                            <Chip label={200} color="success" />
                                        </TableCell>
                                        <TableCell>/api/customer</TableCell>
                                        <TableCell>110.145.75.25</TableCell>
                                        <TableCell>28 Sep, 2024 | 10:35 PM</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell><b>PUT</b></TableCell>
                                        <TableCell>
                                            <Chip label={200} color="success" />
                                        </TableCell>
                                        <TableCell>/api/customer</TableCell>
                                        <TableCell>110.145.75.25</TableCell>
                                        <TableCell>28 Sep, 2024 | 10:35 PM</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell><b>DELETE</b></TableCell>
                                        <TableCell>
                                            <Chip label={400} color="error" />
                                        </TableCell>
                                        <TableCell>/api/customer</TableCell>
                                        <TableCell>110.145.75.25</TableCell>
                                        <TableCell>28 Sep, 2024 | 10:35 PM</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell><b>GET</b></TableCell>
                                        <TableCell>
                                            <Chip label={300} color="warning" />
                                        </TableCell>
                                        <TableCell>/api/customer</TableCell>
                                        <TableCell>110.145.75.25</TableCell>
                                        <TableCell>28 Sep, 2024 | 10:35 PM</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Card>
                    </Grid>
                </Grid>
            )}
        </Box>
    );
};
// STYLED COMPONENTS
const MenuRoot = styled("div")(({ theme }) => ({
    marginBottom: theme.spacing(2),
    width: "100%",
    maxWidth: 500,
    maxHeight: 50,
    backgroundColor: theme.palette.background.paper,
    border: "1px solid rgba(0, 0, 0, 0.15)",
}));

const options = [
    "Resend Last Invoice",
    "Send Password Reset Email",
    "Send Verification Email"
];

const SelectMenu = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(0); // İlk öğe varsayılan olarak seçilsin

    function handleClickListItem(event) {
        setAnchorEl(event.currentTarget);
    }

    function handleMenuItemClick(event, index) {
        setSelectedIndex(index);
        setAnchorEl(null);
    }

    function handleClose() {
        setAnchorEl(null);
    }

    return (
        <MenuRoot>
            <List component="nav" aria-label="Send Email Options">
                <ListItemButton onClick={handleClickListItem}>
                    <ListItemText primary={options[selectedIndex]} />
                    <Icon>arrow_drop_down</Icon>
                </ListItemButton>
            </List>

            <Menu
                id="email-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {options.map((option, index) => (
                    <MenuItem
                        key={option}
                        selected={index === selectedIndex}
                        onClick={(event) => handleMenuItemClick(event, index)}>
                        {option}
                    </MenuItem>
                ))}
            </Menu>
        </MenuRoot>
    );
};

export default ViewCustomer;
